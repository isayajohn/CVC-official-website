# Capital Victoire Choir Website

A modern, mobile-first gospel choir website built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Features

- 🎵 **Music Library**: Browse songs and albums with 30-second previews
- 🎤 **Recording Studio**: Professional recording services booking
- 🏛️ **Event Hall**: Venue rental for concerts and gospel events
- 🎫 **Events**: Upcoming concerts and worship nights with ticket purchasing
- 🌍 **Bilingual**: Full support for English and Kiswahili
- 📱 **Mobile-First**: Optimized for Tanzania's smartphone users
- ⚡ **Fast Performance**: Built with Next.js 15 and Turbopack
- 🎨 **Beautiful Design**: Gospel-inspired design with purple, gold, and teal colors

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: next-intl
- **Images**: Optimized with Next.js Image

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:

\`\`\`bash
npm install
\`\`\`

2. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Admin / Backoffice Login

Set these environment variables for admin authentication:

```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your-strong-password
ADMIN_SESSION_SECRET=your-long-random-secret
```

Backoffice routes:

- `/{locale}/backoffice/login`
- `/{locale}/backoffice`
- `/{locale}/admin` (content manager, protected)

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Locale layout with i18n
│   │   ├── page.tsx       # Homepage
│   │   ├── music/         # Music library
│   │   ├── services/      # Studio & hall booking
│   │   ├── events/        # Events listing
│   │   └── about/         # About page
│   ├── globals.css        # Global styles with Tailwind
│   └── layout.tsx         # Root redirect
├── components/
│   ├── layout/            # Header and Footer
│   └── ui/                # Reusable UI components
├── lib/
│   └── mockData.ts        # Mock data for songs, albums, events
├── messages/
│   ├── en.json           # English translations
│   └── sw.json           # Swahili translations
├── i18n.ts               # i18n configuration
├── middleware.ts         # Locale detection middleware
└── next.config.ts        # Next.js configuration
\`\`\`

## Pages

### Homepage (`/`)
- Hero section with choir introduction
- Latest music releases
- Upcoming events
- Call-to-action for app download

### Music Library (`/music`)
- Songs and albums tabs
- 30-second audio previews
- Purchase buttons (locked full versions)
- Pricing information

### Services (`/services`)
- Recording studio details and pricing
- Event hall details and pricing
- Booking CTAs

### Events (`/events`)
- Upcoming worship events and concerts
- Event details (date, time, venue)
- Ticket pricing and purchase CTAs

### About (`/about`)
- Choir history
- Mission and vision
- Statistics and achievements

## Design System

### Colors
- **Primary**: Purple (`#6B46C1`) - Spirituality/Royalty
- **Secondary**: Gold (`#D69E2E`) - Glory/Excellence
- **Accent**: Teal (`#38B2AC`) - Life/Renewal

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

### Key Features
- Mobile-first responsive design
- Smooth animations with Framer Motion
- Accessible navigation
- Fast page loads with image optimization

## Language Support

Switch between English and Swahili using the language selector in the header.

## Environment Setup

The project uses:
- **PostCSS** with Tailwind CSS v4
- **@svgr/webpack** for SVG icon imports
- **Remote image patterns** configured for Unsplash, Pexels, and Picsum

## Important Notes

- Music previews are limited to 30 seconds
- Full music streaming requires the mobile app (to be implemented)
- Payment integration is placeholder (implement with M-Pesa, Stripe, etc.)
- Event booking and ticket purchasing needs backend integration

## Future Enhancements

- [ ] Mobile app development
- [ ] Payment gateway integration (M-Pesa)
- [ ] Admin dashboard for content management
- [ ] User accounts and authentication
- [ ] Newsletter subscription
- [ ] Social media integration
- [ ] SEO optimization
- [ ] PWA features

## License

© 2024 Capital Victoire Choir. All rights reserved.

## Contact

- **Location**: Dar es Salaam, Tanzania
- **Email**: info@capitalvictoirechoir.com
- **Phone**: +255 XXX XXX XXX
# cvcfontend
