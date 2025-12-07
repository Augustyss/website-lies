import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-between px-6 md:px-16 lg:px-24 bg-bg-cream relative" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <div className="text-center max-w-6xl flex-1 flex flex-col justify-center">
        {/* Logo - VASTE GROOTTE */}
        <div style={{ marginBottom: '10px !important', display: 'block' }}>
          <Image 
            src="/images/logo_lies.svg" 
            alt="Lies Christiaens Logo" 
            width={120} 
            height={120}
            style={{ width: '120px', height: '120px', display: 'block', margin: '0 auto' }}
            quality={100}
            unoptimized
          />
        </div>

          {/* Title - VASTE FONT SIZE (y=379.86 in SVG) */}
          <h1 
            style={{ 
              fontSize: '48px',
              fontFamily: 'Mundial, sans-serif',
              color: '#4a5d23',
              fontWeight: 400,
              marginBottom: '6px',
              marginTop: '0',
              paddingBottom: '0',
              lineHeight: '1',
              textAlign: 'center'
            }}
          >
            Lies Christiaens
          </h1>

        {/* Subtitle - VASTE FONT SIZE (y=407.87, 28px onder titel) */}
        <p 
          style={{ 
            fontSize: '16px',
            fontFamily: 'Mundial-DemiBold, Mundial, sans-serif',
            letterSpacing: '0.2em',
            color: '#4a5d23',
            fontWeight: 600,
            marginBottom: '120px',
            marginTop: '0',
            paddingTop: '0',
            lineHeight: '1',
            textAlign: 'center',
            textTransform: 'uppercase'
          }}
        >
          CRANIO SACRAAL THERAPIE
        </p>

        {/* Tagline - Responsive voor mobile */}
        <p 
          className="font-sans italic text-center mx-auto max-w-4xl" 
          style={{ 
            fontSize: 'clamp(24px, 5vw, 40px)',
            lineHeight: 'clamp(28px, 6vw, 48px)',
            fontFamily: 'Mundial-HairItalic, Mundial, sans-serif',
            color: '#4a5d23',
            fontWeight: 100
          }}
        >
          <span className="md:whitespace-nowrap">Met zachte aandacht begeleid ik je naar</span><br className="hidden md:block" />
          <span className="md:whitespace-nowrap">rust, ruimte en verbinding in jezelf.</span>
        </p>
      </div>

      {/* Scroll Arrow - Vast aan ondermarge */}
      <div className="flex justify-center pb-8">
        <a href="#over-lies" className="inline-block animate-bounce-slow">
          <Image
            src="/images/pijl.svg"
            alt="Scroll naar beneden"
            width={20}
            height={20}
            className="h-auto"
            style={{ width: '20px' }}
            unoptimized
          />
        </a>
      </div>
    </section>
  )
}

