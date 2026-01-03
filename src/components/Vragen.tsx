import Image from 'next/image'

export default function Vragen() {
  return (
    <section id="vragen" className="py-12 md:py-20 px-6 md:px-16 lg:px-24 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Hoofdtitel */}
        <h2 className="font-sans text-4xl md:text-5xl text-center mb-8 md:mb-16" style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}>
          Goed om te weten
        </h2>

        {/* Rij 1: Tekst (Links) - Afbeelding (Rechts) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-36 items-start mb-24 md:mb-40">
          {/* Links - Tekst */}
          <div className="flex flex-col order-2 md:order-1">
            <div>
              <h3 className="text-lg md:text-xl uppercase tracking-widest mb-3 md:mb-4" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
                WAT MOET IK WETEN OVER CRANIO SACRAAL THERAPIE?
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Cranio is een <strong>zachte, lichaamsgerichte therapie</strong> die lichaam en geest tot rust helpt komen. Tijdens een sessie werk ik met <strong>subtiele aanrakingen</strong> en een <strong>coachend gesprek</strong>. We kijken niet alleen naar de klachten, maar ook naar wat eronder ligt. Zo krijg je meer lichaamsbewustzijn en voel je beter wat jij nodig hebt.
              </p>
            </div>

            <div className="mt-8 md:mt-32">
              <h3 className="text-lg md:text-xl uppercase tracking-widest mb-3 md:mb-4" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
                KAN CRANIO WORDEN GECOMBINEERD MET ANDERE THERAPIEËN?
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Ja, Cranio kan prima naast andere therapieën of behandelingen gevolgd worden.
              </p>
            </div>
          </div>

          {/* Rechts - Afbeelding - verhouding 504:468, meer naar rechts uitgesneden - Responsive voor mobile */}
          <div className="relative w-full order-1 md:order-2 mb-8 md:mb-0" style={{ aspectRatio: '504 / 468', maxWidth: '100%', width: '100%' }}>
            <Image
              src="/images/Cranio algemeen.jpg"
              alt="Cranio sacraal therapie behandeling"
              width={504}
              height={468}
              className="object-cover"
              style={{ width: '100%', height: '100%', objectPosition: '70% center' }}
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* Rij 2: Andere technieken */}
        {/* Mobile: interleaved zodat eerste foto onder Acutonics staat */}
        <div className="md:hidden space-y-6 mb-24">
          <div>
            <h3 className="text-lg uppercase tracking-widest mb-3" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
              GEBRUIK JE TIJDENS EEN SESSIE OOK ANDERE TECHNIEKEN?
            </h3>
            <p className="text-sm font-light leading-relaxed mb-2" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
              Soms wel, wanneer ik inschat als dat helpend is voor jou als deel van de sessie.
            </p>
          </div>

          <div>
            <h4 className="text-base mb-2" style={{ 
              color: '#4a5d22', 
              fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', 
              fontWeight: 600,
              lineHeight: '24pt',
              letterSpacing: '0'
            }}>
              Acutonics
            </h4>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
              Dit is een vorm van <strong>geluidstherapie met stemvorken</strong>. De trillingen werken via specifieke acupunctuurpunten en energiebanen en ondersteunen zowel energetisch, lichamelijk als emotioneel herstel.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: '360 / 252', maxWidth: '360px' }}>
            <Image
              src="/images/Fonoforese.jpg"
              alt="Acutonics - geluidstherapie met stemvorken"
              width={360}
              height={252}
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
              quality={100}
              unoptimized
            />
          </div>

          <div>
            <h4 className="text-base mb-2" style={{ 
              color: '#4a5d22', 
              fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', 
              fontWeight: 600,
              lineHeight: '24pt',
              letterSpacing: '0'
            }}>
              LaStone therapie
            </h4>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
              Ik werk soms ook met <strong>warme en koude stenen</strong>. Basalt, marmer of andere mineralen kunnen op of onder je lichaam worden geplaatst om ontspanning te verdiepen. Vaak 'vragen' stenen er als het ware om deel te worden van de sessie; ik gebruik ze alleen wanneer dat klopt voor jou.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: '360 / 252', maxWidth: '360px' }}>
            <Image
              src="/images/Stenen_Lies.jpg"
              alt="LaStone therapie met warme stenen"
              width={360}
              height={252}
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* Desktop/tablet: 2-koloms layout met kleine negatieve marge voor foto's */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-36 items-start mb-24 md:mb-40">
          <div className="md:-mt-2">
            <div className="relative w-full md:w-full mb-4 md:mb-6" style={{ aspectRatio: '360 / 252', maxWidth: '360px' }}>
              <Image
                src="/images/Fonoforese.jpg"
                alt="Acutonics - geluidstherapie met stemvorken"
                width={360}
                height={252}
                className="object-cover"
                style={{ width: '100%', height: '100%' }}
                quality={100}
                unoptimized
              />
            </div>
            <div className="relative w-full md:w-full md:ml-auto" style={{ aspectRatio: '360 / 252', maxWidth: '360px', marginTop: '48px' }}>
              <Image
                src="/images/Stenen_Lies.jpg"
                alt="LaStone therapie met warme stenen"
                width={360}
                height={252}
                className="object-cover"
                style={{ width: '100%', height: '100%' }}
                quality={100}
                unoptimized
              />
            </div>
          </div>

          <div className="space-y-6 md:space-y-12">
            <div>
              <h3 className="text-lg md:text-xl uppercase tracking-widest mb-3 md:mb-4" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
                GEBRUIK JE TIJDENS EEN SESSIE OOK ANDERE TECHNIEKEN?
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed mb-4 md:mb-6" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Soms wel, wanneer ik inschat als dat helpend is voor jou als deel van de sessie.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg mb-2 md:mb-3" style={{ 
                color: '#4a5d22', 
                fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', 
                fontWeight: 600,
                lineHeight: '24pt',
                letterSpacing: '0'
              }}>
                Acutonics
              </h4>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Dit is een vorm van <strong>geluidstherapie met stemvorken</strong>. De trillingen werken via specifieke acupunctuurpunten en energiebanen en ondersteunen zowel energetisch, lichamelijk als emotioneel herstel.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg mb-2 md:mb-3" style={{ 
                color: '#4a5d22', 
                fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', 
                fontWeight: 600,
                lineHeight: '24pt',
                letterSpacing: '0'
              }}>
                LaStone therapie
              </h4>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Ik werk soms ook met <strong>warme en koude stenen</strong>. Basalt, marmer of andere mineralen kunnen op of onder je lichaam worden geplaatst om ontspanning te verdiepen. Vaak 'vragen' stenen er als het ware om deel te worden van de sessie; ik gebruik ze alleen wanneer dat klopt voor jou.
              </p>
            </div>
          </div>
        </div>

        {/* Rij 3: Kleding / sessies */}
        {/* Mobile: tekst gevolgd door afbeelding direct onder eerste blok */}
        <div className="md:hidden space-y-8 mb-24">
          <div>
            <h3 className="text-lg uppercase tracking-widest mb-3" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
              WAT DRAAG IK TIJDENS EEN SESSIE?
            </h3>
            <p className="text-sm font-light leading-relaxed mb-4" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
              <strong>Comfortabele kleren</strong> waarin je makkelijk beweegt. Je houdt je kleding aan; alleen je schoenen gaan uit. Een extra trui kan fijn zijn om na de sessie warm te blijven. Graag vraag ik je om geen parfum, deo of aftershave te gebruiken.
            </p>
          </div>

          <div className="relative w-full" style={{ aspectRatio: '504 / 378', maxWidth: '100%' }}>
            <Image
              src="/images/Cranio algemeen 2.jpg"
              alt="Cranio sacraal therapie - handen behandeling"
              width={504}
              height={378}
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
              quality={100}
              unoptimized
            />
          </div>

          <div>
            <h3 className="text-lg uppercase tracking-widest mb-3" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
              HOEVEEL SESSIES HEB IK NODIG?
            </h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
              Dat verschilt per persoon. Het aantal sessies hangt af van jouw vraag en wat je lichaam nodig heeft.
            </p>
          </div>
        </div>

        {/* Desktop/tablet: 2-koloms layout blijft */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 md:gap-36 items-start md:items-center mb-24 md:mb-40">
          <div className="space-y-8 md:space-y-20">
            <div>
              <h3 className="text-lg md:text-xl uppercase tracking-widest mb-3 md:mb-4" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
                WAT DRAAG IK TIJDENS EEN SESSIE?
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                <strong>Comfortabele kleren</strong> waarin je makkelijk beweegt. Je houdt je kleding aan; alleen je schoenen gaan uit. Een extra trui kan fijn zijn om na de sessie warm te blijven. Graag vraag ik je om geen parfum, deo of aftershave te gebruiken.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl uppercase tracking-widest mb-3 md:mb-4" style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}>
                HOEVEEL SESSIES HEB IK NODIG?
              </h3>
              <p className="text-sm md:text-base font-light leading-relaxed" style={{ color: '#4a5c21', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
                Dat verschilt per persoon. Het aantal sessies hangt af van jouw vraag en wat je lichaam nodig heeft.
              </p>
            </div>
          </div>

          <div className="relative w-full mb-0" style={{ aspectRatio: '504 / 378', maxWidth: '100%', width: '100%' }}>
            <Image
              src="/images/Cranio algemeen 2.jpg"
              alt="Cranio sacraal therapie - handen behandeling"
              width={504}
              height={378}
              className="object-cover"
              style={{ width: '100%', height: '100%' }}
              quality={100}
              unoptimized
            />
          </div>
        </div>

        {/* Closing Text */}
        <p 
          className="font-sans text-2xl md:text-3xl lg:text-4xl italic text-center max-w-5xl mx-auto leading-relaxed mt-32 md:mt-48 mb-16" 
          style={{ 
            fontWeight: 50, 
            fontFamily: 'Mundial, sans-serif',
            color: '#4a5d22'
          }}
        >
          Elke persoon en elk lichaam is anders.<br />
          Als je nog vragen hebt, vertel ik je graag<br />
          wat Cranio voor jou kan betekenen.
        </p>
      </div>

      {/* Pijl naar volgende sectie - buiten container */}
      <div className="flex justify-center mt-32 md:mt-40 mb-4 md:mb-8">
        <a href="#praktisch" className="inline-block animate-bounce-slow">
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
