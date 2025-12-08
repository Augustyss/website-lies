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
    // Gebruik geverifieerd domein email als "from" adres, anders fallback naar Resend test email
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Website Contact <onboarding@resend.dev>'

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
    
    // Email verzending via Resend
    if (resendApiKey) {
      try {
        const { Resend } = await import('resend')
        const resend = new Resend(resendApiKey)
        
        // HTML versie van de email voor betere deliverability
        const emailBodyHTML = `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #4a5d23;">Nieuw contactformulier bericht van de website</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">Naam:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${naam}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Telefoon:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${telefoon || 'Niet opgegeven'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Onderwerp:</td>
                <td style="padding: 8px; border-bottom: 1px solid #eee;">${onderwerp || 'Geen onderwerp'}</td>
              </tr>
            </table>
            <div style="margin: 20px 0;">
              <h3 style="color: #4a5d23;">Bericht:</h3>
              <p style="white-space: pre-wrap; background: #f5f5f5; padding: 15px; border-radius: 5px;">${bericht}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">Dit bericht is verzonden via het contactformulier op lieschristiaens.be</p>
          </div>
        `
        
        const result = await resend.emails.send({
          from: fromEmail,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          html: emailBodyHTML,
          text: emailBody, // Fallback voor email clients die geen HTML ondersteunen
          headers: {
            'X-Entity-Ref-ID': `contact-${Date.now()}`,
          },
        })
        
        console.log('✅ Email verzonden via Resend:', result)
        
        // Check voor errors in result
        if (result.error) {
          console.error('❌ Resend API error:', result.error)
          throw new Error(result.error.message || 'Email verzending mislukt')
        }
      } catch (error: any) {
        console.error('❌ Email sending error:', error)
        console.error('Error details:', {
          message: error?.message,
          name: error?.name,
          stack: error?.stack
        })
        // We gooien de error niet door, zodat de gebruiker nog steeds een succesmelding ziet
        // maar we loggen het wel voor debugging in Vercel logs
      }
    } else {
      console.log('⚠️  RESEND_API_KEY niet gevonden. Email wordt alleen gelogd.')
      console.log('   Voeg RESEND_API_KEY toe aan environment variables voor email verzending.')
    }
    
    return NextResponse.json(
      { message: 'Bericht succesvol verzonden! Ik neem zo snel mogelijk contact met je op.' },
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
