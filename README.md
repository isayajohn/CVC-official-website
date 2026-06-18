# AIC Chang'ombe Choir Frontend

This project has been migrated from Next.js to Angular.

## Stack

- Angular 21 standalone components
- Angular Router with locale-prefixed routes (`/en/...`, `/sw/...`)
- TypeScript
- Plain CSS with shared design tokens
- Small Express API for admin login/session/content persistence

## Available Scripts

```bash
npm install
npm start
```

`npm start` and `npm run dev` start:

- Angular dev server on `http://localhost:4200`
- API server on `http://127.0.0.1:4000`

Additional scripts:

```bash
npm run build
npm run frontend
npm run api
```

## Admin Login

Defaults:

- Username: `admin`
- Password: `admin123`

Optional environment variables:

```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-strong-password
ADMIN_SESSION_SECRET=your-long-random-secret
PORT=4000
```

## Content Storage

Managed admin content is stored in:

```bash
data/managed-content.json
```

The Angular frontend reads from `/api/content`, and the admin content page writes back to the same file through the Express API.

## Routes

- `/en`
- `/en/music`
- `/en/shop`
- `/en/tickets`
- `/en/services`
- `/en/events`
- `/en/about`
- `/en/admin-login`
- `/en/admin`
- `/en/admin/content`

The same routes also exist under `/sw`.
