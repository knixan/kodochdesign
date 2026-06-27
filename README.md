# Kod & Design

Hemsida för [kodochdesign.se](https://kodochdesign.se) — en webbyrå som bygger allt från landingssidor till komplexa SaaS-applikationer. Byggd med moderna webteknologier för snabb, responsiv och visuellt tilltalande upplevelse.

## Funktioner

- **Hero med bakgrundsbild** – Fullskärms hero med overlay och gradient-text
- **Bildkarusell** – Smidig autoplay-karusell med Embla Carousel som visar tidigare projekt
- **Tjänstesektioner** – Webbutveckling, responsiv design, backend-lösningar och grafisk design
- **Prissida** – Paket, prisexempel på verkliga projekt och villkor
- **Kontaktformulär** – E-postintegration via Nodemailer och Gmail SMTP
- **Responsiv design** – Fullt optimerad för mobil, surfplatta och desktop

## Tech Stack

- **Next.js 16** med App Router och Turbopack
- **React 19** med TypeScript 5
- **Tailwind CSS 4**
- **Nodemailer** för kontaktformulär via Gmail SMTP
- **Embla Carousel** för bildpresentationer
- **React Icons** för ikoner

### Varumärke

- Primärfärger: `#f6339a` (magenta/pink) och `#00a6f4` (cyan)
- Typsnitt: Poppins

## Projektstruktur

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts     # Nodemailer API-route
│   ├── priser/
│   │   └── page.tsx         # Priser & Paket-sida
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx             # Startsida
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── hero.tsx             # Hero med bakgrundsbild
│   ├── carousel.tsx         # Projektkarusell
│   ├── services.tsx         # Tjänster
│   ├── about-us.tsx         # Om oss
│   └── contact.tsx          # Kontaktformulär
public/
└── images/
    ├── carousel/            # Karusellbilder
    ├── prisexempel/         # Projektbilder för prissidan
    └── team/                # Teambilder
```

## Kom igång

### Krav

- Node.js 18 eller senare
- npm

### Installation

1. Klona repot
2. Installera beroenden:

```bash
npm install
```

3. Skapa en `.env.local` baserat på `.env.example`:

```bash
cp .env.example .env.local
```

4. Fyll i miljövariabler i `.env.local` (se nedan)

5. Starta utvecklingsservern:

```bash
npm run dev
```

6. Öppna [http://localhost:3000](http://localhost:3000)

### Miljövariabler

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=din@gmail.com
SMTP_PASS=ditt-app-lösenord   # Genereras på myaccount.google.com/apppasswords
CONTACT_TO=mottagare@email.se
```

> Gmail kräver 2-stegsverifiering och ett app-lösenord. Vanligt Gmail-lösenord fungerar inte.

### Skript

```bash
npm run dev    # Starta utvecklingsserver med Turbopack
npm run build  # Bygg för produktion
npm run start  # Starta produktionsserver
npm run lint   # Kör ESLint
```

## Licens

© 2026 Kod & Design. Alla rättigheter förbehållna.
