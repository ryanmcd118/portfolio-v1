# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop      # Start dev server (localhost:8000)
npm run build        # Production build to /public
npm run serve        # Serve production build locally
npm run clean        # Clear Gatsby cache (use when builds behave unexpectedly)
npm run format       # Prettier format all JS/JSON/MD files
```

Node version: 18.16.1 (see `.nvmrc`)

Pre-commit hooks run lint-staged (Prettier + ESLint) automatically via Husky.

## Architecture

**Gatsby 5 static site** — a personal portfolio with blog. Pure JavaScript (no TypeScript).

### Content Pipeline

Markdown files in `/content` (posts, projects, featured, jobs) are transformed via `gatsby-transformer-remark` into GraphQL nodes. Blog posts and tag pages are dynamically created in `gatsby-node.js`. Section components query their own data using `useStaticQuery`.

### Page Structure

The home page (`src/pages/index.js`) renders section components in order: Hero → About → Jobs → Featured → Projects → Contact, all wrapped in `Layout` which handles the loading animation, theme provider, and external link behavior.

Blog lives at `/pensieve` with individual post templates (`src/templates/post.js`) and tag filtering (`src/templates/tag.js`).

### Styling

- **Styled Components** with a ThemeProvider (breakpoints/mixins defined in `src/styles/theme.js`)
- CSS custom properties for colors/fonts defined in `src/styles/variables.js`
- Global styles in `src/styles/GlobalStyle.js`, reusable patterns in `src/styles/mixins.js`

### Webpack Aliases

Configured in `gatsby-config.js` via `gatsby-plugin-alias-imports`:
`@components`, `@config`, `@styles`, `@hooks`, `@utils`, `@pages`, `@images`, `@fonts`

### Animation

- ScrollReveal for scroll-triggered reveals
- Anime.js for complex animations (loader, hero)
- react-transition-group for page transitions
- `usePrefersReducedMotion` hook gates all animations for accessibility

### Key Config

`src/config.js` — site metadata, nav links, social URLs, colors, animation timing constants.
