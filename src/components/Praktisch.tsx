'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Praktisch() {
  const [formData, setFormData] = useState({
    naam: '',
    telefoon: '',
    email: '',
    onderwerp: '',
    bericht: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message })
        // Reset form
        setFormData({
          naam: '',
          telefoon: '',
          email: '',
          onderwerp: '',
          bericht: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Er is een fout opgetreden. Probeer het later opnieuw.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Er is een fout opgetreden. Probeer het later opnieuw.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      {/* Praktisch Info Section - White Background */}
      <section id="praktisch" className="pt-8 md:pt-12 pb-12 md:pb-20 px-6 md:px-16 lg:px-24 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl text-center mb-8 md:mb-12 lg:mb-24" style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}>
            Welkom in mijn praktijk
          </h2>

          {/* Three Columns Info - Stack on mobile (centered), side-by-side on desktop */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8 lg:gap-8">
            <div className="space-y-4" style={{ width: '100%', maxWidth: '275px', flexShrink: 0 }}>
              <h3 className="font-sans text-xl font-medium uppercase tracking-wider" style={{ color: '#a1b451' }}>
                WAAR JE ME VINDT
              </h3>
              <p className="leading-relaxed font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Je bent van harte welkom in mijn praktijk te Bellegem.
              </p>
              <p className="leading-relaxed whitespace-pre-line" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                <span style={{ fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>Bellegemsestraat 247{'\n'}8510 Bellegem</span>{'\n'}<span className="font-light">BE 0525.581.929</span>
              </p>
              <p className="leading-relaxed font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                De praktijk bevindt zich op de eerste verdieping. Er is een leuning aan de trap voor extra steun.
              </p>
            </div>

            <div className="space-y-4" style={{ width: '100%', maxWidth: '275px', flexShrink: 0 }}>
              <h3 className="font-sans text-xl font-medium uppercase tracking-wider" style={{ color: '#a1b451' }}>
                ANNULEREN?
              </h3>
              <p className="leading-relaxed font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Het kan altijd gebeuren dat je een afspraak moet verplaatsen of afzeggen. Laat het me even weten zodra je kan.
              </p>
              <ul className="space-y-2 font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif', listStyle: 'none', paddingLeft: 0, position: 'relative' }}>
                <li className="leading-relaxed" style={{ position: 'relative' }}>
                  <Image src="/images/pentagon_groen.svg" alt="" width={12} height={12} style={{ position: 'absolute', left: '-20px', top: '6px' }} unoptimized />
                  Wanneer je binnen 48 uur annuleert, wordt 50% van het tarief aangerekend.
                </li>
                <li className="leading-relaxed" style={{ position: 'relative' }}>
                  <Image src="/images/pentagon_groen.svg" alt="" width={12} height={12} style={{ position: 'absolute', left: '-20px', top: '6px' }} unoptimized />
                  Bij annulatie binnen 24 uur wordt het volledige tarief aangerekend.
                </li>
              </ul>
              <p className="leading-relaxed font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Dankjewel om hiermee rekening te houden.
              </p>
            </div>

            <div className="space-y-4" style={{ width: '100%', maxWidth: '275px', flexShrink: 0 }}>
              <h3 className="font-sans text-xl font-medium uppercase tracking-wider" style={{ color: '#a1b451' }}>
                JOUW PRIVACY
              </h3>
              <p className="leading-relaxed font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Wat je met mij deelt, blijft bij mij. Alles wat je vertelt, wat we bespreken en wat er tijdens een sessie gebeurt, blijft strikt vertrouwelijk — behalve wanneer ik wettelijk verplicht zou zijn informatie te delen.
              </p>
              <p className="leading-relaxed font-light" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Jouw verhaal blijft van jou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Cream Background volgens SVG */}
      <section className="pt-12 md:pt-20 pb-0 px-6 md:px-16 lg:px-24 bg-bg-cream relative overflow-hidden">
        {/* Decorative Pentagon - Wit voor contact sectie, achter tekst maar voor vierkant */}
        <div className="hidden md:block absolute pointer-events-none" style={{ 
          zIndex: 8,
          left: '50%',
          top: '42%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          opacity: 1
        }}>
          <svg width="900" height="900" viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
            <polygon 
              points="450,75 825,337.5 712.5,750 187.5,750 75,337.5" 
              fill="none" 
              stroke="#ffffff" 
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        
        {/* Titel en tekst - boven pentagon */}
        <div className="container mx-auto max-w-6xl relative" style={{ zIndex: 10 }}>
          <h2 
            className="font-sans text-center mb-4 md:mb-6 relative text-3xl md:text-5xl"
            style={{ 
              fontFamily: 'Mundial-Regular, Mundial, sans-serif',
              fontWeight: 400,
              color: '#4a5d22'
            }}
          >
            Neem gerust contact op
          </h2>
          <p 
            className="text-center mb-8 md:mb-12 font-light relative text-sm md:text-base"
            style={{ 
              fontFamily: 'Mundial-Light, Mundial, sans-serif',
              color: '#4a5d22'
            }}
          >
            Voelt iets nog onduidelijk of heb je een vraag? Je mag me altijd contacteren.
          </p>
        </div>

        {/* Grid: Map + Form - onder pentagon maar boven vierkant */}
        <div className="container mx-auto max-w-6xl relative" style={{ zIndex: 5 }}>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start relative">
            {/* Map placeholder - rechthoek met grijze achtergrond, achter pentagon - VERBORGEN OP MOBILE */}
            <div className="hidden md:block relative" style={{ 
              backgroundColor: '#cccccc', 
              width: '100%',
              maxWidth: '480px',
              height: '540px',
              aspectRatio: '432 / 468',
              zIndex: 1,
              marginTop: '0'
            }}></div>

            {/* Contact Form (geen aparte bg, alles cream) */}
            <div>
              {/* Status messages */}
              {submitStatus.type && (
                <div 
                  className={`mb-4 p-3 md:p-4 rounded-md text-sm md:text-base ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                  <div>
                    <label htmlFor="naam" className="block mb-2 font-light text-sm md:text-base" style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d22' }}>
                      Naam en voornaam *
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      value={formData.naam}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md focus:ring-2 focus:ring-olive-dark focus:border-transparent bg-white text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefoon" className="block mb-2 font-light text-sm md:text-base" style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d22' }}>
                      Telefoon *
                    </label>
                    <input
                      type="tel"
                      id="telefoon"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md focus:ring-2 focus:ring-olive-dark focus:border-transparent bg-white text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-light text-sm md:text-base" style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d22' }}>
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md focus:ring-2 focus:ring-olive-dark focus:border-transparent bg-white text-sm md:text-base"
                    />
                  </div>

                  <div>
                    <label htmlFor="onderwerp" className="block mb-2 font-light text-sm md:text-base" style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d22' }}>
                      Onderwerp *
                    </label>
                    <input
                      type="text"
                      id="onderwerp"
                      name="onderwerp"
                      value={formData.onderwerp}
                      onChange={handleChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md focus:ring-2 focus:ring-olive-dark focus:border-transparent bg-white text-sm md:text-base"
                    />
                  </div>

                {/* Bericht veld + Verstuur button naast elkaar op desktop, onder elkaar op mobile */}
                <div className="flex flex-col md:grid md:grid-cols-[1fr_auto] gap-4 md:items-end">
                  <div className="flex flex-col">
                    <label htmlFor="bericht" className="block mb-2 font-light text-sm md:text-base" style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d22' }}>
                      Bericht *
                    </label>
                    <textarea
                      id="bericht"
                      name="bericht"
                      value={formData.bericht}
                      onChange={handleChange}
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md focus:ring-2 focus:ring-olive-dark focus:border-transparent resize-none bg-white flex-1 text-sm md:text-base"
                      style={{ minHeight: '120px' }}
                    ></textarea>
                  </div>

                  {/* Verstuur button uitgelijnd met onderkant textarea op desktop, volle breedte op mobile */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="text-white font-semibold px-6 md:px-8 py-3 rounded-md transition-colors hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap w-full md:w-auto text-sm md:text-base"
                    style={{ backgroundColor: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif' }}
                  >
                    {isSubmitting ? 'Verzenden...' : 'Verstuur'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Scroll to Top Arrow - boven alles */}
        <div className="container mx-auto max-w-6xl relative" style={{ zIndex: 10 }}>
          <div className="mt-6 md:mt-8 flex justify-center">
            <a href="#hero" className="inline-block animate-bounce-slow">
              <div style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>
                <Image
                  src="/images/pijl.svg"
                  alt="Scroll naar boven"
                  width={20}
                  height={20}
                  className="h-auto"
                  style={{ width: '20px' }}
                  unoptimized
                />
              </div>
            </a>
          </div>
        </div>

        {/* Footer Bar - Buiten de container voor volledige breedte */}
        <div className="w-full mt-12 md:mt-20 px-6 md:px-16 lg:px-24 pb-6 md:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center md:items-end gap-4 md:gap-0" style={{ minHeight: 'auto' }}>
            <p className="text-center md:text-left text-sm md:text-base" style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d23' }}>
              © {new Date().getFullYear()} Lies Christiaens
            </p>
            <div className="flex justify-center items-center order-first md:order-none">
              <Image 
                src="/images/logo_lies.svg" 
                alt="Logo Lies Christiaens" 
                width={40} 
                height={40}
                className="w-10 h-10"
                style={{ marginBottom: '4px' }}
                quality={100}
                unoptimized
              />
            </div>
            <a 
              href="https://www.what-s-in-a.name" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex justify-center md:justify-end items-center gap-2 hover:opacity-80 transition-opacity text-sm md:text-base"
            >
              <p style={{ fontFamily: 'Mundial-Light, Mundial, sans-serif', color: '#4a5d23' }}>
                Site by What's in a name
              </p>
              <Image 
                src="/images/whats_in_a_name_question.svg" 
                alt="What's in a name logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
                unoptimized
              />
            </a>
          </div>
        </div>

      </section>
    </>
  )
}
