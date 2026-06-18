import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Injectable, computed, inject, signal } from "@angular/core";
import { firstValueFrom } from "rxjs";

interface SessionResponse {
  authenticated: boolean;
  username?: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly authenticatedState = signal(false);
  private readonly usernameState = signal<string | null>(null);

  readonly authenticated = computed(() => this.authenticatedState());
  readonly username = computed(() => this.usernameState());

  async login(
    username: string,
    password: string,
  ): Promise<{ ok: boolean; message?: string }> {
    try {
      await firstValueFrom(
        this.http.post("/api/admin/login", { username, password }),
      );
      this.authenticatedState.set(true);
      this.usernameState.set(username);
      return { ok: true };
    } catch (error) {
      const message =
        error instanceof HttpErrorResponse &&
        typeof error.error?.message === "string"
          ? error.error.message
          : "Login failed";
      this.authenticatedState.set(false);
      this.usernameState.set(null);
      return { ok: false, message };
    }
  }

  async checkSession(): Promise<boolean> {
    try {
      const session = await firstValueFrom(
        this.http.get<SessionResponse>("/api/admin/session"),
      );
      this.authenticatedState.set(session.authenticated);
      this.usernameState.set(session.username ?? null);
      return session.authenticated;
    } catch {
      this.authenticatedState.set(false);
      this.usernameState.set(null);
      return false;
    }
  }

  async logout(): Promise<void> {
    await firstValueFrom(this.http.post("/api/admin/logout", {}));
    this.authenticatedState.set(false);
    this.usernameState.set(null);
  }
}
