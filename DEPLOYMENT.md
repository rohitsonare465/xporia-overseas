# Deployment Guide - Xporia Overseas

This guide explains how to deploy the Xporia Overseas website to Vercel with automatic CI/CD.

## 🚀 Overview

The project uses **Vercel** for hosting with automatic deployments via GitHub Actions. Every push to the `main` branch triggers an automatic build and deployment.

## 📋 Prerequisites

1. GitHub repository with your code
2. Vercel account (free tier works great)
3. GitHub Actions enabled in your repository

## 🔧 Initial Setup

### Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account

### Step 2: Import Project to Vercel

1. Click **"Add New Project"**
2. Import your `xporia-overseas` repository
3. Vercel will auto-detect it's a Create React App
4. **Add Environment Variables** (Important for Sanity):
   - `REACT_APP_SANITY_PROJECT_ID` = `w9p20dtj`
   - `REACT_APP_SANITY_DATASET` = `production`
5. Click **"Deploy"**

### Step 3: Get Vercel Tokens for GitHub Actions

1. Go to Vercel Dashboard → **Settings** → **Tokens**
2. Create a new token and copy it
3. Get your **Project ID** from Project Settings → General
4. Get your **Org ID** from Account Settings

### Step 4: Add GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
- `VERCEL_TOKEN` - Your Vercel token
- `VERCEL_ORG_ID` - Your organization ID
- `VERCEL_PROJECT_ID` - Your project ID
- `REACT_APP_SANITY_PROJECT_ID` - `w9p20dtj`
- `REACT_APP_SANITY_DATASET` - `production`

### Step 5: Enable Automatic Deployments

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build and test on every push to `main`
- Deploy to Vercel on successful builds
- Create preview deployments for pull requests

---

## 🔄 How It Works

### Automatic Deployment Flow

```
Push to main → GitHub Actions → Build & Test → Deploy to Vercel → Live! 🎉
```

1. **Push Code** to `main` branch
2. **GitHub Actions** triggers automatically
3. **Build & Test** job runs:
   - Installs dependencies
   - Builds the React app
   - Runs tests
   - Uploads build artifacts
4. **Deploy** job runs:
   - Deploys to Vercel
   - Updates the live site

### Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab in GitHub
2. Select **"Deploy to Vercel"** workflow
3. Click **"Run workflow"**
4. Select the branch and click **"Run workflow"**

---

## 🔐 Environment Variables

### Required Variables

| Variable | Value | Where to Set |
|----------|-------|--------------|
| `REACT_APP_SANITY_PROJECT_ID` | `w9p20dtj` | Vercel Dashboard + GitHub Secrets |
| `REACT_APP_SANITY_DATASET` | `production` | Vercel Dashboard + GitHub Secrets |

### Adding Environment Variables in Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable for all environments (Production, Preview, Development)
4. Redeploy for changes to take effect

---

## 📊 Monitoring Deployments

### Check Deployment Status

- **GitHub Actions**: Repository → Actions tab
- **Vercel Dashboard**: Dashboard → Deployments
- **Live URL**: Check your Vercel project URL

### View Build Logs

If deployment fails:
1. Go to **GitHub Actions** tab
2. Click on the failed workflow run
3. Expand the failed step to see error logs

Or in Vercel:
1. Go to **Deployments**
2. Click on the failed deployment
3. View the build logs

---

## 🛠️ Troubleshooting

### Build Fails

**Error**: `npm ci` fails
- **Solution**: Delete `package-lock.json` and run `npm install` locally, then commit

**Error**: Build runs out of memory
- **Solution**: In Vercel, go to Settings → General → Build & Development Settings, and increase memory limit

**Error**: Missing environment variables
- **Solution**: Verify all Sanity variables are set in both Vercel Dashboard and GitHub Secrets

### Deployment Fails

**Error**: Missing secrets
- **Solution**: Verify all required secrets are added in GitHub repository settings

**Error**: Permission denied
- **Solution**: Check that Vercel token has correct permissions

### Site Not Loading

**Error**: Blank page or 404
- **Solution**: Check that environment variables are set correctly in Vercel

**Error**: Routes not working (404 on refresh)
- **Solution**: SPA routing is configured in `vercel.json` - ensure the file is committed

**Error**: Sanity data not showing
- **Solution**: 
  1. Verify `REACT_APP_SANITY_PROJECT_ID` and `REACT_APP_SANITY_DATASET` are set
  2. Check Sanity Studio has published content
  3. Wait 1-2 minutes for CDN cache to update

---

## 🎯 Best Practices

1. **Always test locally** before pushing:
   ```bash
   npm run build
   npm test
   ```

2. **Use Pull Requests** for code review before merging to `main`

3. **Monitor deployments** after each push

4. **Keep secrets secure** - never commit them to code

5. **Use preview deployments** - Vercel creates preview URLs for PRs automatically

---

## 📝 Workflow Configuration

The workflow file is located at: `.github/workflows/deploy.yml`

It includes:
- ✅ Automatic builds on push to `main`
- ✅ Build artifact caching for faster builds
- ✅ Automatic deployment to Vercel
- ✅ Manual deployment trigger option
- ✅ Pull request preview builds
- ✅ Sanity environment variables support

---

## 🔗 Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Sanity Documentation](https://www.sanity.io/docs)

---

## 💡 Quick Commands

### Deploy Manually (Local)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Check Build Locally
```bash
npm run build
npm test
```

### View Deployment Logs
```bash
vercel logs [deployment-url]
```

---

## 🎉 Next Steps

1. ✅ Set up Vercel account and import project
2. ✅ Add all required secrets to GitHub
3. ✅ Push your code to `main` branch
4. ✅ Watch your site deploy automatically!

---

**Need Help?** Check the troubleshooting section or review the deployment logs in GitHub Actions or Vercel Dashboard.
