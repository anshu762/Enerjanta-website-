# Enerjanta — Community Clean Energy Transition Platform

[![CI](https://github.com/anshu762/Enerjanta-website-/actions/workflows/ci.yml/badge.svg)](https://github.com/anshu762/Enerjanta-website-/actions)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.4.1-2D3748)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/)

**Enerjanta** is a production-grade web platform and open civic data initiative dedicated to accelerating grassroots clean energy adoption, neighborhood rooftop solar microgrids, and transparent citizen energy literacy across 28 municipal wards.

Built with Next.js App Router, TypeScript (strict mode), Tailwind CSS, Framer Motion, Prisma ORM with NeonDB (serverless PostgreSQL), and Recharts.

---

## 🌟 Key Features

1. **High-Performance Dark Design System**:
   - Deep obsidian background (`#0B0B0F` / `#0E0E12`), elevated surfaces (`#121218`, `#15151E`), ivory/white text (`#FFFFF0`).
   - Self-hosted Google Fonts via `next/font`: **Sora** (weights 600/700 for geometric headings) and **Inter** (weights 400/500 for clean body text) — professional, web-optimized alternatives to Felix.
   - Consistent focus rings (`focus-visible:ring-2 focus-visible:ring-emerald-400`), keyboard skip link, WCAG AA compliance, and full `prefers-reduced-motion` animation suppression.

2. **Empirical Survey Insights Engine (`/survey-insights`)**:
   - Live research data synthesis covering 1,420+ urban households across 28 municipal wards.
   - 5 core finding highlights with methodology badge and field-survey credibility indicators.
   - Dynamic thematic breakdowns (Economic, Grid Reliability, Policy) with responsive Recharts bar/pie/line visualizations.

3. **Grassroots Ambassador Network (`/ambassadors`)**:
   - Verified neighborhood energy leaders across municipal wards.
   - Instant client-side area filtering (interactive pill-tabs on desktop/tablet, dropdown on mobile) and search without layout shifts or extra API calls.
   - Fully keyboard-navigable ambassador cards with accessible alt text and social profile links.
   - Community nomination modal and direct mailto CTA.

4. **Strategic Conclusion & Working Contact System (`/conclusion` & `/api/contact`)**:
   - Executive synthesis of research takeaways and 3-stage action roadmap (Literacy Kiosks → Bulk Purchasing → Virtual Net-Metering).
   - Real interactive contact form with React Hook Form + Zod schema validation that POSTs to `/api/contact` with server-side validation and logging.

5. **Production SEO & Analytics Suite**:
   - Native Next.js 16 metadata, dynamic `sitemap.xml`, and `robots.txt`.
   - OpenGraph and Twitter card metadata on every route.
   - Schema.org JSON-LD `Organization` and `WebSite` structured data in root layout.
   - Environment-gated Google Analytics 4 (GA4) and Microsoft Clarity integration with `afterInteractive` script optimization.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Strict Mode) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 (Design tokens in `globals.css` and `tailwind.config.ts`) |
| **Animations** | Framer Motion (respects `prefers-reduced-motion`) |
| **Database & ORM** | Prisma ORM 6.4 + NeonDB (Serverless PostgreSQL) with offline mock fallback |
| **Data Visualizations** | Recharts (Responsive, SSR-safe client components) |
| **Form Validation** | React Hook Form + Zod + `@hookform/resolvers` |
| **Icons** | Lucide React + custom SVG brand icons |
| **Code Quality** | ESLint + Prettier + GitHub Actions CI pipeline |

---

## 📁 Project Architecture

All source directories live cleanly in the project root (no `src/` wrapper):

```
enerjanta/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated GitHub Actions lint & build pipeline
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # Server-side contact submission handler & validator
│   ├── ambassadors/
│   │   └── page.tsx             # Grassroots leadership directory
│   ├── conclusion/
│   │   └── page.tsx             # Research synthesis, roadmap & contact section
│   ├── privacy/
│   │   └── page.tsx             # Privacy policy & open data commitment
│   ├── survey-insights/
│   │   └── page.tsx             # Interactive charts & empirical survey analysis
│   ├── favicon.ico
│   ├── globals.css              # Theme CSS tokens, dark variables & scroll utilities
│   ├── layout.tsx               # Root layout, fonts, JSON-LD schema & analytics
│   ├── not-found.tsx            # Custom branded 404 error page
│   ├── page.tsx                 # High-impact home landing page
│   ├── robots.ts                # Next.js native robots.txt generator
│   └── sitemap.ts               # Next.js native sitemap.xml generator
├── components/
│   ├── ambassadors/             # Ambassador list, filter tabs & apply modal
│   ├── analytics/               # GA4 & Microsoft Clarity script loaders
│   ├── charts/                  # Recharts dynamic wrapper components
│   ├── conclusion/              # React Hook Form + Zod contact form
│   ├── home/                    # Hero, Overview, SurveyHighlights, Initiatives
│   ├── layout/                  # Header, Footer, MobileNav
│   ├── motion/                  # FadeInWhenVisible & StaggerContainer wrappers
│   └── ui/                      # Button, Card, Container, Section, Badge, StatCard
├── lib/
│   ├── data/
│   │   ├── index.ts             # Unified data access (Prisma DB + mock fallback)
│   │   └── mock-data.ts         # High-fidelity mock survey & ambassador datasets
│   ├── prisma.ts                # Singleton Prisma client instance
│   └── utils.ts                 # clsx + tailwind-merge (cn) helper
├── prisma/
│   ├── schema.prisma            # Relational PostgreSQL data schema (7 models)
│   └── seed.ts                  # Database seeding script for NeonDB
├── .env.example                 # Documented environment variables
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.18+ or v20+ (recommended)
- **npm** or **pnpm**

### 2. Clone the Repository
```bash
git clone https://github.com/anshu762/Enerjanta-website-.git
cd Enerjanta-website-
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Environment Variables
Create a local `.env` file from `.env.example`:
```bash
cp .env.example .env
```

Configure the environment variables:
```env
# NeonDB Serverless PostgreSQL (optional for local testing; automatic fallback is enabled)
DATABASE_URL="postgresql://user:password@ep-sample-pooler.us-east-2.aws.neon.tech/enerjanta?sslmode=require"

# Canonical Site URL
NEXT_PUBLIC_SITE_URL="https://enerjanta.org"

# Analytics (optional)
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"
NEXT_PUBLIC_CLARITY_ID="XXXXXXXXXX"
```

> **Automatic Fallback Note**: If `DATABASE_URL` is not provided or the remote NeonDB cluster is unreachable, Enerjanta automatically and gracefully falls back to bundled mock data in `lib/data/mock-data.ts`. The app will run, build, and prerender without any database downtime.

### 5. Generate Prisma Client
```bash
npx prisma generate
```

### 6. Run the Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗄️ NeonDB Database Setup & Seeding

When you're ready to connect your production NeonDB PostgreSQL instance:

1. **Create a NeonDB Project**:
   - Go to [Neon.tech](https://neon.tech) and create a new serverless PostgreSQL database.
   - In the Neon dashboard, copy the **Pooled connection string** (contains `-pooler` in the host name).

2. **Update your `.env` file**:
   ```env
   DATABASE_URL="postgresql://[user]:[password]@[endpoint]-pooler.[region].aws.neon.tech/[dbname]?sslmode=require"
   ```

3. **Push Schema to NeonDB**:
   ```bash
   npx prisma db push
   ```

4. **Seed the Database with Initial Research Data**:
   ```bash
   npx prisma db seed
   ```
   This populates the database with:
   - 4 Global survey statistics (`SurveyStat`)
   - 5 Key empirical survey findings (`SurveyFinding`)
   - 3 Thematic survey analysis sections with 12 nested points (`SurveySection`)
   - 15 Detailed chart data records for Recharts (`SurveyChartData`)
   - 6 Verified ward ambassadors (`Ambassador`)
   - 4 Active community initiatives (`Initiative`)

---

## 🧪 Quality Checks & Testing

Run linting checks:
```bash
npm run lint
```

Run a production build:
```bash
npm run build
```

The build produces optimized static and dynamic server routes with zero TypeScript or ESLint errors.

---

## 🌐 Production Deployment (Vercel)

The easiest and recommended way to deploy Enerjanta is on [Vercel](https://vercel.com):

1. **Import the Repository**:
   - Push your changes to GitHub.
   - Connect your GitHub repository in the Vercel Dashboard.

2. **Configure Environment Variables**:
   - `DATABASE_URL`: Your NeonDB pooled connection string.
   - `NEXT_PUBLIC_SITE_URL`: Your production custom domain (e.g., `https://enerjanta.org`).
   - `NEXT_PUBLIC_GA_ID`: (Optional) Google Analytics 4 Measurement ID.
   - `NEXT_PUBLIC_CLARITY_ID`: (Optional) Microsoft Clarity Project ID.

3. **Build Command**:
   - Vercel automatically runs `prisma generate && next build`.
   - Set Output Directory to `.next` (default).

4. **Deploy**: Click **Deploy** and your production-grade application will be live with Edge caching, image optimization, and lightning-fast TTFB.

---

## 📄 License

Open-source civic initiative under the [MIT License](LICENSE).
