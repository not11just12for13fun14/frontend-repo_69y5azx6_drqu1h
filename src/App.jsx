import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoWeAre from './components/WhoWeAre'
import MissionVision from './components/MissionVision'
import CoreValues from './components/CoreValues'
import Services from './components/Services'
import DigitalStrategy from './components/DigitalStrategy'
import CaseStudies from './components/CaseStudies'
import ContentStrategy from './components/ContentStrategy'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <MissionVision />
        <CoreValues />
        <Services />
        <DigitalStrategy />
        <CaseStudies />
        <ContentStrategy />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
