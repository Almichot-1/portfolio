# Ahmed Yassin - Portfolio

Backend-heavy full-stack engineer specializing in Go, Microservices, and Distributed Systems.

## Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Shadcn/UI components

**Backend (for demos):**
- Go (Gin/Fiber)
- PostgreSQL
- Redis
- Docker

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

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page composition
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── sections/           # Page sections
│   │   ├── hero.tsx
│   │   ├── philosophy.tsx
│   │   ├── systems.tsx
│   │   ├── tech-stack.tsx
│   │   ├── notes.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   └── ui/                 # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── badge.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Design Principles

- **Dark-mode first**: Optimized for extended reading sessions
- **Minimal animations**: Functional, not decorative
- **Grid-based layout**: Clean, architectural structure
- **High contrast**: Accessibility and readability
- **Typography hierarchy**: Clear information architecture

## Deployment

**Frontend:**
- Deploy to Vercel with zero configuration
- Automatic CI/CD via GitHub integration

**Backend APIs (optional):**
- Railway or Fly.io for Go services
- Docker Compose for local development

## Environment Variables

Create a `.env.local` file for any API endpoints:

```env
NEXT_PUBLIC_API_URL=your_api_url_here
```

## Customization

1. Update personal information in `components/sections/hero.tsx`
2. Modify systems showcase in `components/sections/systems.tsx`
3. Add architecture notes in `components/sections/notes.tsx`
4. Adjust design tokens in `app/globals.css`

## License

MIT
