# XEAS Technologies Website

Modern, responsive website for XEAS Technologies - a leading IT services company specializing in custom software development, location intelligence, and data-driven platforms.

## Features

- **Modern Design**: Clean, tech-forward aesthetic with smooth animations and micro-interactions
- **Responsive**: Fully responsive design that works beautifully on all devices
- **Fast Performance**: Built with Next.js 15 for optimal performance
- **SEO Optimized**: Proper metadata and semantic HTML for better search visibility
- **Type Safe**: Built with TypeScript for better developer experience
- **Animations**: Smooth animations using Framer Motion

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone git@github.com:anawaz1220/xeas.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project on Vercel
3. Deploy with default settings

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navigation and footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── portfolio/         # Portfolio page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── ...
├── public/                # Static assets
└── docs/                  # Project documentation

```

## Key Pages

- **Home** (`/`): Hero section with company overview and featured services
- **Services** (`/services`): Detailed breakdown of all services offered
- **Portfolio** (`/portfolio`): Project showcases (placeholder for now)
- **About** (`/about`): Company story, values, and expertise
- **Contact** (`/contact`): Contact form and company contact information

## Customization

### Colors

The color palette can be customized in [tailwind.config.ts](tailwind.config.ts). Current theme uses blue (primary) and purple (accent) gradients.

### Fonts

Fonts are configured in [app/layout.tsx](app/layout.tsx). Currently using:
- Inter (body text)
- Space Grotesk (headings)

### Content

Update page content directly in the respective page files under the `app/` directory.

## License

© 2026 XEAS Technologies. All rights reserved.

## Contact

- Email: hello@xeas.net
- Website: https://xeas.net
