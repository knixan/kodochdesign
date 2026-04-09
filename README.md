# Kodoch Design

A modern portfolio website for Kodoch Design, showcasing web design and development services. Built with cutting-edge web technologies to deliver a fast, responsive, and visually stunning experience.

## Features

- **Animated UI** – Dynamic gradient backgrounds and floating orbs for visual depth
- **Image Carousel** – Smooth auto-playing carousel powered by Embla Carousel
- **Service Showcase** – Dedicated sections highlighting design and development offerings
- **Responsive Design** – Fully optimized for mobile, tablet, and desktop viewing
- **Contact Ready** – Email integration prepared (Nodemailer & Resend)

## Tech Stack

- **Next.js 16** with App Router and Turbopack for blazing-fast development
- **React 19** with TypeScript 5 for type-safe components
- **Tailwind CSS 4** via PostCSS for modern, utility-first styling
- **Embla Carousel** for smooth image presentations
- **React Icons** for scalable icon components

### Brand Identity
- Primary colors: `#00a6f4` (cyan) and `#f6339a` (magenta)
- Custom Poppins font family for modern typography

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind CSS configuration
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── ommig/               # About page
│   └── webbsidor/           # Portfolio/services page
├── components/
│   ├── Navbar.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with contact info
│   ├── hero.tsx             # Hero section with CTA
│   ├── carousel.tsx         # Image carousel
│   ├── services.tsx         # Services showcase
│   └── about-us.tsx         # About section
public/
└── images/
    └── carousel/            # Carousel image assets
```

## Pages

- **`/`** – Homepage featuring hero, portfolio carousel, services, and about sections
- **`/ommig`** – About page with detailed background and expertise
- **`/webbsidor`** – Web design portfolio and service offerings

## Getting Started

### Prerequisites
- Node.js 18 or later
- Yarn (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
```bash
yarn install
```

3. Start the development server with Turbopack:
```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
yarn dev      # Start development server with Turbopack
yarn build    # Build for production with Turbopack
yarn start    # Start production server
yarn lint     # Run ESLint code quality checks
```

## Styling with Tailwind CSS 4

Tailwind CSS 4 is configured via PostCSS and imported in `src/app/globals.css`:

```css
@import "tailwindcss";
@theme inline {
  /* Custom theme: colors, typography, spacing */
}
```

Theme variables are defined in the `@theme inline` block, including brand colors and design tokens. Apply utility classes directly to components for rapid UI development.

## Image Optimization

Images are optimized using Next.js Image component (`next/image`):
- Local images: stored in `public/images/`
- Remote patterns: configured for `placehold.co` in `next.config.ts`

## Email Integration (Future)

Email functionality is pre-configured with Nodemailer and Resend. To enable contact forms:

1. Create `.env.local` in the project root
2. Add your API credentials:
```bash
RESEND_API_KEY=your_api_key_here
```

## License

© 2024 Kodoch Design. All rights reserved.
Visit [kodochdesign.se](https://kodochdesign.se) for more information.