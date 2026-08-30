# Toolzi

AI tool review directory. Built with Next.js (App Router), TypeScript, and Tailwind CSS v4, exported as a fully static site (`output: "export"`) so it can be hosted anywhere that serves plain HTML/CSS/JS — including Hostinger shared hosting, with no Node.js server required.

- **Languages:** English (`/en`) and French (`/fr`) — no server-side i18n library, just a `[locale]` route segment + a small dictionary.
- **Theme:** dark by default, with a light/dark toggle (persisted per-visitor in `localStorage`).
- **Content:** all review data lives in plain TypeScript files under `src/data/` — no CMS, no database.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en/`.

## Editing content

You don't need to touch any component code to update the content below — just edit the data files.

| What | File |
|---|---|
| Tool reviews (18 tools, EN+FR) | `src/data/tools.ts` |
| "Best of" roundup posts | `src/data/roundups.ts` |
| Deals / discount codes | `src/data/deals.ts` |
| Site name, author, social links, domain | `src/data/site.ts` |
| Category labels (EN+FR) | `src/data/categories.ts` |
| About page bio | `src/app/[locale]/about/page.tsx` |
| UI text (buttons, labels, nav) | `src/i18n/dictionaries.ts` |

Every tool/roundup/deal has an `en` and `fr` version under a `content` field — keep both in sync when you edit.

**Affiliate links:** each tool's `affiliateUrl` in `tools.ts` currently points at the tool's official website as a placeholder. Swap in your real affiliate link once you have one — the disclosure text next to the button is already wired up (`src/i18n/dictionaries.ts` → `affiliate.disclosure`).

**Accent color / theme:** all color tokens are CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark). Change the `--color-accent*` values there to re-theme the whole site from one place.

## Building for production

```bash
npm run build
```

This produces a fully static site in the `out/` folder — plain HTML, CSS and JS files, no server needed.

## Deploying to Hostinger

1. Run `npm run build` locally. This creates the `out/` folder.
2. Log into **hPanel** → your hosting plan → **File Manager** (or use an FTP client like FileZilla with the FTP credentials from hPanel → **Files → FTP Accounts**).
3. Go to `public_html` (this is the web root for your primary domain). If you're deploying to a subdomain or addon domain, go to that domain's document root instead.
4. Delete the default `index.html` / placeholder files already in `public_html` (back them up first if unsure).
5. Upload **the contents of the `out/` folder** (not the `out` folder itself) into `public_html`, so `index.html` ends up directly at `public_html/index.html`.
6. Visit your domain — you should be redirected to `/en/`.

To publish updates later: re-run `npm run build`, then re-upload the contents of `out/`, overwriting the old files.

### Pointing your domain

- **If you bought the domain through Hostinger:** it's usually connected automatically once hosting is active for it. Check hPanel → **Domains** to confirm it points at this hosting account.
- **If you bought the domain elsewhere:** in hPanel go to **Domains → [your domain] → DNS / Nameservers** and either point the domain's nameservers to Hostinger's, or add an `A` record pointing at your Hostinger hosting IP (found in hPanel → **Hosting → Details**). DNS changes can take a few hours to propagate.
- Once the domain resolves, enable **SSL** for it in hPanel (Hostinger provides free SSL certificates) so the site loads over `https://`.
- Update `src/data/site.ts` → `siteConfig.url` to your real domain, then rebuild and re-upload so the sitemap and social preview cards use the correct URL.

## Pushing to GitHub

Git is already initialized locally with an initial commit. To push it to GitHub:

```bash
# 1. Create a new empty repository on github.com (no README/license — this repo already has files)
# 2. Point this local repo at it and push:
git remote add origin https://github.com/<your-username>/toolzi.git
git branch -M main
git push -u origin main
```

After that, any new commits just need `git push`.

## SEO

- `src/app/sitemap.ts` generates `sitemap.xml` with all EN/FR routes and `hreflang` alternate links.
- `src/app/robots.ts` generates `robots.txt` pointing at the sitemap.
- Per-page `<title>`/`<meta description>` are set via each page's `generateMetadata`.
- Update `siteConfig.ogImage` (`src/data/site.ts`) and add a real `public/og-image.png` for social share previews.

## Project structure

```
src/
  app/
    layout.tsx          root <html>/<body>, fonts, no-flash theme script
    page.tsx             redirects "/" -> "/en/"
    sitemap.ts, robots.ts
    [locale]/
      layout.tsx          validates locale, renders Header/Footer
      page.tsx             homepage
      tools/                directory + [slug] review template
      best-of/               index + [slug] roundup template
      deals/
      about/
  components/            shared UI (Header, Footer, ToolCard, AffiliateCta, ThemeToggle...)
  data/                   all content (tools, roundups, deals, site config, categories)
  i18n/                   locale list + UI text dictionary (en/fr)
```
