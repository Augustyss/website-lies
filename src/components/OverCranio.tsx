import Image from 'next/image'

export default function OverCranio() {
  return (
    <section id="over-cranio" className="w-full bg-white py-24">
      <div className="container mx-auto max-w-4xl px-6 md:px-16 lg:px-24">
        <div className="flex flex-col items-center text-center">
          {/* A. Hoofdtitel */}
          <h2 
            className="font-sans text-5xl md:text-6xl mb-6"
            style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}
          >
            Wat is Cranio?
          </h2>

          {/* B. Subtitel (Quote regel) */}
          <p 
            className="italic text-lg mb-8"
            style={{ 
              color: '#4b5d22',
              fontFamily: 'Mundial-Light, Mundial, sans-serif',
              fontWeight: 300
            }}
          >
            — Cranio Sacraal Therapie vanuit de visie van <span className="font-bold">Dr. John Upledger</span>
          </p>

          {/* C. De Paragraaf */}
          <p 
            className="text-lg leading-relaxed text-center mb-16 max-w-4xl"
            style={{ 
              color: '#4b5d22', 
              lineHeight: '1.8',
              fontFamily: 'Mundial-Light, Mundial, sans-serif',
              fontWeight: 300
            }}
          >
            Cranio Sacraal Therapie is een zachte vorm van lichaamswerk die het zelfherstellende vermogen van je lichaam ondersteunt. Met subtiele aanraking breng ik je zenuwstelsel tot rust, en zo maak je ruimte voor een diepere balans. Pijn en spanning en andere klachten verzachten, je ervaart meer ruimte en rust in jezelf. Je kan ademen.
          </p>

          {/* D. Het Logo (DIPLOMATE tekst zit al in de jpg) */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-44 md:h-44 mx-auto">
              <Image 
                src="/images/upledger-logo.jpg" 
                alt="Upledger Institute CST-I Certified Diplomate Logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
