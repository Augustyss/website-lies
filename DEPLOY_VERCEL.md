# Website Live Zetten op Vercel

Je code staat nu op GitHub! Volg deze stappen om de website permanent online te zetten:

## Stap 1: Ga naar Vercel

1. Ga naar [vercel.com](https://vercel.com)
2. Klik op **"Sign Up"** of **"Log In"**
3. Kies **"Continue with GitHub"** (log in met je GitHub account)

## Stap 2: Import Project

1. Klik op **"Add New Project"** of **"Import Project"**
2. Je ziet een lijst met je GitHub repositories
3. Selecteer **"Augustyss/website-lies"**
4. Klik **"Import"**

## Stap 3: Configure Project

Vercel detecteert automatisch dat het een Next.js project is. Je hoeft meestal niets te wijzigen:

- **Framework Preset**: Next.js (automatisch)
- **Root Directory**: `./` (blijft leeg)
- **Build Command**: `npm run build` (automatisch)
- **Output Directory**: `.next` (automatisch)

**Klik gewoon "Deploy"!**

## Stap 4: Wacht op Deployment

- Vercel bouwt je website (duurt 1-3 minuten)
- Je ziet de voortgang in real-time
- Wanneer het klaar is, krijg je een URL zoals:
  - `https://website-lies.vercel.app`
  - of `https://website-lies-git-main-augustyss.vercel.app`

## Stap 5: Environment Variables (Voor Contactformulier)

Als je het contactformulier werkend wilt hebben:

1. In Vercel dashboard → Ga naar je project
2. Klik **Settings** → **Environment Variables**
3. Voeg toe:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Je Resend API key
   - **Environment**: Production, Preview, Development (vink alle drie aan)
   - Klik **Save**
   
4. Voeg toe:
   - **Name**: `CONTACT_EMAIL`
   - **Value**: `cranio@lieschristiaens.be`
   - **Environment**: Production, Preview, Development
   - Klik **Save**

5. Ga naar **Deployments** tab
6. Klik op de drie puntjes (...) van je laatste deployment
7. Klik **Redeploy** (om environment variables te activeren)

## Stap 6: Custom Domain (Optioneel)

Wil je een eigen domeinnaam (bijv. `lieschristiaens.be`)?

1. Ga naar **Settings** → **Domains**
2. Voeg je domeinnaam toe
3. Volg de instructies om je DNS records aan te passen
4. SSL certificaat wordt automatisch aangeboden!

## ✅ Klaar!

Je website is nu permanent online! 

### Automatische Updates

- Elke keer als je code naar GitHub pusht, wordt de website automatisch bijgewerkt!
- Push commando:
  ```bash
  git add .
  git commit -m "Update website"
  git push
  ```
- Vercel deplt automatisch binnen 1-2 minuten

### Monitoring

- In Vercel dashboard zie je:
  - Analytics (bezoekers)
  - Performance metrics
  - Deployment geschiedenis
  - Logs voor debugging

---

**Je website is nu live en permanent beschikbaar! 🎉**





