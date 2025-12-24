import Image from 'next/image'

export default function VoorWie() {
  return (
    <section id="voor-wie" className="py-20 px-6 md:px-16 lg:px-24 bg-white relative overflow-visible">
      <div className="container mx-auto max-w-6xl relative">
        {/* Decorative Pentagon - Omgekeerd (punt naar beneden) - boven de titel, voor afbeeldingen, achter tekst */}
        <div className="hidden md:block absolute pointer-events-none" style={{ 
          zIndex: 5,
          left: '50%',
          top: '-8%',
          transform: 'translate(-50%, 0) rotate(180deg)',
          width: '720px',
          height: '720px'
        }}>
          <svg
            width="720"
            height="720"
            viewBox="0 0 1080 1080"
            style={{ width: '100%', height: '100%' }}
          >
            <polygon
              points="540 39.26 13.49 421.79 214.6 1040.74 865.4 1040.74 1066.51 421.79 540 39.26"
              fill="none"
              stroke="#ecf0dc"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Sectie A: Header */}
        <h2 className="font-sans text-4xl md:text-5xl text-center mb-8 relative" style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400, zIndex: 15 }}>
          Voor wie is Cranio?
        </h2>
        
        <p className="leading-relaxed text-center max-w-3xl mx-auto mb-16 text-lg font-light relative" style={{ color: '#4b5d22', zIndex: 15 }}>
          Cranio Sacraal Therapie is geschikt <strong className="font-semibold">voor alle leeftijden</strong> en ondersteunt in uiteenlopende situaties. Omdat de behandeling het zenuwstelsel tot rust brengt en het zelfherstellende vermogen activeert, werkt ze zowel lichamelijk als emotioneel.
        </p>

        {/* Sectie B: Afbeeldingen Grid (3 Kolommen) - links en rechts voor pentagon, midden achter */}
        <div className="relative mb-8">
          {/* Mobile/Tablet: Stack alle drie foto's verticaal */}
          <div className="flex flex-col lg:hidden gap-6 items-center">
            <div className="relative h-[300px] w-full max-w-[275px] overflow-hidden">
              <Image
                src="/images/Praktijk_Lies_feb_2016-5_links 2.jpg"
                alt="Cranio therapie praktijk"
                fill
                className="object-cover"
                quality={100}
                unoptimized
              />
            </div>
            <div className="relative h-[300px] w-full max-w-[260px] overflow-hidden">
              <Image
                src="/images/Lies_Praktijk_1_dec_2024-29_Jongeren.jpg"
                alt="Cranio therapie voor kinderen en jongeren"
                fill
                className="object-cover"
                quality={100}
                unoptimized
              />
            </div>
            <div className="relative h-[300px] w-full max-w-[260px] overflow-hidden">
              <Image
                src="/images/Praktijk_Lies_feb_2016-13_rechts 2.jpg"
                alt="Cranio therapie praktijk"
                fill
                className="object-cover"
                quality={100}
                unoptimized
              />
            </div>
          </div>

          {/* Desktop: Originele layout met z-index layering */}
          <div className="hidden lg:block relative">
            {/* Midden foto - ACHTER pentagon (z-index 1) */}
            <div className="flex justify-center relative" style={{ zIndex: 1 }}>
              <div className="relative h-[300px] w-full max-w-[260px] overflow-hidden">
                <Image
                  src="/images/Lies_Praktijk_1_dec_2024-29_Jongeren.jpg"
                  alt="Cranio therapie voor kinderen en jongeren"
                  fill
                  className="object-cover"
                  quality={100}
                  unoptimized
                />
              </div>
            </div>

            {/* Links en rechts foto's - VOOR pentagon (z-index 20) */}
            <div className="grid grid-cols-3 gap-6 absolute top-0 left-0 w-full" style={{ zIndex: 20 }}>
              {/* Kolom 1 (Links) - Afbeelding - voor pentagon */}
              <div className="flex justify-center relative">
                <div className="relative h-[300px] w-full max-w-[275px] overflow-hidden">
                  <Image
                    src="/images/Praktijk_Lies_feb_2016-5_links 2.jpg"
                    alt="Cranio therapie praktijk"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>

              {/* Kolom 2 (Midden) - Lege placeholder om grid layout te behouden */}
              <div className="flex justify-center relative">
                <div className="relative h-[300px] w-full max-w-[260px]"></div>
              </div>

              {/* Kolom 3 (Rechts) - Afbeelding - voor pentagon */}
              <div className="flex justify-center relative">
                <div className="relative h-[300px] w-full max-w-[260px] overflow-hidden">
                  <Image
                    src="/images/Praktijk_Lies_feb_2016-13_rechts 2.jpg"
                    alt="Cranio therapie praktijk"
                    fill
                    className="object-cover"
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectie C: Tekst Grid (2 Kolommen onder de buitenste afbeeldingen) */}
        <div className="grid md:grid-cols-2 gap-24 mb-16 relative" style={{ zIndex: 15, marginTop: '40px', maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          {/* Links - onder linker afbeelding */}
          <div className="space-y-4 text-center">
            <h3 className="font-sans text-xl font-normal uppercase tracking-wider" style={{ color: '#a0b44f' }}>
              VOOR PASGEBORENEN
            </h3>
            <p className="leading-relaxed text-sm font-light whitespace-normal md:whitespace-pre-line" style={{ color: '#4a5d24' }}>
              De geboorte is een intense gebeurtenis, zeker bij een keizersnede, vacuüm, forceps of een moeilijke start.{'\n'}
              Hierdoor kan spanning ontstaan in het lichaam van je baby, met onrust, veel huilen, slaapproblemen of drinkmoeilijkheden tot gevolg.{'\n'}
              Cranio kan ondersteunen bij o.a. eenzijdige nekspanning, een verminderde zuigreflex, reflux- en darmproblemen of uitdagingen bij borstvoeding.{'\n'}
              Veel ouders ervaren dat hun baby na een sessie dieper ontspant en rustiger wordt.{'\n'}
              De behandeling verloopt helemaal op het tempo <strong>van het kindje</strong>, in een warme en veilige omgeving.
            </p>
          </div>

          {/* Rechts - onder rechter afbeelding */}
          <div className="space-y-4 text-center">
            <h3 className="font-sans text-xl font-normal uppercase tracking-wider" style={{ color: '#a0b44f' }}>
              VOOR KINDEREN EN JONGEREN
            </h3>
            <p className="leading-relaxed text-sm font-light whitespace-normal md:whitespace-pre-line" style={{ color: '#4a5d24' }}>
              Veel kinderen leven vooral 'in hun hoofd' door prikkels, verwachtingen en schermgebruik.{'\n'}
              Cranio helpt hen <strong>opnieuw verbinding te maken met hun lichaam en hun eigen noden.</strong>{'\n'}
              De therapie kan ondersteunen bij o.a. angst, bedplassen, hoofdpijn, buikpijn, somberheid, slaapproblemen, overprikkeling, sterke emoties en concentratieproblemen.{'\n'}
              Voor hoogsensitieve kinderen en tieners voelt Cranio vaak als een zachte thuisbasis waar ze meer adem en ruimte vinden.{'\n'}
              Ouders blijven meestal bij de sessie aanwezig. Bij tieners bespreken we samen wat fijn en passend aanvoelt.
            </p>
          </div>
        </div>

        {/* Sectie D: Footer Tekst (Gecentreerd) */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative" style={{ zIndex: 15 }}>
          <h3 className="font-sans text-xl font-normal uppercase tracking-wider mb-4" style={{ color: '#a0b44f' }}>
            VOOR OUDEREN
          </h3>
          <p className="leading-relaxed font-light whitespace-normal md:whitespace-pre-line" style={{ color: '#4a5d24' }}>
            Met het ouder worden verandert zowel het lichaam als de manier waarop je jezelf voelt en beweegt.{'\n'}
            Cranio biedt zachte ondersteuning bij thema's zoals spanning, rouw, verminderde veerkracht, zingeving en het kwijtgeraakte vertrouwen in eigen lichaam.{'\n'}
            Het helpt om opnieuw <strong>rust, ruimte en ontspanning</strong> te ervaren.
          </p>
        </div>

        {/* Closing Text */}
        <p 
          className="font-sans text-2xl md:text-3xl lg:text-4xl italic text-center max-w-5xl mx-auto leading-relaxed mt-32 mb-16 relative whitespace-pre-line" 
          style={{ 
            fontWeight: 50, 
            fontFamily: 'Mundial, sans-serif',
            color: '#4a5d22',
            zIndex: 15
          }}
        >
          Als je twijfelt of Cranio iets voor jou, je kind{'\n'}of je baby kan betekenen, mag je me altijd{'\n'}contacteren. Ik denk graag met je mee.
        </p>

        {/* Pijl naar quote eronder */}
        <div className="flex justify-center mb-16 relative" style={{ zIndex: 15 }}>
          <a href="#quote-bradshaw" className="inline-block animate-bounce-slow">
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
      </div>
    </section>
  )
}

