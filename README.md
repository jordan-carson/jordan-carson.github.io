# Jordan Carson — Portfolio

Personal portfolio site built with SvelteKit + Tailwind CSS, deployed to GitHub Pages.

## Stack
- **SvelteKit** with `adapter-static` for GitHub Pages
- **Tailwind CSS v4** (Vite plugin)
- **D3.js** for the interactive skills force graph
- **pnpm** as package manager

## Setup

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview   # preview the build locally
```

## GitHub Pages Deployment

### 1. Update the repo name in `svelte.config.js`

```js
base: process.env.NODE_ENV === 'production' ? '/YOUR-REPO-NAME' : ''
```

Replace `jordan-portfolio` with your actual GitHub repo name (e.g. `jordancarson.github.io` for a user site, or `portfolio` for a project site).

### 2. For a user site (`username.github.io`)

Set `base` to `''` (empty string) in production — user sites are served from the root.

### 3. Push to GitHub

The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

Make sure **GitHub Pages** is enabled in your repo settings with source set to **GitHub Actions**.

## Structure

```
src/
  routes/
    +layout.svelte          # Nav, footer, global imports
    +page.svelte             # Home: Hero, Stats, Skills, Timeline
    writings/
      +page.svelte           # Articles + conference talks
    projects/
      devgpt/
        +page.svelte         # DevGPT architecture deep dive
  lib/
    components/
      Hero.svelte
      Stats.svelte
      SkillGraph.svelte      # D3 force graph
      Timeline.svelte
    data/
      skills.js
```
