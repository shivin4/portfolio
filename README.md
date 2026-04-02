# Shivin Khandelwal — Neural Workspace

A cinematic, AI-lab-inspired personal portfolio: boot sequence, glassmorphic UI, project deep-dives with build journeys, and a live contact terminal. Built to showcase shipped products including **LogicLens v1.1.0**, **StackPilot**, and **FactLens**.

**Live:** Deploy on [Vercel](https://vercel.com) · **Contact:** [shivin2004@gmail.com](mailto:shivin2004@gmail.com)

---

## Highlights

| Module | What it does |
|--------|----------------|
| **Boot** | Terminal-style `Accessing Shivin.exe` intro |
| **Hero** | Dynamic roles, system stats, floating code panels |
| **Projects** | LogicLens, StackPilot, FactLens, SEHAT, Abilify, Joblyt — modal with Overview + Journey tabs |
| **Experience** | Mission-log timeline (ViniBrawns, Verto, SIH 2025, seed grant) |
| **Skills** | Interactive tech constellation (no progress bars) |
| **Contact** | Secure terminal → real email via Web3Forms |

---

## Stack

- [Next.js 16](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) + Three.js
- TypeScript

---

## Quick start

```bash
git clone https://github.com/shivin4/portfolio.git
cd portfolio
npm install
cp .env.example .env.local   # optional — for contact form
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form (optional)

1. Get a free key at [web3forms.com](https://web3forms.com) → use **shivin2004@gmail.com**
2. Add to `.env.local`:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

3. Restart `npm run dev` and test the Contact section.

> Web3Forms free tier requires **browser-side** submission (`NEXT_PUBLIC_*`). Enable **domain restriction** in their dashboard for production.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production build locally |
| `npm run lint` | ESLint |

---

## Project structure

```
src/
├── app/                 # Layout, globals, SEO (sitemap)
├── components/
│   ├── boot/            # Boot sequence
│   ├── effects/         # Cursor, particles, 3D, glow
│   ├── sections/        # Hero, About, Projects, Experience, Skills, Contact
│   └── ui/              # GlassPanel
├── lib/
│   ├── data.ts          # Site config, experience, skills
│   └── projects/        # Per-project content (logiclens, stackpilot, …)
└── hooks/
```

**Edit content:** `src/lib/data.ts` and `src/lib/projects/*.ts`

---

## Deploy to Vercel

1. Push to GitHub (see below)
2. [vercel.com/new](https://vercel.com/new) → Import repo
3. Framework: **Next.js** (auto-detected)
4. Environment variable: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (if using contact form)
5. Deploy

Custom domain: Vercel → Project → **Settings** → **Domains**.

---

## Author

**Shivin Khandelwal** — B.Tech CSE @ BML Munjal University

- [GitHub](https://github.com/shivin4)
- [LinkedIn](https://www.linkedin.com/in/shivinkhandelwal/)
- [LogicLens](https://shivin4.github.io/logiclens/)

---

## License

Private portfolio — all rights reserved unless otherwise noted.
