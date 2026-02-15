This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## EmailJS Setup

This portfolio includes a contact form that sends emails using EmailJS. To set it up:

1. **Create an EmailJS account** at [https://www.emailjs.com/](https://www.emailjs.com/)

2. **Create an email service:**

   - Go to Email Services in your dashboard
   - Add a new service (Gmail, Outlook, etc.)
   - Note down the Service ID

3. **Create an email template:**

   - Go to Email Templates
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name (Ali Haider)
   - Set the recipient email to your email address
   - Note down the Template ID

4. **Get your Public Key:**

   - Go to Account → General
   - Copy your Public Key

5. **Configure environment variables:**

   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Test the contact form** to ensure emails are being sent correctly.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to GitHub Pages (hadikhan007.github.io)

This portfolio is set up to deploy to **https://hadikhan007.github.io/**.

> **If the old version keeps showing:** Set Pages Source to **GitHub Actions** (not "Deploy from a branch"). See [DEPLOYMENT_FIX.md](./DEPLOYMENT_FIX.md) for steps.

### Option A: Automatic deployment (GitHub Actions)

1. Create a repo named `hadikhan007.github.io` on GitHub (for root URL).
2. Push your code to the `main` branch:
   ```bash
   git remote add origin https://github.com/HadiKhan007/hadikhan007.github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** in your repo.
4. Under "Build and deployment", set **Source** to **GitHub Actions**.
5. Push any change to trigger the workflow. Your site will be live at https://hadikhan007.github.io/

### Option B: Manual deployment (gh-pages)

```bash
npm run build
npx gh-pages -d out
```

Then in **Settings → Pages**, set the source to the `gh-pages` branch and `/ (root)`.

### Important for user site

- Repo must be named `hadikhan007.github.io` for the root URL.
- If you use a different repo name (e.g. `portfolio`), the site will be at `https://hadikhan007.github.io/portfolio/` and you’ll need to add `basePath: '/portfolio'` in `next.config.ts`.

---

## Deploy on Vercel

You can also deploy to [Vercel](https://vercel.com/new) for server-side features if needed.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
