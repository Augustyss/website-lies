import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { naam, telefoon, email, onderwerp, bericht } = body

    // Validatie
    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: 'Naam, email en bericht zijn verplicht' },
        { status: 400 }
      )
    }

    // Email configuratie - gebruik environment variabelen
    const recipientEmail = process.env.CONTACT_EMAIL || 'cranio@lieschristiaens.be'
    const resendApiKey = process.env.RESEND_API_KEY

    // Email content
    const emailSubject = onderwerp || `Nieuw contactformulier bericht van ${naam}`
    const emailBody = `
Nieuw contactformulier bericht van de website:

Naam: ${naam}
Email: ${email}
Telefoon: ${telefoon || 'Niet opgegeven'}
Onderwerp: ${onderwerp || 'Geen onderwerp'}

Bericht:
${bericht}

---
Dit bericht is verzonden via het contactformulier op lieschristiaens.be
    `.trim()

    // Log altijd voor debugging
    console.log('=== CONTACT FORM SUBMISSION ===')
    console.log('To:', recipientEmail)
    console.log('From:', email)
    console.log('Subject:', emailSubject)
    console.log('Body:', emailBody)
    
    // TODO: Email verzending via Resend
    // Voor nu wordt het alleen gelogd. Om email verzending te activeren:
    // 1. Installeer: npm install resend
    // 2. Voeg RESEND_API_KEY toe aan environment variables in Vercel
    // 3. Uncomment de email verzending code hieronder
    if (resendApiKey) {
      console.log('⚠️  Email verzending is nog niet geconfigureerd.')
      console.log('   Om email verzending te activeren:')
      console.log('   1. Installeer: npm install resend')
      console.log('   2. Zie README_EMAIL_SETUP.md voor instructies')
      
      // TODO: Uncomment dit wanneer resend is geïnstalleerd:
      /*
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendApiKey)
        await resend.emails.send({
          from: 'Website Contact <onboarding@resend.dev>',
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          text: emailBody,
        })
        console.log('✅ Email verzonden via Resend')
      } catch (error) {
        console.error('Email sending error:', error)
      }
      */
    } else {
      console.log('⚠️  RESEND_API_KEY niet gevonden. Email wordt alleen gelogd.')
      console.log('   Voeg RESEND_API_KEY toe aan environment variables voor email verzending.')
    }
    
    return NextResponse.json(
      { message: 'Bericht succesvol verzonden! We nemen zo snel mogelijk contact met je op.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is een fout opgetreden. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}
