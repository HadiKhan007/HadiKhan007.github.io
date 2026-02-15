# Fix: Old Version Showing on hadikhan007.github.io

Your Pages is set to **"Deploy from a branch"** instead of **"GitHub Actions"**. That causes the old (or wrong) content to appear.

## One-time fix (about 30 seconds)

1. Open your repo: **https://github.com/HadiKhan007/hadikhan007.github.io**
2. Go to **Settings** → **Pages** (under Code and automation)
3. Under **Build and deployment**
4. Click **Source** dropdown
5. Change from **"Deploy from a branch"** → **"GitHub Actions"**
6. Save (if needed)

## After that

- Each push to `main` will trigger the workflow.
- The workflow will build the app and deploy the latest version.
- The live site will update at https://hadikhan007.github.io/

## Optional: deploy now (without a new push)

1. Go to **Actions**
2. Select **"Deploy Next.js site to Pages"**
3. Click **"Run workflow"** → **"Run workflow"**
4. Wait for it to finish (about 1–2 minutes)
5. Hard refresh the site: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

## Why this happens

| Source | Result |
|--------|--------|
| Deploy from a branch | GitHub serves raw files from `main` (no build) |
| GitHub Actions | Runs your workflow, builds Next.js, deploys the built site |

Next.js must be built before deployment. That only happens when **GitHub Actions** is the source.
