# shadcn-cmdk-search

**Overview**

- **shadcn-cmdk-search** is a small Next.js demo app showcasing a keyboard-driven command palette built with the shadcn/ui component primitives and a set of custom UI components. It demonstrates a focused, accessible command menu, site navigation integration, and a set of example pages and blocks.

**Key Features**

- Lightweight Next.js app using app directory (Next 16.\*).
- Reusable `CommandMenu` layout component for a keyboard-accessible command palette.
- UI primitives and components under `components/ui` adapted from shadcn-studio patterns.
- Example content pages and shadcn-studio blocks in `app/` and `components/shadcn-studio/blocks`.

**Repository Structure (high level)**

- `app/` — Next.js app routes and pages (home, about-us, blog, contact-us).
- `components/layout/CommandMenu.tsx` — central command palette component.
- `components/ui/` — shared UI primitives (button, input, command, kbd, etc.).
- `components/shadcn-studio/blocks/` — example blocks (hero, pricing, contact-us, about-us).
- `assets/data/` — sample data for the blog and search.

**Quickstart**
Prerequisites: `node` (v16+ recommended) and `pnpm` (project uses pnpm lockfile).

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open `http://localhost:3000` in your browser.

**Usage**

- The command palette UI is implemented in `components/layout/CommandMenu.tsx` and wired into the site layout. Open the component to view the key bindings and available commands.
- Look at `components/ui/command.tsx` for the command UI primitives and `components/ui/kbd.tsx` for keyboard hint components.
- Sample pages live under `app/` (e.g., `app/about-us`, `app/blog`). Use the command palette to navigate between them.

**Development Notes**

- Add new commands by extending the command registry inside `CommandMenu.tsx` (or the search/data module in `assets/data/search.ts`) and provide a handler that navigates using Next.js router.

**Testing & Build**

- No tests are included by default. To build for production:

```bash
pnpm build
pnpm start
```

**Contributing**

- Contributions welcome. For small changes, open a pull request against `main` with a clear description.
- Keep diffs focused: update or add components under `components/` and pages under `app/`.

**License**

- Add a LICENSE file to specify the project license. (No license file included in this repo currently.)

**Where to look next**

- Start with `components/layout/CommandMenu.tsx` to understand how commands are registered and rendered.
- Inspect `components/ui/command.tsx` for the implementation pattern used across the UI.
