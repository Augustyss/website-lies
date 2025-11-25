# Cranio bij Lies - Website

Website voor Lies Christiaens - Cranio Sacraal Therapie.

## 🚀 Development

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

## 📁 Project Structuur

- `/src/components` - React components
- `/src/app` - Next.js app router pages en API routes
- `/public/images` - Alle afbeeldingen
- `/public/fonts` - Mundo font familie

## 🔧 Setup

### Email Setup

Voor het contactformulier:
1. Installeer Resend: `npm install resend`
2. Maak een account op [resend.com](https://resend.com)
3. Voeg toe aan `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxx
   CONTACT_EMAIL=cranio@lieschristiaens.be
   ```

Zie `README_EMAIL_SETUP.md` voor meer details.

## 📦 Deployment

De website kan worden gedeployed op:
- **Vercel** (aanbevolen) - Automatisch vanuit GitHub
- **Netlify** - Ook gratis en eenvoudig
- Andere hosting providers die Next.js ondersteunen

Zie `DEPLOYMENT_GUIDE.md` voor gedetailleerde instructies.

## 🛠️ Technologie

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Next.js Image** - Geoptimaliseerde afbeeldingen

## 📝 Notities

- Alle afbeeldingen staan in `/public/images`
- Fonts staan in `/public/fonts`
- Contactformulier API route: `/src/app/api/contact/route.ts`
