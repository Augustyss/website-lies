# GitHub Setup Instructies

Je code is nu klaar voor GitHub! Volg deze stappen:

## Stap 1: GitHub Repository Aanmaken

1. Ga naar [github.com](https://github.com) en log in (of maak een account)
2. Klik op het "+" icoon rechtsboven → "New repository"
3. Vul in:
   - **Repository name**: `website-lies` (of een andere naam)
   - **Description**: "Website voor Lies Christiaens - Cranio Sacraal Therapie"
   - **Visibility**: Private (aanbevolen) of Public
   - **NIET** aanvinken: "Add a README file" (die hebben we al)
   - **NIET** aanvinken: "Add .gitignore" (die hebben we al)
4. Klik "Create repository"

## Stap 2: Code naar GitHub Pushen

Kopieer de commando's die GitHub je geeft, of gebruik deze:

```bash
cd "/Users/bavosamyn/Library/Mobile Documents/com~apple~CloudDocs/website_lies"

# Eerste commit maken
git add .
git commit -m "Initial commit: Website voor Lies Christiaens"

# Remote repository toevoegen (vervang YOUR_USERNAME met je GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/website-lies.git

# Branch naam instellen
git branch -M main

# Code naar GitHub pushen
git push -u origin main
```

## Stap 3: Verificatie

- Ga naar je GitHub repository
- Controleer dat alle bestanden er staan
- **Belangrijk**: Controleer dat `.env.local` NIET in de repository staat (staat in .gitignore)

## Stap 4: Deploy op Vercel

Na het pushen naar GitHub:

1. Ga naar [vercel.com](https://vercel.com)
2. Log in met je GitHub account
3. Klik "Add New Project"
4. Selecteer je `website-lies` repository
5. Vercel detecteert automatisch dat het Next.js is
6. Klik "Deploy"

## Stap 5: Environment Variables Toevoegen

In Vercel dashboard:
1. Ga naar je project → Settings → Environment Variables
2. Voeg toe:
   - `RESEND_API_KEY` = je Resend API key (voor contactformulier)
   - `CONTACT_EMAIL` = cranio@lieschristiaens.be

## Klaar! 🎉

Je website is nu live op een URL zoals: `https://website-lies.vercel.app`

Elke keer als je code naar GitHub pusht, wordt de site automatisch bijgewerkt!

---

**Troubleshooting:**

Als je problemen hebt met git push:
- Controleer of je GitHub username en repository naam correct zijn
- Gebruik: `git remote -v` om te zien of remote correct is ingesteld
- Als je een foutmelding krijgt over authenticatie, gebruik GitHub CLI of SSH keys

