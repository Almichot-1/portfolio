# Ahmed Yassin Ahmed - Portfolio

Evidence-based portfolio for internship, junior, and freelance opportunities.

Positioning:
Software Engineering student building backend-focused full-stack systems with Go, Next.js, and Flutter.

## What this site includes

- Grounded hero and summary with no inflated claims
- Featured projects tied to public repositories
- Resume snapshot on the homepage
- Dedicated resume route: `/resume`
- Skills grouped by demonstrated depth
- Contact section with safe form configuration + direct email fallback

## Getting Started

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

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Portfolio homepage
│   └── resume/page.tsx     # Dedicated resume page
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── systems.tsx
│   │   ├── resume-snapshot.tsx
│   │   ├── tech-stack.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── content/
│   ├── portfolio.ts        # Core site content and featured projects
│   └── resume.ts           # Structured resume data source
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Deployment

**Frontend:**
- Deploy to Vercel with zero configuration
- Automatic CI/CD via GitHub integration

**Backend APIs (optional):**
- Railway or Fly.io for Go services
- Docker Compose for local development

## Environment Variables

Create `.env.local` as needed:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

If `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` is not set, the contact form stays disabled and users are directed to email/LinkedIn.

## License

MIT
