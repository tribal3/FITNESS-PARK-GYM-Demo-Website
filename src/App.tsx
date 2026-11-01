import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Experiences from './components/Experiences'
import Training from './components/Training'
import Gallery from './components/Gallery'
import WhyUs from './components/WhyUs'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useLanguage } from './lib/i18n'

export default function App() {
  const { lang } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'ar' ? 'تجاوز إلى المحتوى' : 'Skip to content'}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Experiences />
        <Training />
        <Gallery />
        <WhyUs />
        <Hours />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
