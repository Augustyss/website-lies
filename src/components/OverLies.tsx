import Image from 'next/image'

export default function OverLies() {
  return (
    <section id="over-lies" className="py-16 md:py-32 px-6 md:px-16 lg:px-24 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative">
        {/* Decorative Pentagon - Using original SVG - VERBORGEN OP MOBILE - gepositioneerd binnen container */}
        <div className="hidden md:block absolute pointer-events-none" style={{ 
          zIndex: 5,
          left: '50%',
          top: '48%',
          transform: 'translate(-50%, -50%)',
          width: '760px',
          height: '760px'
        }}>
          <svg
            width="760"
            height="760"
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
        <div className="grid md:grid-cols-2 gap-8 md:gap-40 items-center">
          {/* Linker Kolom: Afbeelding - Responsive voor mobile */}
          <div className="relative mx-auto md:mx-0" style={{ zIndex: 1, width: '100%', maxWidth: '432px', aspectRatio: '432 / 504' }}>
            <Image
              src="/images/Lies_Praktijk_1_dec_2024-1.jpg"
              alt="Lies Christiaens behandelt cliënt"
              width={432}
              height={504}
              className="object-cover w-full h-full"
              quality={100}
              unoptimized
            />
          </div>

          {/* Rechter Kolom: Tekst Content */}
          <div className="space-y-4 md:space-y-6 relative mt-8 md:mt-0" style={{ zIndex: 10 }}>
            {/* Titel */}
            <h2 className="font-sans text-4xl md:text-5xl" style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}>
              Cranio bij Lies
            </h2>

            {/* Paragraaf 1 */}
            <p className="leading-relaxed font-light" style={{ color: '#485d23' }}>
              Met een passie voor <strong>welzijn</strong> op fysiek, mentaal, emotioneel en energetisch niveau begeleid ik je graag in je zoektocht naar meer rust en evenwicht. Mijn eigen weg naar <strong>innerlijke eenheid</strong> bracht me langs verschillende opleidingen en ervaringen, en heeft me gemaakt tot wie ik vandaag ben.
            </p>

            {/* Paragraaf 2 - Opleidingen */}
            <p className="leading-relaxed font-light" style={{ color: '#485d23' }}>
              Ik startte als Kinesist met specialisatie in de bekkenbodem en in 2013 behaalde ik mijn diploma als <span style={{ textDecoration: 'underline' }}>craniosacraaltherapeut</span> aan het <a href="https://www.upledger.com" target="_blank" rel="noopener noreferrer" style={{ color: '#485d23', textDecoration: 'underline' }}>Upledger</a> Instituut België. Daarna trok ik naar Engeland om me verder te verdiepen in het volledige curriculum, met onder meer The Brain Speaks, Touching the Brain, Pediatrics, Sensory Integration, Beyond the Cranial Base, Cycle of Life en Conception, Pregnancy and Birth. Ik liep er stage bij collega-therapeuten, assisteerde tijdens opleidingen en werd opgeleid tot mentor.
            </p>

            {/* Paragraaf 3 */}
            <p className="leading-relaxed font-light" style={{ color: '#485d23' }}>
              Met een groot <strong>hart voor mensen</strong> ga ik graag samen met jou op zoek naar wat jouw lichaam en systeem nodig hebben om opnieuw ruimte, rust en verbinding te vinden.
            </p>

            {/* Sign-off */}
            <div className="mt-8 pt-4">
              <p className="font-light" style={{ color: '#485d23' }}>Hartelijks,</p>
              <p className="font-light" style={{ color: '#485d23' }}>Lies Christiaens</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pijl naar quote eronder - buiten container om pentagon positie niet te beïnvloeden */}
      <div className="flex justify-center mt-24 md:mt-32 relative" style={{ zIndex: 10 }}>
        <a href="#quote-jung" className="inline-block animate-bounce-slow">
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
