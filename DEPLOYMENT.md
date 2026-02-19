# Deployment Guide - Montfort Portfolio

## Step 1: Prepare Your Code for GitHub

### Initialize Git Repository

```bash
# In your project folder (f:\Myprojects)
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create account)
2. Click the **+** icon → **New repository**
3. Name it: `montfort-portfolio` (or any name you prefer)
4. Make it **Public** (required for free hosting)
5. **Don't** initialize with README (you already have files)
6. Click **Create repository**

### Push to GitHub

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/montfort-portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Render (Free Node.js Hosting)

### Create Render Account

1. Go to [render.com](https://render.com)
2. Sign up with your **GitHub account** (easiest option)
3. Authorize Render to access your GitHub repositories

### Deploy Your App

1. In Render dashboard, click **New +** → **Web Service**
2. Connect your GitHub account if not already connected
3. Select your repository: `montfort-portfolio`
4. Configure settings:
   - **Name**: `montfort-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: **Free** (select this)
5. Click **Create Web Service**

### Wait for Deployment

- Render will build and deploy your app (takes 2-5 minutes)
- You'll get a free URL like: `montfort-portfolio.onrender.com`
- Your portfolio will be live! 🎉

### Important Notes for Render Free Tier:

- ⚠️ App spins down after 15 minutes of inactivity
- First request after spin-down takes ~30 seconds to wake up
- Perfect for portfolio sites (not high-traffic production apps)

---

## Step 3: Buy a Domain (Optional but Recommended)

### Recommended Domain Registrars:

1. **Namecheap** - [namecheap.com](https://www.namecheap.com)
   - Search for: `montfortsayamika.com` or `montfort.dev`
   - First year: ~$6-8 for .com, ~$12-15 for .dev
   - Easy to use, good support

2. **Porkbun** - [porkbun.com](https://porkbun.com)
   - Transparent pricing
   - Free WHOIS privacy included

3. **Cloudflare Registrar** - [cloudflare.com/products/registrar](https://www.cloudflare.com/products/registrar)
   - At-cost pricing (often cheapest)
   - Best for long-term savings

### Domain Suggestions:

- `montfortsayamika.com`
- `montfortsayamika.dev`
- `montfort-portfolio.com`
- `sayamika.dev`

---

## Step 4: Connect Domain to Render

### In Render Dashboard:

1. Go to your web service
2. Click **Settings** → **Custom Domains**
3. Click **Add Custom Domain**
4. Enter your domain: `montfortsayamika.com` (or your domain)
5. Render will show you DNS records to add

### In Your Domain Registrar (Namecheap example):

1. Go to your domain's DNS settings
2. Add a **CNAME** record:
   - **Type**: CNAME
   - **Host**: `@` or `www`
   - **Value**: `montfort-portfolio.onrender.com` (your Render URL)
   - **TTL**: Automatic

3. For root domain (@), you might need an **A Record** instead:
   - **Type**: A
   - **Host**: `@`
   - **Value**: (IP address provided by Render)
   - **TTL**: Automatic

### Wait for DNS Propagation

- Takes 5 minutes to 48 hours (usually 10-30 minutes)
- Check status in Render dashboard
- Once verified, your domain will work!

---

## Step 5: Configure Email (Optional)

### Set Up Environment Variables in Render:

1. Go to your Render service → **Environment**
2. Add these variables:
   - `EMAIL_USER`: `sayamikamont53@gmail.com`
   - `EMAIL_PASS`: (Your Gmail App Password - see below)

### Get Gmail App Password:

1. Go to [Google Account Settings](https://myaccount.google.com)
2. Security → 2-Step Verification (enable if not already)
3. App Passwords → Generate new app password
4. Copy the 16-character password
5. Use it as `EMAIL_PASS` in Render

---

## Alternative: Deploy to Vercel (Another Free Option)

### If Render doesn't work for you:

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Vercel auto-detects Node.js
5. Deploy!

**Note**: Vercel uses serverless functions, so you might need to adjust your Express app slightly.

---

## Troubleshooting

### App won't start:
- Check Render logs for errors
- Ensure `package.json` has correct `start` script
- Verify `server.js` uses `process.env.PORT`

### Domain not working:
- Wait 30-60 minutes for DNS propagation
- Check DNS records are correct
- Verify domain in Render dashboard shows "Verified"

### Contact form not sending emails:
- Check `EMAIL_USER` and `EMAIL_PASS` are set in Render
- Verify Gmail App Password is correct
- Check Render logs for email errors

---

## Your Portfolio URLs:

- **Render Free URL**: `https://montfort-portfolio.onrender.com`
- **Custom Domain**: `https://yourdomain.com` (after setup)

---

## Next Steps After Deployment:

1. ✅ Test your portfolio on the free Render URL
2. ✅ Share it with potential employers
3. ✅ Buy a domain when ready
4. ✅ Connect domain to Render
5. ✅ Update your resume with your portfolio URL!

---

**Need Help?** Check Render's documentation: [render.com/docs](https://render.com/docs)
