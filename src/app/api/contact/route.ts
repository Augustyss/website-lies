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

    // Email verzenden via Resend als API key beschikbaar is
    if (resendApiKey) {
      try {
        // Dynamisch importeren van Resend (alleen als geïnstalleerd)
        let Resend
        try {
          const resendModule = await import('resend')
          Resend = resendModule.Resend
        } catch (importError) {
          console.log('⚠️  Resend package niet geïnstalleerd. Installeer met: npm install resend')
          Resend = null
        }
        
        if (Resend) {
          const resend = new Resend(resendApiKey)
          await resend.emails.send({
            from: 'Website Contact <onboarding@resend.dev>', // Gebruik je eigen verified domain
            to: recipientEmail,
            replyTo: email,
            subject: emailSubject,
            text: emailBody,
          })
        }
      } catch (emailError) {
        console.error('Email sending error:', emailError)
        // Fallback: log naar console
        console.log('=== EMAIL WOULD BE SENT ===')
        console.log('To:', recipientEmail)
        console.log('From:', email)
        console.log('Subject:', emailSubject)
        console.log('Body:', emailBody)
      }
    } else {
      // Geen API key - log alleen (voor development)
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log('To:', recipientEmail)
      console.log('From:', email)
      console.log('Subject:', emailSubject)
      console.log('Body:', emailBody)
      console.log('⚠️  RESEND_API_KEY niet gevonden - installeer Resend en voeg API key toe aan environment variables')
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

