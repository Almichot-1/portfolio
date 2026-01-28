# Pre-Deployment Checklist

## 1. Install Node.js
- Download from https://nodejs.org/ (v20+)
- Verify: `node --version`

## 2. Install Dependencies
```bash
npm install
```

## 3. Test Locally
```bash
npm run dev
```
- Open http://localhost:3000
- Check all sections load
- Test navigation

## 4. Update Personal Info

Edit these files:
- `components/sections/hero.tsx` - Your email, LinkedIn
- `components/sections/systems.tsx` - Your GitHub repos
- `components/sections/contact.tsx` - Your contact info

## 5. Build Test
```bash
npm run build
```
Should complete without errors.

## 6. Deploy to Vercel

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Almichot-1/portfolio.git
git push -u origin main
```

Then:
1. Go to vercel.com
2. Click "Import Project"
3. Select your repo
4. Click "Deploy"

Done. Live in 2 minutes.

## Optional: Backend

If you want the Go API:
```bash
cd backend
go mod download
go run main.go
```

Or use Docker:
```bash
docker-compose up
```

## That's It

Everything is ready. Just need Node.js installed.
