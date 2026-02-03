# Local Development Guide

## Quick Start

Follow these steps to run the XEAS Technologies website on your local machine.

---

## Prerequisites

Make sure you have these installed on your computer:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - To check if installed, open Command Prompt and type: `node --version`

2. **npm** (comes with Node.js)
   - To check version: `npm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

---

## Step-by-Step Setup

### 1. Open Command Prompt or Terminal

- Press `Windows + R`, type `cmd`, and press Enter
- Or search for "Command Prompt" in Windows search

### 2. Navigate to the Project Directory

```bash
cd d:\Personel\Zainab\xeas\website
```

### 3. Install Dependencies (First Time Only)

If you haven't already installed the dependencies, run:

```bash
npm install
```

This will download all required packages. It may take 2-3 minutes.

### 4. Start the Development Server

```bash
npm run dev
```

You should see output like:
```
  ▲ Next.js 15.5.11
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

### 5. Open the Website in Your Browser

Open your web browser and go to:
```
http://localhost:3000
```

**That's it!** You should now see the XEAS website running locally.

---

## Available Commands

Here are all the commands you can use:

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm run dev` | Start development server | Daily development work |
| `npm run build` | Build for production | Before deploying |
| `npm start` | Run production build | Test production version locally |
| `npm run lint` | Check code quality | Before committing changes |

---

## Testing the Website Locally

### View Different Pages

Once the development server is running, you can navigate to:

- **Home:** http://localhost:3000/
- **Services:** http://localhost:3000/services
- **Portfolio:** http://localhost:3000/portfolio
- **About:** http://localhost:3000/about
- **Contact:** http://localhost:3000/contact
- **Privacy Policy:** http://localhost:3000/privacy
- **Terms of Service:** http://localhost:3000/terms

### Test on Mobile Devices

To test on your phone/tablet on the same WiFi network:

1. Note the Network URL from the terminal (e.g., `http://192.168.1.100:3000`)
2. Open that URL on your mobile device
3. Test navigation and responsiveness

---

## Making Changes

### Hot Reload

When you make changes to files while the dev server is running:
- Save the file
- The browser will automatically refresh with your changes
- No need to restart the server!

### Key Files to Edit

- **Pages:** `app/page.tsx`, `app/about/page.tsx`, etc.
- **Components:** `components/Navigation.tsx`, `components/Footer.tsx`, etc.
- **Styles:** `app/globals.css`, `tailwind.config.ts`
- **Configuration:** `package.json`, `next.config.ts`

---

## Stopping the Development Server

To stop the server:
1. Go to the Command Prompt window
2. Press `Ctrl + C`
3. Type `Y` if prompted and press Enter

---

## Common Issues and Solutions

### Issue: Port 3000 Already in Use

**Error:** `Port 3000 is already in use`

**Solution:**
```bash
# Kill the process using port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Issue: Module Not Found Errors

**Error:** `Cannot find module 'xyz'`

**Solution:**
```bash
# Delete node_modules and reinstall
rmdir /s /q node_modules
npm install
```

### Issue: Build Errors

**Error:** Build fails with TypeScript or compilation errors

**Solution:**
```bash
# Clean the build cache
rmdir /s /q .next
npm run build
```

### Issue: Changes Not Reflecting

**Solution:**
1. Save the file properly (Ctrl + S)
2. Check the terminal for errors
3. Try hard refresh in browser (Ctrl + Shift + R)
4. Restart the dev server if needed

---

## Testing the Production Build

Before deploying, test the production build locally:

```bash
# Step 1: Build for production
npm run build

# Step 2: Start production server
npm start
```

Then open http://localhost:3000 and verify everything works.

---

## Browser DevTools

### Open Developer Tools

- **Chrome/Edge:** Press `F12` or `Ctrl + Shift + I`
- **Firefox:** Press `F12` or `Ctrl + Shift + I`

### Useful Tabs

1. **Console:** Check for JavaScript errors
2. **Network:** Monitor API calls and load times
3. **Elements:** Inspect HTML and CSS
4. **Lighthouse:** Test performance, SEO, accessibility

---

## Recommended VS Code Extensions

If using Visual Studio Code:

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **Prettier - Code formatter**
4. **ESLint**
5. **Auto Rename Tag**

---

## Project Structure

```
xeas-website/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page
│   ├── layout.tsx           # Root layout with nav/footer
│   ├── globals.css          # Global styles
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── portfolio/           # Portfolio page
│   ├── contact/             # Contact page
│   ├── privacy/             # Privacy policy
│   └── terms/               # Terms of service
├── components/              # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── public/                  # Static assets (images, etc.)
├── docs/                    # Documentation
├── node_modules/            # Dependencies (auto-generated)
├── .next/                   # Build output (auto-generated)
├── package.json             # Project dependencies
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

---

## Performance Optimization Tips

1. **Images:** Use Next.js Image component for automatic optimization
2. **Fonts:** Google Fonts are already optimized in the layout
3. **Bundle Size:** Check with `npm run build` to see page sizes
4. **Lighthouse:** Run in Chrome DevTools for performance scores

---

## Getting Help

If you encounter issues:

1. Check the error message in the terminal
2. Look for errors in browser console (F12)
3. Search for the error message online
4. Check Next.js documentation: https://nextjs.org/docs
5. Email: hello@xeas.net

---

## Next Steps

Once you're comfortable with local development:

1. Make any content or design changes you need
2. Test thoroughly on different devices
3. Run `npm run build` to ensure production build works
4. Follow the [DEPLOYMENT.md](DEPLOYMENT.md) guide to deploy to Vercel

---

## Tips for Success

✅ **Always run `npm run dev` before starting work**
✅ **Save files frequently (Ctrl + S)**
✅ **Check the terminal for error messages**
✅ **Test in multiple browsers (Chrome, Firefox, Edge)**
✅ **Use incognito/private mode to avoid cache issues**
✅ **Keep the terminal window visible while developing**

---

## Summary of Common Commands

```bash
# Start development
cd d:\Personel\Zainab\xeas\website
npm run dev

# Open in browser
http://localhost:3000

# Stop server
Ctrl + C

# Build for production
npm run build

# Start production server
npm start
```

That's everything you need to develop locally! Happy coding! 🚀
