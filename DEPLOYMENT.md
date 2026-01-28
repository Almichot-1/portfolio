# Deployment Strategy

## Frontend Deployment (Vercel)

### Prerequisites
- GitHub account
- Vercel account (free tier works)

### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Almichot-1/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js configuration
   - Click "Deploy"

3. **Custom Domain (optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables
Add in Vercel dashboard under Settings → Environment Variables:
- `NEXT_PUBLIC_API_URL` (if using backend APIs)

---

## Backend Deployment (Railway/Fly.io)

### Option 1: Railway

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   railway login
   ```

2. **Deploy Go Service**
   ```bash
   cd backend
   railway init
   railway up
   ```

3. **Add PostgreSQL**
   ```bash
   railway add postgresql
   ```

### Option 2: Fly.io

1. **Install Fly CLI**
   ```bash
   curl -L https://fly.io/install.sh | sh
   fly auth login
   ```

2. **Create fly.toml**
   ```toml
   app = "ahmed-yassin-api"
   
   [build]
     dockerfile = "Dockerfile"
   
   [[services]]
     internal_port = 8080
     protocol = "tcp"
   
     [[services.ports]]
       port = 80
       handlers = ["http"]
   
     [[services.ports]]
       port = 443
       handlers = ["tls", "http"]
   ```

3. **Deploy**
   ```bash
   fly deploy
   ```

---

## Docker Compose (Local Development)

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: portfolio
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

  api:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      DATABASE_URL: postgres://postgres:postgres@postgres:5432/portfolio
      REDIS_URL: redis://redis:6379
    depends_on:
      - postgres
      - redis

volumes:
  postgres_data:
```

Run with:
```bash
docker-compose up -d
```

---

## CI/CD (GitHub Actions)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Monitoring & Observability

### Vercel Analytics
- Automatically enabled for all deployments
- View in Vercel dashboard

### Backend Monitoring (Recommended)
- **Prometheus + Grafana**: Metrics collection
- **Jaeger**: Distributed tracing
- **Sentry**: Error tracking

### Health Checks
Implement in Go backend:
```go
router.GET("/health", func(c *gin.Context) {
    c.JSON(200, gin.H{"status": "healthy"})
})
```

---

## Performance Optimization

1. **Next.js Image Optimization**
   - Use `next/image` for all images
   - Automatic WebP conversion

2. **Code Splitting**
   - Automatic with Next.js App Router
   - Dynamic imports for heavy components

3. **Caching Strategy**
   - Static pages: ISR with 1 hour revalidation
   - API responses: Redis cache with TTL

4. **CDN**
   - Vercel Edge Network (automatic)
   - CloudFlare for additional caching (optional)

---

## Security Checklist

- [ ] Environment variables secured
- [ ] HTTPS enforced
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS protection (React escapes by default)
- [ ] CSP headers configured
- [ ] Dependencies updated regularly

---

## Rollback Strategy

### Vercel
- Instant rollback via dashboard
- Click previous deployment → "Promote to Production"

### Railway/Fly.io
```bash
# Railway
railway rollback

# Fly.io
fly releases
fly deploy --image <previous-image>
```

---

## Cost Estimation

**Free Tier:**
- Vercel: Unlimited personal projects
- Railway: $5/month credit (enough for small APIs)
- Fly.io: 3 VMs free

**Paid (if scaling):**
- Vercel Pro: $20/month
- Railway: Pay-as-you-go (~$10-30/month)
- PostgreSQL: Managed service ~$15/month
