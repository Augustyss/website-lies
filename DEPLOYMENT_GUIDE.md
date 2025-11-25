# Website Permanent Online Zetten - Deployment Guide

Er zijn verschillende opties om je website permanent online te zetten. Hier zijn de beste opties:

## Optie 1: Vercel (Aanbevolen - Gratis) ⭐

Vercel is gemaakt door de makers van Next.js en is de beste keuze voor Next.js websites.

### Voordelen:
- ✅ Volledig gratis voor persoonlijke projecten
- ✅ Automatische deploys vanuit GitHub
- ✅ Snel en betrouwbaar
- ✅ SSL certificaat automatisch inbegrepen
- ✅ Werkt perfect met Next.js

### Stappen:

1. **GitHub Repository aanmaken** (als je nog geen hebt):
   ```bash
   # In je project folder
   git init
   git add .
   git commit -m "Initial commit"
   ```
   
   Ga naar [github.com](https://github.com) en maak een nieuw repository aan, push je code:
   ```bash
   git remote add origin https://github.com/jouw-username/website-lies.git
   git branch -M main
   git push -u origin main
   ```

2. **Vercel Account aanmaken**:
   - Ga naar [vercel.com](https://vercel.com)
   - Log in met je GitHub account
   - Klik op "Add New Project"
   - Selecteer je repository
   - Vercel detecteert automatisch dat het een Next.js project is
   - Klik "Deploy"

3. **Environment Variables** (voor email):
   - Ga naar Project Settings > Environment Variables
   - Voeg toe:
     - `RESEND_API_KEY` = je Resend API key
     - `CONTACT_EMAIL` = cranio@lieschristiaens.be

4. **Je website is nu live!**
   - Je krijgt een URL zoals: `https://website-lies.vercel.app`
   - Elke keer als je code naar GitHub pusht, wordt de site automatisch bijgewerkt

---

## Optie 2: Netlify (Gratis Alternatief)

Netlify is ook een goede gratis optie.

### Stappen:
1. Ga naar [netlify.com](https://netlify.com)
2. Log in met GitHub
3. Klik "Add new site" > "Import an existing project"
4. Selecteer je GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Klik "Deploy site"

---

## Optie 3: Lokale Server (Raspberry Pi of andere computer)

Als je een Raspberry Pi of andere computer hebt die altijd aan kan staan:

### Stappen:
1. Installeer Node.js op de server
2. Clone je repository
3. Installeer dependencies: `npm install`
4. Build de site: `npm run build`
5. Gebruik PM2 om de site altijd draaiende te houden:
   ```bash
   npm install -g pm2
   pm2 start npm --name "website-lies" -- start
   pm2 startup  # Voor auto-start bij reboot
   pm2 save
   ```

---

## Aanbevolen: Vercel Setup

Laat me je helpen met de Vercel setup. Wil je dat ik:
1. Een `.gitignore` check of aanpas
2. Een GitHub repository voorbereidt
3. Een Vercel configuratiebestand toevoegt?

Voor nu is de snelste manier:
- Maak een GitHub repository
- Push je code
- Deploy op Vercel in 2 minuten

Wil je dat ik je hier stap voor stap doorheen help?

