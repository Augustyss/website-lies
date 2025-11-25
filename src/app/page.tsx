import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import OverLies from '@/components/OverLies'
import QuoteBanner from '@/components/QuoteBanner'
import OverCranio from '@/components/OverCranio'
import VoorWie from '@/components/VoorWie'
import VoorWat from '@/components/VoorWat'
import Vragen from '@/components/Vragen'
import Praktisch from '@/components/Praktisch'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <OverLies />
      <QuoteBanner 
        text="Who looks inside awakens" 
        author="CARL GUSTAV JUNG"
        backgroundImage="/images/Golf.jpg"
      />
      <OverCranio />
      <VoorWie />
      <QuoteBanner 
        text="We cannot heal what we cannot feel" 
        author="JOHN BRADSHAW"
        backgroundImage="/images/Waterval.jpg"
      />
      <VoorWat />
      <QuoteBanner 
        text="The body says what words cannot" 
        author="MARTHA GRAHAM"
        backgroundImage="/images/quote3.jpg"
      />
      <Vragen />
      <Praktisch />
    </main>
  )
}

