# UCI CubeSat Website Overhaul Plan

## Overview

A full creative overhaul transforming the current purple-gradient themed site into a
premium aerospace-minimalist experience, inspired by the Hercules reference screenshot
and guided by the brand style document. All existing text copy is preserved. The
spinning Earth video (`refs/28531-370317126_medium.mp4`) becomes the hero centerpiece.

---

## 1. Design Direction

**Aesthetic**: Mission-driven aerospace minimalism. Deep space blacks, restrained blue
accents, cinematic Earth video hero, clean typography. The site should feel like a
mission control dashboard crossed with a premium aerospace company landing page.

**Key shift**: Purple gradients and glassmorphism out. Blue-tinted blacks, flat
surfaces, and typographic restraint in.

### Color System (from brand guide)

| Token                  | Value     | Usage                          |
|------------------------|-----------|--------------------------------|
| `--bg-deep-space`      | `#070A0F` | Primary background             |
| `--bg-orbital`         | `#0C111A` | Sections, nav, layering        |
| `--text-primary`       | `#F5F7FA` | Headlines, key body text       |
| `--text-muted`         | `#B8C0CC` | Secondary copy, labels         |
| `--accent-earth`       | `#2F80ED` | CTAs, links, active states     |
| `--accent-atmosphere`  | `#56CCF2` | Hover states, subtle glows     |
| `--border-starlight`   | `#1B2230` | Hairline dividers, card borders|
| `--text-dust`          | `#8892A6` | Disabled text, subtle hints    |

- No gradients on text

### Typography

| Role       | Font           | Weights   |
|------------|----------------|-----------|
| Body       | Inter          | 400, 500, 600 |
| Headlines  | Space Grotesk  | 500, 700  |

Replace all `Kufam` and `Konkhmer Sleokchher` references. Import from Google Fonts.

---

## 2. Structural Changes

### Current Route Structure (preserved)
```
/               -> /home (redirect)
/home           -> Home page
/aboutus        -> /aboutus/what-we-do (redirect)
/aboutus/what-we-do      -> Subsystems page
/aboutus/meet-the-team   -> Team roster
/contact        -> Contact page
```

### Responsive Breakpoints (updated)

The current site uses a `400px` mobile breakpoint which is too narrow. Standardize to:

| Breakpoint | Target           |
|------------|------------------|
| `< 640px`  | Mobile           |
| `< 1024px` | Tablet           |
| `>= 1024px`| Desktop          |

This aligns with Tailwind's `sm` and `lg` defaults and covers modern phone sizes.

---

## 3. Component-by-Component Plan

### 3.1 Global Styles (`index.css`)

**Changes**:
- Replace Google Fonts import: swap `Kufam` + `Konkhmer Sleokchher` for `Inter` + `Space Grotesk`
- Replace all CSS custom properties with the new color system tokens listed above
- Set `font-family: 'Inter', system-ui, sans-serif` as base
- Set `background-color: #070A0F` as root background
- Update `color-scheme: dark` on html element
- Add `<meta name="theme-color" content="#070A0F">` in `index.html`
- Remove gradient text utility classes
- Update `a[href^="mailto:"]` accent color from purple to `#2F80ED`
- Keep scroll animation system (`animate-on-scroll` / `visible`) but update easing
- Add `prefers-reduced-motion` media query to disable animations

### 3.2 Navbar (`Navbar.tsx` + `NavbarStyle.css`)

**Current issues**:
- 130px tall, oversized logo
- Mobile breakpoint at 400px too narrow
- `<button>` used for navigation links (should be `<a>` / `<Link>`)
- Dropdown uses JS hover state instead of CSS `:hover`

**New design** (matching reference):
- Height reduced to ~72px, clean horizontal bar
- Logo left-aligned (smaller, ~40px height)
- Nav links right-aligned: `Home`, `About Us` (dropdown), `Contact Us` (blue CTA button)
- Background: `--bg-orbital` (`#0C111A`) with subtle bottom border (`--border-starlight`)
- Font: Inter 500, 15px, color `--text-muted`, hover `--text-primary`
- CTA "Contact Us" button: `--accent-earth` background, white text, small rounded rect
- Mobile: hamburger at 640px breakpoint, slide-in overlay with `--bg-orbital` background
- Replace `<button className="navbtn">` wrapping `<Link>` with just `<Link>` elements styled directly
- Dropdown: CSS `:hover` based with `opacity` + `transform` transition
- Add `aria-label` to hamburger button
- Sticky/fixed position with `backdrop-filter: blur(8px)` for scroll

### 3.3 Home Page (`Home.tsx` + `Home.css`)

This is the biggest transformation. Four sections, top to bottom:

#### Hero Section
**Current**: Static background image (`cubesatWebsiteBG.png`), left-aligned text
**New**: Full-viewport cinematic hero

- **Background**: The spinning Earth video (`28531-370317126_medium.mp4`) as a `<video>` element, autoplaying, muted, looping, positioned at the bottom of the viewport (Earth's horizon rising from the bottom, matching the reference screenshot)
- **Layout**: Centered text over deep space, Earth visible at bottom
- **Content** (all existing copy preserved):
  - Small muted tagline above: "Pioneering Next-Gen Thermal Control Technology For Space Exploration" (Inter 500, `--text-muted`, uppercase tracked)
  - Large headline: "UCI CubeSat" (Space Grotesk 700, `--text-primary`, ~64px desktop)
  - Body paragraph below (Inter 400, `--text-muted`, max-width 520px, centered)
  - CTA button: "Learn More ->" in `--accent-earth`, links to `/aboutus/what-we-do`
- **Video implementation**:
  ```html
  <video autoPlay muted loop playsInline
    poster="/images/cubesatWebsiteBG.png"
    className="hero-video">
    <source src="/refs/28531-370317126_medium.mp4" type="video/mp4" />
  </video>
  ```
  Move the video file from `/refs` to `/public/videos/earth-orbit.mp4`
- **Overlay**: Subtle gradient from top (solid `#070A0F`) to transparent at ~60%, so text floats in space and Earth is visible below
- Add `fetchpriority="high"` to the poster image or preload it

#### Statistics Section
**Current**: Background image with glassmorphism cards, gradient text numbers
**New**: Clean inline stats strip

- Background: `--bg-orbital` with subtle top/bottom `--border-starlight` borders
- Layout: horizontal row, centered, generous padding
- Stats displayed as: large number (Space Grotesk 600, `--text-primary`, 48px) + label below (Inter 400, `--text-muted`, 14px)
- Keep `CountUp` animation, remove gradient text
- "10+ Years In Progress" | "200+ Members"
- Separated by a thin vertical `--border-starlight` divider

#### Who We Are Section
**Current**: Image left, text right, gradient heading
**New**: Clean two-column layout

- Background: `--bg-deep-space`
- Left: image with subtle `border-radius: 8px`, no heavy box shadow
- Right: heading "Who We Are" (Space Grotesk 600, `--text-primary`, no gradient), body text (Inter 400, `--text-muted`), "Meet The Team" link styled as text link with arrow (not a pill button)
- All existing copy preserved verbatim
- Mobile: stack vertically, image on top
- Add `loading="lazy"` and explicit `width`/`height` to the image

#### Sponsors Section
**Current**: Grid of sponsor cards with mobile carousel
**New**: Minimal logo strip

- Section title: "Our Sponsors" (Space Grotesk 500, `--text-primary`, centered)
- Logos in a single row, evenly spaced, `filter: grayscale(100%) brightness(0.7)` by default, full color on hover
- Subtle fade-in on scroll
- Mobile: horizontal scroll or auto-scrolling marquee (keep existing infinite scroll concept but clean up implementation)
- Add `loading="lazy"` to sponsor images

### 3.4 What We Do Page (`WhatWeDo.tsx` + `WhatWeDo.css`)

**Current**: Alternating image/text cards with gradient headings
**New**: Clean alternating sections

- Remove card-style containers (no border, no `--color-bg-card` backgrounds)
- Each subsystem: full-width section with generous vertical padding
- Image and text side by side, alternating (already implemented, keep `reverse` logic)
- Headings: Space Grotesk 600, `--text-primary` (no gradient)
- Body: Inter 400, `--text-muted`
- Images: `border-radius: 8px`, subtle `--border-starlight` border
- Add `loading="lazy"` and explicit dimensions to all images
- Optionally add a page header: "What We Do" with a short intro line
- Consider adding the Operations subsystem if content exists (currently missing from list but mentioned in home page copy)

### 3.5 Meet the Team Page (`MeetTheTeam.tsx` + `MeetTheTeam.css`)

**Current**: Mission section + team grid with circular progress indicators, purple accents
**New**: Two distinct sections with refined styling

#### Mission Section
- Keep two-column layout (text left, image right)
- Heading "Our Mission" with horizontal rule: change rule color from white to `--border-starlight`
- Text: Inter 400, `--text-muted`
- All copy preserved

#### Team Section
- Header: "Meet Our Team." - remove gradient on "Our Team", use `--text-primary` flat
- Subtext preserved: "A driven set of undergraduates..."
- `TeamMakeup` component: update `CircularProgress` stroke colors from purple gradient to `--accent-earth`
- Team grid: keep layout, update styling:
  - Photo border: `--border-starlight` instead of purple
  - Initials placeholder: `--accent-earth` text color, no gradient
  - Role label: `--text-muted`
  - Position: `--accent-earth` (replacing purple accent)
  - Name: `--text-primary`

### 3.6 Contact Page (`Contact.tsx` + `Contact.css`)

**Current**: "LET'S CONNECT" split header with decorative lines, purple gradient on "CONNECT"
**New**: Clean centered layout

- Header: "Let's Connect" as a single line (Space Grotesk 600, `--text-primary`)
- Remove decorative lines and gradient text
- Remove purple radial gradient background decoration
- Contact cards: `--bg-orbital` background, `--border-starlight` border
- Labels: Inter 500 uppercase, `--text-dust`
- Names: Inter 500, `--text-primary`
- Email links: `--accent-earth` color
- Keep card structure but simplify

### 3.7 Footer (`Footer.tsx` + `FooterStyle.css`)

**Current**: "Stay Connected" header, social icons, Join Us pill with purple accent
**New**: Minimal footer

- Background: `--bg-orbital`
- Top border: `--border-starlight` (remove gradient top-line effect)
- "Stay Connected" heading: Space Grotesk 500
- Social icons: `--text-muted`, hover `--text-primary`
- "Join Us" link: `--accent-earth` text with arrow, remove pill/badge styling
- "Based in Irvine, CA": `--text-dust`
- Keep all existing content

---

## 4. Accessibility Fixes (from Web Interface Guidelines audit)

These should be addressed during the overhaul:

1. **Semantic HTML**: Replace `<button>` wrapping `<Link>` in navbar with plain `<Link>` elements. Use `<nav>` wrapper for navigation. Use `<section>` and `<article>` where appropriate.
2. **Missing aria-labels**: Add `aria-label` to hamburger menu button, social media icon links, and image carousel.
3. **Heading hierarchy**: Audit all pages for proper `h1` > `h2` > `h3` nesting. Currently multiple `h1` tags per page.
4. **Focus states**: Add `focus-visible:ring` styles to all interactive elements (links, buttons). Current site has no visible focus indicators.
5. **Reduced motion**: Wrap all animations in `@media (prefers-reduced-motion: no-preference)`.
6. **Image dimensions**: Add explicit `width` and `height` to all `<img>` elements to prevent layout shift.
7. **Lazy loading**: Add `loading="lazy"` to below-fold images.
8. **Video accessibility**: Add `aria-hidden="true"` to the decorative Earth video.
9. **Skip link**: Add a "Skip to content" link at the top of the page.
10. **Form elements**: If any forms are added, ensure proper labeling.

---

## 5. Performance Improvements

1. **Video optimization**: Move `28531-370317126_medium.mp4` to `public/videos/earth-orbit.mp4`. Consider compressing to WebM for smaller file size with a `.mp4` fallback.
2. **Font loading**: Use `font-display: swap` and preconnect to Google Fonts CDN. Add `<link rel="preconnect" href="https://fonts.googleapis.com">` to `index.html`.
3. **Image optimization**: Consider converting PNGs to WebP where possible.
4. **CSS cleanup**: Remove all unused CSS rules from the old design system during the migration.
5. **Sponsor images**: Normalize sponsor logo sizes to prevent layout shift.

---

## 6. File-by-File Change Summary

| File | Action |
|------|--------|
| `index.html` | Add theme-color meta, preconnect fonts, update title |
| `src/index.css` | Replace color vars, fonts, remove gradient utilities |
| `src/components/Navbar.tsx` | Redesign: smaller, sticky, semantic links, CTA button |
| `src/components/NavbarStyle.css` | Full rewrite for new nav design |
| `src/components/Footer.tsx` | Update styling classes, remove purple accents |
| `src/components/FooterStyle.css` | Rewrite with new color tokens |
| `src/pages/home/Home.tsx` | Add video hero, restructure sections |
| `src/pages/home/Home.css` | Full rewrite for new home design |
| `src/pages/aboutus/what-we-do/WhatWeDo.tsx` | Add page header, update image attrs |
| `src/pages/aboutus/what-we-do/WhatWeDo.css` | Remove card styling, update colors/fonts |
| `src/pages/aboutus/meet-the-team/MeetTheTeam.tsx` | Update highlight styling |
| `src/pages/aboutus/meet-the-team/MeetTheTeam.css` | Replace purple with blue tokens |
| `src/components/TeamMakeup/TeamMakeup.css` | Update accent colors |
| `src/components/TeamMakeup/CircularProgress.tsx` | Change gradient stroke to blue |
| `src/pages/contact/Contact.tsx` | Simplify header structure |
| `src/pages/contact/Contact.css` | Remove gradients, update tokens |
| `public/videos/earth-orbit.mp4` | **New**: moved from `refs/` |

---

## 7. Implementation Order

1. **Foundation**: `index.css` color tokens, font imports, `index.html` meta tags
2. **Navbar**: Full redesign (used on every page, sets the tone)
3. **Home hero**: Video integration, centered layout, new typography
4. **Home sections**: Stats, Who We Are, Sponsors
5. **Footer**: Update to match new system
6. **What We Do**: Restyle subsystem sections
7. **Meet the Team**: Update colors and remove gradients
8. **Contact**: Simplify and restyle
9. **Accessibility pass**: Focus states, aria labels, heading hierarchy, reduced motion
10. **Responsive QA**: Test all breakpoints at 640px and 1024px

---

## 8. Content Preserved (no copy changes)

All of the following text remains exactly as-is:

- Hero tagline: "Pioneering Next-Gen Thermal Control Technology For Space Exploration."
- Hero body: "Our mission is to design, test, and launch..."
- Stats: "10+ Years In Progress", "200+ Members"
- Who We Are heading + both desktop and mobile body paragraphs
- All 4 subsystem titles and descriptions (Avionics, Comms, Structures, Power)
- Mission statement paragraphs
- "Meet Our Team" header + subtext
- All 37 team member entries (name, role, position, image)
- All contact information (Sonia Cruze, Prof David Copp, team email)
- Footer text ("Stay Connected", "@ucicubesat", "Based in Irvine, CA")
- "Our Sponsors" heading + all 4 sponsor logos
