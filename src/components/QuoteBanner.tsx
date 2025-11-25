import Image from 'next/image'

interface QuoteBannerProps {
  text: string
  author: string
  backgroundImage?: string
}

export default function QuoteBanner({ text, author, backgroundImage }: QuoteBannerProps) {
  // Special styling for MARTHA GRAHAM, JOHN BRADSHAW, and CARL GUSTAV JUNG quotes
  const isMarthaGraham = author === 'MARTHA GRAHAM'
  const isJohnBradshaw = author === 'JOHN BRADSHAW'
  const isCarlJung = author === 'CARL GUSTAV JUNG'
  const isSpecialQuote = isMarthaGraham || isJohnBradshaw || isCarlJung
  
  return (
    <section 
      id={
        isCarlJung ? "quote-jung" : 
        isJohnBradshaw ? "quote-bradshaw" : 
        isMarthaGraham ? "quote-graham" : 
        undefined
      } 
      className="w-full relative overflow-hidden"
    >
      {/* Background Image */}
      {backgroundImage && (
        <>
          {isSpecialQuote ? (
            // MARTHA GRAHAM / JOHN BRADSHAW / CARL GUSTAV JUNG speciale styling met aanhalingstekens SVG
            // Volgens SVG: eerst groene achtergrond, dan afbeelding met mix-blend-mode overlay
            <>
              {/* Groene achtergrond rechthoek - volgens SVG eerst */}
              <div className="absolute inset-0 z-0" style={{ backgroundColor: '#4a5d23' }} />
              
              {/* Afbeelding met opacity 0.6 en mix-blend-mode overlay - volgens SVG */}
              <div className="absolute inset-0 z-10" style={{ mixBlendMode: 'overlay', opacity: 0.6 }}>
                <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                  quality={100}
                  unoptimized
                />
              </div>
              {/* Tekst en aanhalingstekens erbovenop - volgens SVG */}
              <div className="container mx-auto max-w-[100rem] relative z-20 py-36 sm:py-44 md:py-56 px-8 sm:px-12 md:px-16">
                <blockquote className="relative flex flex-col items-center">
                  {/* Quote met aanhalingstekens */}
                  <div className="relative flex items-center justify-center mb-20 px-4 sm:px-8 md:px-16">
                    {/* Opening Quote Mark - Links boven - Responsive voor mobile */}
                    <div className="absolute" style={{ 
                      left: 'clamp(-40px, -8vw, -60px)', 
                      top: 'clamp(-30px, -6vw, -50px)', 
                      zIndex: 1 
                    }}>
                      <img
                        src="/images/aanhalingtekens.svg"
                        alt=""
                        width={80}
                        height={60}
                        style={{ 
                          opacity: 0.8,
                          width: 'clamp(50px, 12vw, 80px)',
                          height: 'clamp(37px, 9vw, 60px)'
                        }}
                      />
                    </div>
                    
                    {/* Quote Text */}
                    <p 
                      className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-[80px] relative z-10"
                      style={{ 
                        lineHeight: '1.2',
                        fontFamily: 'Mundial-HairItalic, Mundial, sans-serif',
                        fontWeight: 100,
                        fontStyle: 'italic',
                        color: '#ecf0dc',
                        maxWidth: '900px'
                      }}
                    >
                      {isMarthaGraham ? (
                        <>
                          The body says<br />
                          what words cannot
                        </>
                      ) : isJohnBradshaw ? (
                        <>
                          We cannot heal<br />
                          what we cannot feel
                        </>
                      ) : isCarlJung ? (
                        <>
                          Who looks inside<br />
                          awakens
                        </>
                      ) : (
                        text
                      )}
                    </p>
                    
                    {/* Closing Quote Mark - Rechts onder - Responsive voor mobile */}
                    <div className="absolute" style={{ 
                      right: 'clamp(-40px, -8vw, -60px)', 
                      bottom: 'clamp(-30px, -6vw, -50px)', 
                      zIndex: 1, 
                      transform: 'rotate(180deg)' 
                    }}>
                      <img
                        src="/images/aanhalingtekens.svg"
                        alt=""
                        width={80}
                        height={60}
                        style={{ 
                          opacity: 0.8,
                          width: 'clamp(50px, 12vw, 80px)',
                          height: 'clamp(37px, 9vw, 60px)'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Auteur */}
                  <cite className="not-italic" style={{ marginTop: '32px' }}>
                    <p className="text-lg sm:text-xl md:text-2xl uppercase tracking-widest" style={{ 
                      color: '#ecf0dc',
                      fontFamily: 'Mundial-DemiBold, Mundial, sans-serif',
                      fontWeight: 600
                    }}>
                      {author}
                    </p>
                  </cite>
                </blockquote>
              </div>
              
              {/* Pijl naar volgende sectie - voor CARL GUSTAV JUNG en JOHN BRADSHAW quotes */}
              {isCarlJung && (
                <div className="flex justify-center pb-8 relative" style={{ zIndex: 20 }}>
                  <a href="#over-cranio" className="inline-block animate-bounce-slow">
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
              )}
              {isJohnBradshaw && (
                <div className="flex justify-center pb-8 relative" style={{ zIndex: 20 }}>
                  <a href="#voor-wat" className="inline-block animate-bounce-slow">
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
              )}
              {isMarthaGraham && (
                <div className="flex justify-center pb-8 relative" style={{ zIndex: 20 }}>
                  <a href="#vragen" className="inline-block animate-bounce-slow">
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
              )}
            </>
          ) : (
            // Normale quote banners met overlay
            <>
              <div className="absolute inset-0 z-0">
                <Image
                  src={backgroundImage}
                  alt=""
                  fill
                  className="object-cover"
                  priority={false}
                  quality={100}
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 z-10 bg-olive-dark/85" />
              <div className="container mx-auto max-w-[100rem] relative z-20 py-20 sm:py-24 md:py-32 px-6">
                <blockquote className="text-center px-4 relative">
                  <div className="text-white text-8xl md:text-9xl font-serif leading-none mb-4 opacity-40">"</div>
                  <p 
                    className="font-sans italic text-white text-center mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[80px]"
                    style={{ 
                      lineHeight: '1.2',
                      fontFamily: 'Mundial-HairItalic, Mundial, sans-serif',
                      fontWeight: 100
                    }}
                  >
                    {text}
                  </p>
                  <div className="text-white text-8xl md:text-9xl font-serif leading-none mb-16 opacity-40">"</div>
                  <cite className="not-italic">
                    <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest font-sans font-medium" style={{ color: '#a0b551' }}>
                      {author}
                    </p>
                  </cite>
                </blockquote>
              </div>
            </>
          )}
        </>
      )}
      
      {/* Solid background if no image */}
      {!backgroundImage && (
        <>
          <div className="absolute inset-0 z-0 bg-olive-dark" />
          <div className="container mx-auto max-w-[100rem] relative z-20 py-20 sm:py-24 md:py-32 px-6">
            <blockquote className="text-center px-4 relative">
              <div className="text-white text-8xl md:text-9xl font-serif leading-none mb-4 opacity-40">"</div>
              <p 
                className="font-sans italic text-white text-center mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[80px]"
                style={{ 
                  lineHeight: '1.2',
                  fontFamily: 'Mundial-HairItalic, Mundial, sans-serif',
                  fontWeight: 100
                }}
              >
                {text}
              </p>
              <div className="text-white text-8xl md:text-9xl font-serif leading-none mb-16 opacity-40">"</div>
              <cite className="not-italic">
                <p className="text-base sm:text-lg md:text-xl uppercase tracking-widest font-sans font-medium" style={{ color: '#a0b551' }}>
                  {author}
                </p>
              </cite>
            </blockquote>
          </div>
        </>
      )}
    </section>
  )
}
