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
              <div>
                <h3
                  className="mb-2 text-lg uppercase tracking-widest"
                  style={{ color: '#a0b551', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}
                >
                  Groepslessen
                </h3>
                <p className="leading-relaxed">Lessen met maximum 6 deelnemers in reeksen - €15 per les</p>
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
                  Privé of duo-sessie
                </h3>
                <p className="leading-relaxed">Therapeutisch yoga - €85 per les</p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center border-b pb-1 transition-colors duration-200 hover:text-[#a0b551]"
                style={{ borderColor: '#a0b551', color: '#4a5d23', fontFamily: 'Mundial-DemiBold, Mundial, sans-serif', fontWeight: 600 }}
              >
                Voor inlichtingen: gebruik het contactformulier
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
