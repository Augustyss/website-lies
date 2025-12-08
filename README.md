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

Je code staat nu op GitHub: https://github.com/Augustyss/website-lies

### Deploy naar Vercel (Aanbevolen)

1. Ga naar [vercel.com](https://vercel.com) en log in met GitHub
2. Klik "Add New Project"
3. Selecteer "Augustyss/website-lies"
4. Klik "Deploy"
5. Je website is live binnen 2 minuten!

Zie `DEPLOY_VERCEL.md` voor gedetailleerde instructies.

### Automatische Updates

Elke keer als je code naar GitHub pusht, wordt de website automatisch bijgewerkt:
```bash
git add .
git commit -m "Update"
git push
```

## 🛠️ Technologie

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Next.js Image** - Geoptimaliseerde afbeeldingen

## 📝 Notities

- Alle afbeeldingen staan in `/public/images`
- Fonts staan in `/public/fonts`
- Contactformulier API route: `/src/app/api/contact/route.ts`
