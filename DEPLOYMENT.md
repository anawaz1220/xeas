# Deployment Guide

## Deploying to Vercel

### Prerequisites
- GitHub account with the repository: `git@github.com:anawaz1220/xeas.git`
- Vercel account (sign up at https://vercel.com)

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: XEAS Technologies website"
   git remote add origin git@github.com:anawaz1220/xeas.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository: `anawaz1220/xeas`
   - Vercel will auto-detect Next.js settings

3. **Configure (Optional)**
   - Project Name: `xeas-website`
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (2-3 minutes)
   - Your site will be live at: `https://xeas-website.vercel.app` (or custom domain)

5. **Add Custom Domain**
   - Go to Project Settings > Domains
   - Add `xeas.net`
   - Follow DNS configuration instructions

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # For preview deployment
   vercel

   # For production deployment
   vercel --prod
   ```

### Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch (production)
- Create preview deployments for pull requests
- Build and deploy in 2-3 minutes

### Environment Variables

If you need environment variables:
1. Go to Vercel Dashboard > Project Settings > Environment Variables
2. Add your variables
3. Redeploy if needed

### Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test navigation between pages
- [ ] Check mobile responsiveness
- [ ] Verify contact form works
- [ ] Test animations and interactions
- [ ] Check console for any errors
- [ ] Set up custom domain (xeas.net)
- [ ] Configure SSL (automatic with Vercel)
- [ ] Test performance with Lighthouse
- [ ] Add Google Analytics (if needed)

### Troubleshooting

**Build fails:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Try building locally: `npm run build`

**404 errors:**
- Verify file paths are correct
- Check Next.js routing structure

**Slow performance:**
- Enable Vercel Analytics
- Check bundle size
- Optimize images

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Support

For issues or questions:
- Email: hello@xeas.net
- Check logs in Vercel Dashboard
- Review Next.js documentation: https://nextjs.org/docs
