# Deployment Guide - Xporia Overseas

This guide explains how to set up automatic deployment for the Xporia Overseas website using CI/CD.

## 🚀 Overview

The project is configured to automatically deploy to three platforms:
- **Vercel** (Recommended) - Best for React apps, zero-config
- **Netlify** - Great alternative with similar features
- **GitHub Pages** - Free hosting directly from GitHub

## 📋 Prerequisites

1. GitHub repository with your code
2. Account on your chosen deployment platform (Vercel/Netlify/GitHub Pages)
3. GitHub Actions enabled in your repository

## 🔧 Setup Instructions

### Option 1: Deploy to Vercel (Recommended)

#### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with your GitHub account

#### Step 2: Import Project
1. Click "Add New Project"
2. Import your `xporia-overseas` repository
3. Vercel will auto-detect it's a Create React App
4. Click "Deploy"

#### Step 3: Get Vercel Tokens
1. Go to Vercel Dashboard → Settings → Tokens
2. Create a new token and copy it
3. Get your Project ID from Project Settings → General
4. Get your Org ID from Account Settings

#### Step 4: Add GitHub Secrets
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `VERCEL_TOKEN` - Your Vercel token
- `VERCEL_ORG_ID` - Your organization ID
- `VERCEL_PROJECT_ID` - Your project ID

#### Step 5: Enable Workflow
The GitHub Actions workflow will automatically deploy on push to `main` branch.

---

### Option 2: Deploy to Netlify

#### Step 1: Create Netlify Account
1. Go to [netlify.com](https://netlify.com)
2. Sign up with your GitHub account

#### Step 2: Create New Site
1. Click "Add new site" → "Import an existing project"
2. Connect to GitHub and select `xporia-overseas`
3. Build settings are already configured in `netlify.toml`
4. Click "Deploy site"

#### Step 3: Get Netlify Tokens
1. Go to User Settings → Applications → Personal access tokens
2. Create a new token and copy it
3. Get your Site ID from Site Settings → General → Site details

#### Step 4: Add GitHub Secrets
Go to your GitHub repository → Settings → Secrets and variables → Actions

Add these secrets:
- `NETLIFY_AUTH_TOKEN` - Your personal access token
- `NETLIFY_SITE_ID` - Your site ID

---

### Option 3: Deploy to GitHub Pages

#### Step 1: Enable GitHub Pages
1. Go to your repository → Settings → Pages
2. Under "Source", select "GitHub Actions"

#### Step 2: Push to Main Branch
The workflow will automatically build and deploy to GitHub Pages.

Your site will be available at: `https://[your-username].github.io/xporia-overseas`

---

## 🔄 How It Works

### Automatic Deployment Flow

1. **Push Code** to `main` branch
2. **GitHub Actions** triggers automatically
3. **Build & Test** job runs:
   - Installs dependencies
   - Builds the React app
   - Runs tests
   - Uploads build artifacts
4. **Deploy** job runs (for your chosen platform):
   - Deploys the built application
   - Updates the live site

### Manual Deployment

You can also trigger deployment manually:
1. Go to Actions tab in GitHub
2. Select "Deploy to Production" workflow
3. Click "Run workflow"
4. Select the branch and click "Run workflow"

## 🔐 Environment Variables

If your app needs environment variables:

1. Add them to your deployment platform:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Build & deploy → Environment
   - **GitHub Pages**: Repository Settings → Secrets → Actions

2. Prefix with `REACT_APP_` (e.g., `REACT_APP_API_URL`)

3. Access in code:
   ```javascript
   const apiUrl = process.env.REACT_APP_API_URL;
   ```

## 📊 Monitoring Deployments

### Check Deployment Status

- **GitHub Actions**: Repository → Actions tab
- **Vercel**: Dashboard → Deployments
- **Netlify**: Site Dashboard → Deploys
- **GitHub Pages**: Repository → Settings → Pages

### View Build Logs

If deployment fails:
1. Go to GitHub Actions tab
2. Click on the failed workflow run
3. Expand the failed step to see error logs

## 🛠️ Troubleshooting

### Build Fails

**Error**: `npm ci` fails
- **Solution**: Delete `package-lock.json` and run `npm install` locally, then commit

**Error**: Build runs out of memory
- **Solution**: Add `NODE_OPTIONS=--max_old_space_size=4096` to build environment

### Deployment Fails

**Error**: Missing secrets
- **Solution**: Verify all required secrets are added in GitHub repository settings

**Error**: Permission denied
- **Solution**: Check that tokens have correct permissions

### Site Not Loading

**Error**: Blank page or 404
- **Solution**: For GitHub Pages, ensure `PUBLIC_URL` is set correctly in workflow

**Error**: Routes not working
- **Solution**: SPA routing is configured in `vercel.json` and `netlify.toml`

## 🎯 Best Practices

1. **Always test locally** before pushing:
   ```bash
   npm run build
   npm test
   ```

2. **Use Pull Requests** for code review before merging to `main`

3. **Monitor deployments** after each push

4. **Keep secrets secure** - never commit them to code

5. **Use environment-specific configs** for staging vs production

## 📝 Workflow Configuration

The workflow file is located at: `.github/workflows/deploy.yml`

It includes:
- ✅ Automatic builds on push to `main`
- ✅ Build artifact caching for faster builds
- ✅ Parallel deployment to multiple platforms
- ✅ Manual deployment trigger option
- ✅ Pull request preview builds

## 🔗 Useful Links

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 💡 Next Steps

1. Choose your preferred deployment platform
2. Follow the setup instructions above
3. Push your code to GitHub
4. Watch your site deploy automatically! 🎉

---

**Need Help?** Check the troubleshooting section or review the deployment logs in GitHub Actions.
