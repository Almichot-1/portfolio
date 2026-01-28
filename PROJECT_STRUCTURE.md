# Project Structure

Complete file tree and organization for the portfolio.

## Directory Layout

```
ahmed-yassin-portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout, fonts, metadata
│   ├── page.tsx                 # Main page composition
│   └── globals.css              # Global styles, design tokens
│
├── components/                   # React components
│   ├── sections/                # Page sections
│   │   ├── hero.tsx            # Hero section with CTA
│   │   ├── philosophy.tsx      # Engineering principles
│   │   ├── systems.tsx         # Featured systems showcase
│   │   ├── tech-stack.tsx      # Technology grid
│   │   ├── notes.tsx           # Architecture notes list
│   │   ├── about.tsx           # About section
│   │   └── contact.tsx         # Contact information
│   │
│   └── ui/                      # Reusable UI components
│       ├── button.tsx          # Button component
│       ├── card.tsx            # Card component
│       └── badge.tsx           # Badge component
│
├── lib/                         # Utility functions
│   └── utils.ts                # Class name utilities
│
├── content/                     # Markdown content
│   └── notes/                  # Architecture notes
│       └── sagas-vs-distributed-transactions.md
│
├── backend/                     # Go backend (optional)
│   ├── main.go                 # API server entry point
│   ├── go.mod                  # Go dependencies
│   ├── Dockerfile              # Container image
│   └── handlers/               # HTTP handlers (future)
│
├── public/                      # Static assets
│   └── (images, icons, etc.)
│
├── .github/                     # GitHub configuration
│   └── workflows/              # CI/CD pipelines
│       └── deploy.yml          # Deployment workflow
│
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── package.json                # Node dependencies
├── docker-compose.yml          # Local development stack
├── .env.example                # Environment variables template
├── .gitignore                  # Git ignore rules
│
├── README.md                   # Project overview
├── ARCHITECTURE.md             # Architecture documentation
├── DEPLOYMENT.md               # Deployment guide
└── PROJECT_STRUCTURE.md        # This file
```

## File Purposes

### Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Tailwind CSS customization, design tokens |
| `tsconfig.json` | TypeScript compiler options |
| `next.config.mjs` | Next.js build and runtime configuration |
| `postcss.config.mjs` | CSS processing pipeline |
| `package.json` | Dependencies, scripts, metadata |
| `docker-compose.yml` | Local development environment |

### Application Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, fonts, global metadata |
| `app/page.tsx` | Main page, section composition |
| `app/globals.css` | Global styles, CSS variables |

### Component Files

| File | Purpose |
|------|---------|
| `components/sections/hero.tsx` | Hero section with name, title, CTA |
| `components/sections/philosophy.tsx` | Engineering principles cards |
| `components/sections/systems.tsx` | Featured systems with architecture details |
| `components/sections/tech-stack.tsx` | Technology stack grid |
| `components/sections/notes.tsx` | Architecture notes listing |
| `components/sections/about.tsx` | About section |
| `components/sections/contact.tsx` | Contact information and links |
| `components/ui/button.tsx` | Reusable button component |
| `components/ui/card.tsx` | Reusable card component |
| `components/ui/badge.tsx` | Reusable badge component |

### Backend Files

| File | Purpose |
|------|---------|
| `backend/main.go` | Go API server, routes, handlers |
| `backend/go.mod` | Go module dependencies |
| `backend/Dockerfile` | Container image for deployment |

### Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Project overview, setup instructions |
| `ARCHITECTURE.md` | System architecture, design decisions |
| `DEPLOYMENT.md` | Deployment strategies, CI/CD |
| `PROJECT_STRUCTURE.md` | File organization (this file) |

## Component Hierarchy

```
Page
└── Hero
└── Philosophy
    └── Card (x4)
└── Systems
    └── Card (x3)
        └── Badge (tech stack)
└── TechStack
    └── Card (x7 categories)
└── Notes
    └── Card (x6 notes)
└── About
    └── Card
└── Contact
    └── Card
        └── Button (x3)
```

## Data Flow

```
User Request
    ↓
Next.js Server
    ↓
React Server Components (default)
    ↓
Client Components (when interactive)
    ↓
Framer Motion (animations)
    ↓
Rendered HTML
```

## Styling Architecture

```
globals.css (CSS variables)
    ↓
Tailwind Config (design tokens)
    ↓
Component Classes (utility classes)
    ↓
cn() utility (class merging)
    ↓
Final Styles
```

## Build Process

```
Source Files
    ↓
TypeScript Compilation
    ↓
Next.js Build
    ↓
Tailwind CSS Purge
    ↓
Code Splitting
    ↓
Optimization
    ↓
Static Assets + Server Bundle
```

## Deployment Flow

```
Git Push
    ↓
GitHub Actions (CI)
    ↓
Build & Test
    ↓
Vercel Deployment
    ↓
Edge Network Distribution
    ↓
Live Site
```

## Adding New Content

### New Architecture Note
1. Create `content/notes/[slug].md`
2. Add entry to `components/sections/notes.tsx`
3. Commit and deploy

### New System
1. Add object to `systems` array in `components/sections/systems.tsx`
2. Include: title, problem, architecture, decisions, failures, tradeoffs, tech, github
3. Commit and deploy

### New UI Component
1. Create `components/ui/[component].tsx`
2. Follow existing patterns (forwardRef, variants)
3. Export from component file
4. Use in sections as needed

## Maintenance

### Regular Updates
- Dependencies: Monthly security updates
- Content: Add new notes quarterly
- Systems: Update metrics and links
- Design: Iterate based on feedback

### Monitoring
- Vercel Analytics: Traffic and performance
- GitHub Issues: Bug tracking
- User feedback: Direct email

## Scaling Considerations

### When to Split
- Components > 200 lines → Extract sub-components
- Sections > 300 lines → Split into multiple files
- Utils > 100 lines → Organize into modules

### When to Add Backend
- Dynamic content needed
- User authentication required
- Real-time features wanted
- Database queries necessary

## Best Practices

1. **File Naming**: kebab-case for files, PascalCase for components
2. **Imports**: Absolute imports with `@/` prefix
3. **Types**: Define inline for simple props, separate file for complex
4. **Comments**: Explain why, not what
5. **Git**: Conventional commits (feat:, fix:, docs:, etc.)
