# Deploy portfolio to Vercel (free)

The **React site** and **contact/profile APIs** are configured for Vercel. The Spring Boot `backend/` folder is only for local development; you do not need to deploy it for the live site.

## What you need to do

### 1. Push code to GitHub

1. Create a new repository on [github.com/new](https://github.com/new) (e.g. `my-portfolio`).
2. In PowerShell, from this folder:

```powershell
cd "C:\Users\Anuruddh Bajpai\Desktop\MyPortfolio"
git init
git add .
git commit -m "Prepare portfolio for Vercel deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO` with your GitHub details.

### 2. Import project on Vercel

1. Sign up or log in at [vercel.com](https://vercel.com) (free Hobby plan).
2. Click **Add New… → Project**.
3. **Import** your GitHub repository.
4. Set **Root Directory** to `frontend` (click Edit → type `frontend` → Continue).
5. Vercel should detect **Vite** automatically. Leave build settings as default.

### 3. Environment variables (contact form)

In the Vercel project: **Settings → Environment Variables**. Add these for **Production** (and Preview if you want):

| Name | Value |
|------|--------|
| `MAIL_USERNAME` | Your Gmail address (e.g. `anuruddh209401@gmail.com`) |
| `MAIL_PASSWORD` | [Gmail App Password](https://support.google.com/accounts/answer/185833) (16 characters, not your normal password) |
| `PORTFOLIO_CONTACT_INBOX` | (Optional) Inbox to receive messages; defaults to `MAIL_USERNAME` |

Redeploy after saving env vars (**Deployments → … → Redeploy**).

### 4. Custom domain (optional)

**Settings → Domains** → add `yourname.dev` or a subdomain. Vercel provides free `*.vercel.app` URLs without a custom domain.

---

## Local development

- **Frontend only:** `cd frontend` → `npm install` → `npm run dev`
- **With Spring Boot API:** run the backend on port 8080; Vite proxies `/api` to it.

## Verify after deploy

- Open your `https://….vercel.app` URL — home and project pages should load.
- Submit the contact form once — you should receive an email at your inbox.

If the form returns “Email is not configured”, check `MAIL_USERNAME` and `MAIL_PASSWORD` in Vercel and redeploy.
