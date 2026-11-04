# C-Note

Marketing website for **C-Note Ltd**, a Rwandan professional organizing, moving, and document
management (Bika DMS) practice. Built with TanStack Start, React 19, and Tailwind CSS.

## Pages

- Home, About, Services, FAQ, Contact, Free Consultation
- Bika DMS — document management service page

## Tech stack

- [TanStack Start](https://tanstack.com/start) + [TanStack Router](https://tanstack.com/router) (file-based routing)
- React 19, Vite 7, Tailwind CSS 4
- Radix UI primitives, Framer Motion, React Hook Form + Zod

## Getting started

```bash
bun install
bun run dev
```

Other scripts: `bun run build`, `bun run preview`, `bun run lint`, `bun run format`, `bun run test`.

## Tests

```bash
bun run test
```

Covers `src/lib/submitLead.ts`, the shared helper the Contact and Free Consultation forms both use to post to formsubmit.co. It replaces logic that used to be duplicated in both route files and that had a real bug: the original `handleSubmit` awaited the `fetch` call but never checked `response.ok`, and even caught network errors without re-throwing — so a failed submission (bad network, formsubmit.co down, a non-2xx response) still showed the visitor a "Message Sent!" confirmation. Both forms now show an inline error instead when the request actually fails.

## Linting

`bun run lint` runs ESLint. Note: `eslint.config.js` didn't exist before this pass — every ESLint dependency was installed but the `lint` script had never actually been runnable.

## Continuous integration

Every push runs lint, the unit tests, and a production build (`.github/workflows/ci.yml`).

## License

Proprietary — marketing site for C-Note Ltd, not an open-source project.
