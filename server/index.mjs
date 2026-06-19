import cookieParser from "cookie-parser";
import express from "express";
import { createHmac, timingSafeEqual } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const contentPath = path.join(repoRoot, "data", "managed-content.json");

const ADMIN_COOKIE_NAME = "cvc_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 8;
const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT || 4000);

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || "change-this-admin-session-secret";
}

function getAdminCredentials() {
  return {
    username: process.env.ADMIN_USERNAME || "admin",
    password: process.env.ADMIN_PASSWORD || "admin123",
  };
}

function sign(value) {
  return createHmac("sha256", getSecret()).update(value).digest("base64url");
}

function createAdminSessionToken(username) {
  const payload = {
    sub: username,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };

  const encodedPayload = Buffer.from(JSON.stringify(payload), "utf8").toString(
    "base64url",
  );
  return `${encodedPayload}.${sign(encodedPayload)}`;
}

function verifyAdminSessionToken(token) {
  if (!token) return null;
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expected = sign(encodedPayload);
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (
    actualBuffer.length !== expectedBuffer.length ||
    !timingSafeEqual(actualBuffer, expectedBuffer)
  ) {
    return null;
  }

  try {
    const payload = JSON.parse(
      Buffer.from(encodedPayload, "base64url").toString("utf8"),
    );
    if (!payload?.sub || !payload?.exp) return null;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}

function sessionCookieOptions(maxAge = SESSION_TTL_SECONDS * 1000) {
  return {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge,
  };
}

async function readManagedContent() {
  const raw = await readFile(contentPath, "utf8");
  return JSON.parse(raw);
}

async function writeManagedContent(content) {
  await writeFile(contentPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");
}

const app = express();

app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

app.get("/api/content", async (_request, response) => {
  try {
    const content = await readManagedContent();
    response.json(content);
  } catch {
    response.status(500).json({ message: "Failed to load content" });
  }
});

app.put("/api/content", async (request, response) => {
  try {
    const session = verifyAdminSessionToken(
      request.cookies?.[ADMIN_COOKIE_NAME],
    );
    if (!session) {
      response.status(401).json({ message: "Unauthorized" });
      return;
    }

    const body = request.body;
    if (
      !body?.site ||
      !body?.services?.en ||
      !body?.services?.sw ||
      !body?.customization ||
      !body?.contentPages?.en ||
      !body?.contentPages?.sw ||
      !body?.news?.en ||
      !body?.news?.sw
    ) {
      response.status(400).json({ message: "Invalid content payload" });
      return;
    }

    await writeManagedContent(body);
    response.json({ ok: true });
  } catch {
    response.status(500).json({ message: "Failed to save content" });
  }
});

app.post("/api/admin/login", (request, response) => {
  const { username: expectedUsername, password: expectedPassword } =
    getAdminCredentials();
  const { username, password } = request.body ?? {};

  if (username !== expectedUsername || password !== expectedPassword) {
    response.status(401).json({ message: "Invalid credentials" });
    return;
  }

  response.cookie(
    ADMIN_COOKIE_NAME,
    createAdminSessionToken(username),
    sessionCookieOptions(),
  );
  response.json({ ok: true });
});

app.get("/api/admin/session", (request, response) => {
  const session = verifyAdminSessionToken(request.cookies?.[ADMIN_COOKIE_NAME]);
  if (!session) {
    response.status(401).json({ authenticated: false });
    return;
  }

  response.json({ authenticated: true, username: session.sub });
});

app.post("/api/admin/logout", (_request, response) => {
  response.cookie(ADMIN_COOKIE_NAME, "", sessionCookieOptions(0));
  response.json({ ok: true });
});

const server = app.listen(PORT, HOST);

server.on("listening", () => {
  console.log(`CVC API server listening on http://${HOST}:${PORT}`);
});

server.on("error", (error) => {
  const address = `${HOST}:${PORT}`;

  if (error.code === "EADDRINUSE") {
    console.error(
      `CVC API server could not start because ${address} is already in use.`,
    );
  } else {
    console.error(`CVC API server failed to start on ${address}.`);
    console.error(error);
  }

  process.exit(1);
});

function shutdown() {
  server.close(() => {
    process.exit(0);
  });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
