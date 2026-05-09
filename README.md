# Kod & Design

Hemsida för Kod & Design — ett webbyrå som erbjuder hemsidor, webbapplikationer och digital design. Byggd med moderna webteknologier för snabb, responsiv och visuellt tilltalande upplevelse.

## Funktioner

- **Animerat UI** – Dynamiska gradientbakgrunder och flytande orbs för visuellt djup
- **Bildkarusell** – Smidig autoplay-karusell med Embla Carousel
- **Tjänstesektioner** – Dedikerade sektioner som visar design- och utvecklingstjänster
- **Responsiv design** – Fullt optimerad för mobil, surfplatta och desktop
- **Kontaktformulär** – E-postintegration via Nodemailer

## Tech Stack

- **Next.js 16** med App Router och Turbopack
- **React 19** med TypeScript 5
- **Tailwind CSS 4** via PostCSS
- **Embla Carousel** för bildpresentationer
- **React Icons** för ikoner

### Varumärke

- Primärfärger: `#00a6f4` (cyan) och `#f6339a` (magenta)
- Typsnitt: Poppins

## Projektstruktur

```
src/
├── app/
│   ├── globals.css      # Tailwind CSS och globala stilar
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Startsida
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Footer.tsx       # Footer med kontaktinfo
│   ├── hero.tsx         # Hero-sektion med CTA
│   ├── carousel.tsx     # Bildkarusell
│   ├── services.tsx     # Tjänster
│   └── about-us.tsx     # Om oss
public/
└── images/
    └── carousel/        # Karusellbilder
```

## Kom igång

### Krav

- Node.js 18 eller senare
- npm eller yarn

### Installation

1. Klona repot
2. Installera beroenden:

```bash
npm install
```

3. Starta utvecklingsservern:

```bash
npm run dev
```

4. Öppna [http://localhost:3000](http://localhost:3000)

### Skript

```bash
npm run dev    # Starta utvecklingsserver med Turbopack
npm run build  # Bygg för produktion
npm run start  # Starta produktionsserver
npm run lint   # Kör ESLint
```

## Bildoptimering

Bilder optimeras med Next.js Image-komponenten:

- Lokala bilder: sparade i `public/images/`
- Konfigurerade bildkvaliteter: `[75, 80]` i `next.config.ts`

## Licens

© 2025 Kod & Design. Alla rättigheter förbehållna.
Besök [kodochdesign.se](https://kodochdesign.se)
