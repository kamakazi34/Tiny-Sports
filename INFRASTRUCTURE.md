# Infrastructure

**Canonical source:** https://github.com/kamakazi34/jake-saro-context/blob/Home/INFRASTRUCTURE.md

Rewritten 8 August 2026 for the Google stack build. Read it before changing anything about hosting, assets or secrets.

## Photography moved off Cloudflare R2

Site photos now serve from **`gs://tiny-sports-assets-au`**. The `R2` constant in the four page files (`src/app/page.tsx`, `about`, `how-it-works`, `who-we-help`) points at `https://storage.googleapis.com/tiny-sports-assets-au`.

**`next.config.ts` had to change too, and this is easy to miss.** `images.remotePatterns` named the R2 host explicitly. It now lists `storage.googleapis.com` with pathname `/tiny-sports-assets-au/photos/**`. **next/image rejects any host not in that list**, so if you move assets again, change the config in the same commit or every image 404s.

The two baked dashboards behind hub.saroarch.com live in the same bucket under `dashboards/`, written nightly by `scripts/refresh.sh` in the `command-centre` repo.

## Secrets

This project uses Keystatic (GitHub-backed CMS) and Resend. Those five environment variables are currently Vercel project settings: `KEYSTATIC_GITHUB_CLIENT_ID`, `KEYSTATIC_GITHUB_CLIENT_SECRET`, `KEYSTATIC_SECRET`, `NEXT_PUBLIC_KEYSTATIC_STORAGE_KIND`, `RESEND_API_KEY`.

**When hosting moves to Firebase App Hosting, they move to Secret Manager, and the Keystatic GitHub OAuth app's callback URL must be updated at the same time.** It is bound to the current domain, so CMS login breaks silently otherwise.

## Before you deploy

**Vercel refuses to build if the commit author is not a GitHub-linked user.** The deploy lands in `BLOCKED` with zero build events. The signal is `seatBlock.blockCode = COMMIT_AUTHOR_REQUIRED` on `/v13/deployments/<id>`. **Commit as `jake.alderman@gmail.com`.**

---

Please note, this document was formatted using AI but was checked by a human.
