import Image from 'next/image'

export default function YogaMeditatie() {
  return (
    <section id="yoga-meditatie" className="bg-bg-cream py-16 md:py-24 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-[5/6]">
            <Image
              src="/images/Yoga_Lies.jpg"
              alt="Lies tijdens een yogasessie"
              fill
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              quality={100}
              unoptimized
            />
          </div>

          <div className="max-w-xl">
            <p
              className="mb-3 text-sm uppercase tracking-[0.2em]"
              style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}
            >
              Tijd voor jezelf
            </p>
            <h2
              className="mb-8 text-4xl md:text-5xl"
              style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}
            >
              Yoga &amp; Meditatie
            </h2>

            <div className="space-y-8" style={{ color: '#4a5c24', fontFamily: 'Mundial-Light, Mundial, sans-serif' }}>
              <div className="space-y-4">
                <p className="text-xl italic leading-relaxed md:text-2xl" style={{ fontFamily: 'Mundial-HairItalic, Mundial, sans-serif', fontWeight: 100 }}>
                  Even vertragen, helemaal in het moment.
                </p>
                <p className="leading-relaxed">
                  In de drukte van elke dag vergeten we soms om stil te staan. Met yoga en meditatie nodig ik je uit om bewust te bewegen, spanning los te laten en opnieuw verbinding te maken met jezelf.
                </p>
              </div>

              <div>
                <h3
                  className="mb-2 text-lg uppercase tracking-widest"
                  style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}
                >
                  Groepslessen
                </h3>
                <p className="leading-relaxed">
                  In een kleine groep van maximum zes deelnemers bewegen we bewust en maken we ruimte voor rust. Je volgt de les op jouw tempo.
                </p>
                <p className="mt-3 leading-relaxed">Reeksen · €15 per les</p>
                <ul className="mt-4 space-y-1.5 leading-relaxed">
                  <li>Maandag 18:30 - 19:30</li>
                  <li>Dinsdag 08:00 - 09:00</li>
                  <li>Donderdag 08:30 - 09:30</li>
                </ul>
              </div>

              <div>
                <h3
                  className="mb-2 text-lg uppercase tracking-widest"
                  style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}
                >
                  Therapeutische yoga
                </h3>
                <p className="leading-relaxed">
                  Tijdens een privé- of duosessie is er ruimte voor persoonlijke begeleiding, afgestemd op jouw tempo en jouw vraag.
                </p>
                <p className="mt-3 leading-relaxed">€85 per les</p>
              </div>

              <div className="border-t pt-8" style={{ borderColor: '#a0b551' }}>
                <h3
                  className="mb-2 text-xl"
                  style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}
                >
                  Zin om tijd te maken voor jezelf?
                </h3>
                <p className="leading-relaxed">
                  Stuur me een berichtje. Ik vertel je graag meer over de lessen en mogelijkheden.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center border-b pb-1 transition-colors duration-200 hover:text-[#a0b551]"
                  style={{ borderColor: '#a0b551', color: '#4a5d23', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}
                >
                  Neem contact op
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
