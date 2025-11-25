import Image from 'next/image'

interface CardProps {
  title: string
  text: string
}

function Card({ title, text }: CardProps) {
  return (
    <div className="relative bg-white rounded-[30px] p-6 md:p-8 text-center flex flex-col" style={{ 
      border: '1px solid #a0b450',
      height: '190px'
    }}>
      {/* Icon Badge - SVG positioned zodat zijpunten op bovenrand staan */}
      <div className="absolute left-1/2 -translate-x-1/2" style={{ top: '-24px', zIndex: 10 }}>
        <Image
          src="/images/vinkje.svg"
          alt=""
          width={40}
          height={40}
          unoptimized
        />
      </div>

      {/* Card Content */}
      <div className="pt-2 flex-grow flex flex-col">
        <h3 className="text-xl uppercase tracking-widest mb-3" style={{ 
          color: '#a0b551',
          fontFamily: 'Mundial-DemiBold, Mundial, sans-serif',
          fontWeight: 600
        }}>
          {title}
        </h3>
        <p className="leading-relaxed font-light" style={{ color: '#4a5c21' }}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default function VoorWat() {
  const cards = [
    {
      title: 'STRESS EN SPANNING',
      text: 'Bij aanhoudende stress kan je systeem overbelast raken. Cranio helpt je te vertragen, spanning los te laten en meer innerlijke rust te ervaren.',
    },
    {
      title: 'PIJNKLACHTEN',
      text: 'Hoofdpijn, migraine, nek- en rugpijn, whiplash, spijsverteringsklachten of chronische spierpijn: door subtiele aanrakingen krijgt het lichaam opnieuw bewegingsvrijheid en ontspanning.',
    },
    {
      title: 'OVERPRIKKELING EN BURN-OUT',
      text: "Wanneer prikkels te veel worden, kan je het gevoel hebben 'vast' te zitten. Cranio ondersteunt je in diepe ontspanning en helpt je energiereserves op te bouwen.",
    },
    {
      title: 'EMOTIONELE BELASTING',
      text: 'Onverwerkte emoties kunnen zich fysiek vastzetten. Tijdens een sessie ontstaat ruimte om spanning te verzachten en emoties op een zachte manier te doorvoelen.',
    },
    {
      title: 'HERSTEL NA TRAUMA',
      text: 'Na een ongeval, operatie of emotionele gebeurtenis kan je lichaam in een verhoogde staat van alertheid blijven. Cranio helpt dit overlevingsmechanisme af te bouwen zodat herstel mogelijk wordt.',
    },
    {
      title: 'PERSOONLIJKE GROEI',
      text: 'Cranio kan je helpen dichter bij jezelf te komen, te luisteren naar je lichaam en keuzes te maken die je welzijn versterken.',
    },
  ]

  return (
    <section id="voor-wat" className="py-20 px-6 md:px-16 lg:px-24 bg-white relative">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <h2 className="font-sans text-4xl md:text-5xl text-center mb-8" style={{ color: '#4a5d23', fontFamily: 'Mundial-Regular, Mundial, sans-serif', fontWeight: 400 }}>
          Waarvoor kan Cranio helpen?
        </h2>

        <div className="max-w-[700px] mx-auto text-center mb-16 space-y-4">
          <p className="leading-relaxed font-light" style={{ color: '#4a5c21' }}>
            Cranio Sacraal Therapie kan op veel momenten in je leven steun bieden. Omdat de behandeling het zenuwstelsel tot rust brengt en je lichaam uitnodigt om spanning los te laten, werkt ze zowel lichamelijk als emotioneel.
          </p>
          <p className="leading-relaxed font-light mb-8" style={{ color: '#4a5c21' }}>
            Hieronder een overzicht van thema's waarbij Cranio vaak verlichting brengt:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 mb-16 pt-8 items-stretch">
          {cards.map((card) => (
            <Card key={card.title} title={card.title} text={card.text} />
          ))}
        </div>

        {/* Footer Text */}
        <p 
          className="font-sans text-2xl md:text-3xl lg:text-4xl italic text-center max-w-2xl mx-auto leading-relaxed mt-32 mb-16 whitespace-pre-line" 
          style={{ 
            fontWeight: 50, 
            fontFamily: 'Mundial, sans-serif',
            color: '#4a5d22'
          }}
        >
          Ik kijk samen met jou wat{'\n'}jouw lichaam nodig heeft.
        </p>

        {/* Pijl naar quote eronder */}
        <div className="flex justify-center mb-16">
          <a href="#quote-graham" className="inline-block animate-bounce-slow">
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
