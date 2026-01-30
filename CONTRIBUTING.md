# Contributing to UCI CubeSat Website

This guide covers everything you need to contribute to the UCI CubeSat website.

## Prerequisites

- [Bun](https://bun.sh) (v2+)
- [Git](https://git-scm.com)
- A code editor (VS Code recommended)

## Getting Started

```bash
git clone https://github.com/UCI-CubeSat/uci-cubesat.github.io.git
cd uci-cubesat.github.io
bun install
bun dev
```

The dev server runs at `http://localhost:5173` with hot module replacement.

## Available Scripts

| Command | Description |
|---------|-------------|
| `bun dev` | Start the development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview the production build locally |
| `bun run typecheck` | Run TypeScript type checking |
| `bun run lint` | Run ESLint |

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React 18 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS 3 | Styling |
| Vite 6 | Build tool / dev server |
| React Router 7 | Client-side routing |
| react-icons | SVG icon library |
| react-countup | Animated number counters |

## Project Structure

```
app/
├── components/          # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── CountUp.tsx
│   └── TeamMakeup/
│       ├── TeamMakeup.tsx
│       └── CircularProgress.tsx
├── hooks/
│   └── useScrollAnimation.ts
├── routes/              # Page components (one per route)
│   ├── home.tsx
│   ├── about.what-we-do.tsx
│   ├── about.meet-the-team.tsx
│   ├── contact.tsx
│   └── 404.tsx
├── root.tsx             # Root layout (HTML shell, Navbar, Footer)
├── routes.ts            # Route definitions
└── app.css              # Global styles and animations

public/
├── Headshots/           # Team photos (.webp, 240x240)
├── images/              # Logos, OG image, background poster
├── photos/              # Subsystem and team photos
├── renders/             # Satellite renders
├── videos/              # Background video (.mp4, .webm)
├── CNAME                # Custom domain config
├── robots.txt
└── sitemap.xml

scripts/
└── optimize-headshots.ts  # Batch convert headshots to WebP
```

## Routes

Routes are defined manually in `app/routes.ts`, not via file-system conventions.

| Path | File | Description |
|------|------|-------------|
| `/` | `routes/home.tsx` | Landing page |
| `/aboutus/what-we-do` | `routes/about.what-we-do.tsx` | Mission and project details |
| `/aboutus/meet-the-team` | `routes/about.meet-the-team.tsx` | Team roster |
| `/contact` | `routes/contact.tsx` | Contact information |
| `*` | `routes/404.tsx` | Catch-all 404 page |

### Adding a New Page

1. Create a new file in `app/routes/` (e.g., `app/routes/sponsors.tsx`).
2. Register it in `app/routes.ts`:
   ```ts
   route("sponsors", "routes/sponsors.tsx"),
   ```
3. Export a `meta` function for SEO metadata:
   ```tsx
   import type { Route } from "./+types/sponsors";

   export function meta({}: Route.MetaArgs) {
     return [
       { title: "Sponsors | UCI CubeSat" },
       { name: "description", content: "Our sponsors and partners." },
       { property: "og:title", content: "Sponsors | UCI CubeSat" },
       { property: "og:url", content: "https://ucicubesat.com/sponsors" },
     ];
   }
   ```
4. Add navigation links in `app/components/Navbar.tsx` if needed.
5. Add the path to the `prerender` array in `react-router.config.ts`.

## Component Conventions

- **Named exports** — no default exports (except the root `App` in `root.tsx`).
- **Functional components** with hooks.
- **TypeScript interfaces** for all props.
- **Path alias** — use `~/` to reference files under `app/`:
  ```tsx
  import { useScrollAnimation } from "~/hooks/useScrollAnimation";
  ```

### Example Component

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="rounded-lg bg-orbital p-6">
      <img src={imageUrl} alt={title} loading="lazy" className="w-full h-auto" />
      <h3 className="text-xl font-semibold text-primary mt-4">{title}</h3>
      <p className="text-muted mt-2">{description}</p>
    </div>
  );
}
```

## Styling

All styling is done with Tailwind CSS utility classes. No CSS modules or inline styles.

### Custom Theme Colors

| Class | Hex | Usage |
|-------|-----|-------|
| `deep-space` | `#070A0F` | Primary dark background |
| `orbital` | `#0C111A` | Secondary dark background |
| `primary` | `#F5F7FA` | Light text |
| `muted` | `#B8C0CC` | Secondary text |
| `earth` | `#2F80ED` | Action / link color |
| `atmosphere` | `#56CCF2` | Hover / accent color |
| `starlight` | `#1B2230` | Borders / subtle elements |
| `dust` | `#8892A6` | Tertiary text |

Use these like any Tailwind color: `text-primary`, `bg-deep-space`, `border-starlight`, `hover:text-atmosphere`, etc.

### Custom Breakpoints

| Prefix | Width | Usage |
|--------|-------|-------|
| `xs` | 480px | Extra small screens |
| `nav` | 900px | Navbar collapse point |

These work with Tailwind's `max-*` variant for mobile-first design: `max-xs:text-sm`, `max-nav:hidden`.

### Animations

Several custom animations are available:

- `animate-fade-in-up` / `animate-fade-in-up-sm` — fade-in with upward motion
- `animate-sat-float` — continuous satellite floating effect
- `animate-sat-drop` — satellite drop-in entrance

For scroll-triggered animations, use the `useScrollAnimation` hook:

```tsx
import { useScrollAnimation } from "~/hooks/useScrollAnimation";

export function MySection() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      Content fades in when scrolled into view
    </div>
  );
}
```

Or use the CSS class approach with staggered delays:

```html
<div className="animate-on-scroll">First item</div>
<div className="animate-on-scroll animate-delay-1">Second item (delayed)</div>
<div className="animate-on-scroll animate-delay-2">Third item (more delayed)</div>
```

### Section Glow Effects

Two section top-border glow classes are available in `app.css`:

- `.section-glow-atmosphere` — cyan/blue glow
- `.section-glow-earth` — blue glow

## Images and Assets

### Adding Team Headshots

1. Place the original image in `public/Headshots/`.
2. Run the optimization script:
   ```bash
   bun run scripts/optimize-headshots.ts
   ```
   This converts images to 240x240 WebP at quality 80 and removes the originals.

### General Image Guidelines

- Use **WebP** format when possible.
- Always add `loading="lazy"` to images below the fold.
- Provide `width` and `height` or constrain with Tailwind (`max-w-[300px] h-auto`).
- Place static assets in the appropriate `public/` subdirectory.
- Reference assets from `public/` with a leading `/`:
  ```tsx
  <img src="/images/logo.webp" alt="UCI CubeSat logo" />
  ```

## Accessibility

- All images need descriptive `alt` text.
- Interactive elements need proper ARIA labels.
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`).
- Animations respect `prefers-reduced-motion` — the site disables transitions and animations when this is set.
- The Navbar includes a skip-to-content link for keyboard navigation.

## Deployment

Deployment is fully automated. When you push (or merge a PR) to `main`, GitHub Actions will:

1. Install dependencies with Bun
2. Build the production bundle
3. Generate a `404.html` fallback for SPA routing
4. Deploy to GitHub Pages at [ucicubesat.com](https://ucicubesat.com)

There is no manual deploy step. Just get your code into `main`.

## Workflow

1. Create a branch off `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes.
3. Verify everything works:
   ```bash
   bun run typecheck
   bun run lint
   bun run build
   ```
4. Commit with a [conventional commit](https://www.conventionalcommits.org) message:
   ```
   feat: add sponsors page
   fix: navbar dropdown not closing on mobile
   perf: compress team photos to webp
   ```
5. Push and open a pull request against `main`.
6. Once approved and merged, the site deploys automatically.
