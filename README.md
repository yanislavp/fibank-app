# Fibank — Responsive Login Form with Data Table

A validated login form that on success redirects
to a paginated, cached and offline-aware table of Star Wars characters fetched
from [SWAPI](https://swapi.py4e.com/api/people).

## What it does

- **Login** — a `username`/`password` form (4–30 characters each) built on Radix UI's `Form` primitive, with live validation as the user types and a disabled submit button until both fields pass.
- **Route guarding** — `/table` redirects to `/login` if you're not
  authenticated, and `/login` redirects to `/table` if you already are.
- **Data table** — fetches a page of people from SWAPI, paginates
  forward/backward, and caches each page in `localStorage` for 5 minutes so
  revisiting a page doesn't re-fetch it.
- **Offline handling** — a full-screen modal appears automatically if the
  browser goes offline or a fetch fails due to a network error, and clears
  itself once connectivity returns.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Bundler/Tooling:** Vite
- **Styling:** Tailwind CSS, Tailwind Variants, Radix UI
- **Linting/Formatting:** ESLint
- **Routing** React Router 8

## Getting started

### Prerequisites

- Node.js `>=22.22.0`

### 1. Install dependencies

```bash
pnpm install   # or: npm install
```

### 2. Set up environment variables

Copy the example file and fill in the real value:

```bash
cp .env.example .env.local
```

### 3. Run the dev server

```bash
pnpm dev   # or: npm run dev
```

The app runs at http://localhost:5173. Any username/password of 4–30
characters logs you in and takes you to `/table`.

## Scripts

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `pnpm dev`        | Start the Vite dev server            |
| `pnpm build`      | Type-check and build for production  |
| `pnpm preview`    | Preview the production build locally |
| `pnpm lint`       | Run ESLint                           |
| `pnpm test`       | Run the unit tests once (Vitest)     |
| `pnpm test:watch` | Run tests in watch mode              |
| `pnpm format`     | Run Prettier formatter               |
