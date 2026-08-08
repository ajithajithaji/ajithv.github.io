import About from '../components/About'
import Cases from '../components/Cases'
import Contact from '../components/Contact'
import Credentials from '../components/Credentials'
import Experience from '../components/Experience'
import Hero from '../components/Hero'
import Integrations from '../components/Integrations'
import Projects from '../components/Projects'
import Services from '../components/Services'
import Stack from '../components/Stack'
import Ticker from '../components/Ticker'
import Tools from '../components/Tools'
import Writing from '../components/Writing'

export default function Home({ ready }) {
  return (
    <>
      <Hero start={ready} />
      <Ticker />
      <About />
      <Experience />
      <Projects />
      <Cases />
      <Services />
      <Stack />
      <Tools />
      <Integrations />
      <Writing />
      <Credentials />
      <Contact />
    </>
  )
}
