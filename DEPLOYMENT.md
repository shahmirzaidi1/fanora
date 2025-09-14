# Fanora.life Deployment Guide

This guide will help you deploy the Fanora application to production on fanora.life.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- A Supabase project set up
- A deployment platform (Vercel, Netlify, or custom server)

## 📋 Pre-Deployment Checklist

### 1. Supabase Configuration

1. **Create Production Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project for production
   - Note down your project URL and anon key

2. **Configure Authentication Settings**
   - Go to Authentication > Settings in your Supabase dashboard
   - Enable **Email** provider
   - Set **Site URL** to `https://fanora.life`
   - Add **Redirect URLs**:
     - `https://fanora.life/**`
     - `https://fanora.life/auth/callback`
   - Configure **Email Templates** if needed

3. **Set up Row Level Security (RLS)**
   - Enable RLS on your auth tables
   - Create appropriate policies for user data

### 2. Environment Variables

Create a `.env.production` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key-here

# Production Environment
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://fanora.life
```

## 🎯 Deployment Options

### Option 1: Vercel (Recommended)

1. **Connect Repository**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel --prod
   ```

2. **Configure Environment Variables**
   - Go to your Vercel dashboard
   - Navigate to Settings > Environment Variables
   - Add all production environment variables

3. **Custom Domain**
   - Go to Settings > Domains
   - Add `fanora.life` as custom domain
   - Configure DNS records as instructed

### Option 2: Netlify

1. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"
   
   [build.environment]
     NODE_VERSION = "18"
   
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   - Connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables in Site Settings

### Option 3: Custom Server (Docker)

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine AS base
   
   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   
   # Install dependencies
   COPY package.json package-lock.json ./
   RUN npm ci --only=production
   
   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   
   # Build the application
   RUN npm run build
   
   # Production image
   FROM base AS runner
   WORKDIR /app
   
   ENV NODE_ENV production
   
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   
   USER nextjs
   
   EXPOSE 3000
   
   ENV PORT 3000
   ENV HOSTNAME "0.0.0.0"
   
   CMD ["node", "server.js"]
   ```

2. **Deploy with Docker**
   ```bash
   # Build image
   docker build -t fanora-app .
   
   # Run container
   docker run -p 3000:3000 \
     -e NEXT_PUBLIC_SUPABASE_URL=your-url \
     -e NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key \
     fanora-app
   ```

## 🔧 Production Optimizations

### 1. Build Optimization
```bash
# Install dependencies
npm ci --only=production

# Build for production
npm run build

# Start production server
npm start
```

### 2. Performance Monitoring
Consider adding:
- Vercel Analytics
- Google Analytics
- Sentry for error tracking

### 3. Security Headers
The application includes security headers in `next.config.ts`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## 🌐 Domain Configuration

### DNS Settings
Configure your DNS provider with:
```
Type: A
Name: @
Value: [Your server IP or Vercel IP]

Type: CNAME
Name: www
Value: fanora.life
```

### SSL Certificate
- Vercel/Netlify: Automatic SSL
- Custom server: Use Let's Encrypt or Cloudflare

## 📊 Monitoring & Maintenance

### 1. Health Checks
Create a health check endpoint:
```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() })
}
```

### 2. Logging
- Use Vercel's built-in logging
- Or implement custom logging with Winston/Pino

### 3. Database Monitoring
- Monitor Supabase usage in dashboard
- Set up alerts for high usage

## 🚨 Troubleshooting

### Common Issues

1. **Environment Variables Not Loading**
   - Ensure variables start with `NEXT_PUBLIC_` for client-side
   - Restart deployment after adding variables

2. **Supabase Connection Issues**
   - Verify URL and key are correct
   - Check Supabase project status
   - Ensure RLS policies are configured

3. **Build Failures**
   - Check Node.js version compatibility
   - Ensure all dependencies are installed
   - Review build logs for specific errors

### Support
- Check Supabase documentation
- Review Next.js deployment docs
- Contact platform support if needed

## 📈 Post-Deployment

1. **Test Authentication Flow**
   - Test user registration
   - Test user login
   - Test protected routes

2. **Performance Testing**
   - Run Lighthouse audit
   - Test on different devices
   - Monitor Core Web Vitals

3. **SEO Optimization**
   - Submit sitemap to Google
   - Configure meta tags
   - Set up Google Search Console

## 🔄 Updates & Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor security advisories
- Backup Supabase data
- Review performance metrics

### Deployment Process
1. Test changes locally
2. Deploy to staging (if available)
3. Deploy to production
4. Monitor for issues
5. Rollback if necessary

---

**Need Help?** Check the troubleshooting section or create an issue in the repository.
