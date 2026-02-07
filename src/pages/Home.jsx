import Hero from "../components/home/Hero.jsx"
import About from "../components/home/About.jsx"
import PhotoGallery from "../components/home/PhotoGallery.jsx"
import ParticipationGuidelines from "../components/home/ParticipationGuidelines.jsx"
import Rulebook from "../components/home/RuleBook.jsx"
import PartnersSponsors from "../components/home/PartnersSponsors.jsx" 
import Domains from "../components/home/Domain.jsx"
import Judging from "../components/home/Judging.jsx"
import Timeline from "../components/home/Timeline.jsx"
import FAQs from "../components/home/Faqs.jsx"
import POCs from "../components/home/POCs.jsx"
import Footer from "../components/home/Footer.jsx"
import Hotbar from "../components/home/Hotbar.jsx"

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "../components/ui/scroll-based-velocity"

const BorderStrip = ({ children }) => (
  <div
    className="
      bg-white
      border-y-4 border-black
      my-10
      overflow-hidden
    "
  >
    {children}
  </div>
)


const Home = () => {
  return (
    <>
      <Hotbar />
      
      <div id="hero">
        <Hero />
      </div>
 
      <BorderStrip>
        <ScrollVelocityContainer className="py-5">
          <ScrollVelocityRow
            baseVelocity={18}
            direction={1}
            className="text-3xl md:text-6xl font-bluewinter  font-bold tracking-widest text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            BUILD • BREAK • REPEAT • BUILD • BREAK • REPEAT •
          </ScrollVelocityRow>

          <ScrollVelocityRow
            baseVelocity={18}
            direction={-1}
            className="text-3xl md:text-6xl font-bluewinter  font-bold tracking-widest text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            CODE ALL NIGHT • SHIP BY MORNING • CODE ALL NIGHT •
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </BorderStrip>

      <div id="about">
        <About />
      </div>
 
      <BorderStrip>
        <ScrollVelocityContainer className="py-5">
          <ScrollVelocityRow
            baseVelocity={22}
            direction={1}
            className="text-2xl md:text-5xl font-bluewinter  font-bold tracking-wide text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            IDEAS → PROTOTYPES → PRODUCTS → IDEAS → PROTOTYPES →
          </ScrollVelocityRow>

          <ScrollVelocityRow
            baseVelocity={22}
            direction={-1}
            className="text-2xl md:text-5xl font-bluewinter  font-bold tracking-wide text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            THINK FAST • FAIL FASTER • LEARN FASTEST •
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </BorderStrip>

      <div id="domains">
        <Domains />
      </div>
      
      <BorderStrip>
        <ScrollVelocityContainer className="py-5">
          <ScrollVelocityRow
            baseVelocity={22}
            direction={1}
            className="text-2xl md:text-5xl font-bluewinter  font-bold tracking-wide text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            •PARTICIPATE TO BECOME COOL•
          </ScrollVelocityRow>
 
        </ScrollVelocityContainer>
      </BorderStrip>
      
      <div id="timeline">
        <Timeline />
      </div>

      <div id="guidelines">
        <ParticipationGuidelines />
      </div>

      <Rulebook />

      <div id="judging">
        <Judging />
      </div>

      <div id="gallery">
        <PhotoGallery />
      </div>
 
      <BorderStrip>
        <ScrollVelocityContainer className="py-6">
          <ScrollVelocityRow
            baseVelocity={26}
            direction={1}
            className="text-4xl md:text-7xl font-bluewinter  font-extrabold tracking-[0.2em] text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            KRACKHACK IS NOT AN EVENT — IT&apos;S A MINDSET —
          </ScrollVelocityRow>

          <ScrollVelocityRow
            baseVelocity={26}
            direction={-1}
            className="text-4xl md:text-7xl font-bluewinter  font-extrabold tracking-[0.2em] text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            DREAM • BUILD • DEPLOY • DOMINATE •
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </BorderStrip>

      <PartnersSponsors />

      <div id="faqs">
        <FAQs />
      </div>

      <div id="pocs">
        <POCs />
      </div>
 
 
      <BorderStrip>
        <ScrollVelocityContainer className="py-5">
          <ScrollVelocityRow
            baseVelocity={20}
            direction={1}
            className="text-3xl md:text-6xl font-bluewinter  font-bold tracking-widest text-black"
            style={{ fontFamily: "BlueWinter" }}

          >
            SEE YOU AT KRACKHACK • LET&apos;S BUILD SOMETHING AMAZING •
          </ScrollVelocityRow>
        </ScrollVelocityContainer>
      </BorderStrip>

      <Footer />
    </>
  )
}

export default Home