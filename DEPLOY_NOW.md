# Deploy Your Portfolio in 2 Minutes (FREE)

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/Almichot-1/portfolio.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to **https://vercel.com/signup**
2. Click "Continue with GitHub"
3. Click "Import Project"
4. Paste your repo URL: `https://github.com/Almichot-1/portfolio`
5. Click "Deploy"

**Done! Live in 2 minutes.**

Your site will be at: `https://your-portfolio-xyz.vercel.app`

---

## Option 2: Netlify (Also Free)

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy on Netlify
1. Go to **https://app.netlify.com/signup**
2. Connect GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repo
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

**Done!**

---

## Option 3: GitHub Pages (Free but needs extra setup)

Not recommended for Next.js - use Vercel instead.

---

## Quick Commands

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Portfolio ready for deployment"

# Add remote (replace with your repo)
git remote add origin https://github.com/Almichot-1/portfolio.git

# Push
git push -u origin main
```

---

## What You Get (FREE):

✅ Custom domain support
✅ Automatic HTTPS
✅ Global CDN
✅ Automatic deployments on git push
✅ Preview deployments for branches
✅ 100GB bandwidth/month
✅ Unlimited sites

---

## After Deployment:

1. **Add Contact Form API Key**
   - Get key from https://web3forms.com
   - Add to Vercel environment variables
   - Redeploy

2. **Custom Domain (Optional)**
   - Buy domain from Namecheap ($10/year)
   - Add to Vercel settings
   - Update DNS

---

## Fastest Path:

1. Run these commands:
```bash
git init
git add .
git commit -m "Deploy portfolio"
```

2. Go to https://vercel.com
3. Import from GitHub
4. Click Deploy

**Your portfolio will be live in 2 minutes!**

---

## Need Help?

If git commands fail:
1. Install Git: https://git-scm.com/download/win
2. Restart terminal
3. Try again

If GitHub repo doesn't exist:
1. Go to https://github.com/new
2. Name it "portfolio"
3. Don't initialize with README
4. Copy the remote URL
5. Use it in the git remote command
