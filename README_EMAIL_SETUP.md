# Email Setup Instructies

Het contactformulier is nu werkend! Hier is hoe je het instelt:

## Optie 1: Resend (Aanbevolen - Gratis tier beschikbaar)

1. Maak een gratis account op [Resend.com](https://resend.com)
2. Verifieer je email domein (of gebruik hun test email)
3. Kopieer je API key uit het dashboard
4. Voeg deze toe aan je `.env.local` bestand:

```
RESEND_API_KEY=re_xxxxxxxxxxxxx
CONTACT_EMAIL=cranio@lieschristiaens.be
```

5. Installeer Resend:
```bash
npm install resend
```

6. De API route is al gemaakt in `src/app/api/contact/route.ts` - je hoeft alleen Resend te installeren en je API key toe te voegen.

## Optie 2: Nodemailer (Voor eigen SMTP server)

1. Installeer nodemailer:
```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

2. Voeg SMTP configuratie toe aan `.env.local`:
```
SMTP_HOST=smtp.jouw-email-provider.com
SMTP_PORT=587
SMTP_USER=jouw-email@voorbeeld.nl
SMTP_PASS=jouw-wachtwoord
CONTACT_EMAIL=cranio@lieschristiaens.be
```

## Optie 3: SendGrid, Mailgun, of andere service

Je kunt ook andere email services gebruiken. Pas de API route aan in `src/app/api/contact/route.ts`.

---

## Testen

Na installatie kun je het formulier testen op je website. Berichten worden verzonden naar het email adres dat je hebt ingesteld in `CONTACT_EMAIL`.

## Beveiliging

Zorg ervoor dat je `.env.local` bestand in je `.gitignore` staat zodat je API keys niet publiek worden.

