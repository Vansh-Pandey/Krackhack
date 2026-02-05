import React from "react"
import Hero from "../components/home/Hero"
import About from "../components/home/About"
import PhotoGallery from "../components/home/PhotoGallery"
import ParticipationGuidelines from "../components/home/ParticipationGuidelines"
import Rulebook from "../components/home/Rulebook"
import PartnersSponsors from "../components/home/PartnersSponsors" 
import Domains from "../components/home/Domain"
import Judging from "../components/home/Judging"
import Timeline from "../components/home/Timeline"
import FAQs from "../components/home/Faqs"
import POCs from "../components/home/POCs"
import Footer from "../components/home/Footer"

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
      <Hero />

      {/* SCROLL STRIP — 1 */}
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

      <About />

      {/* SCROLL STRIP — 2 */}
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

      <Domains />

      <Timeline />

      <ParticipationGuidelines />

      <Rulebook />

      <Judging />

      <PhotoGallery />

      {/* SCROLL STRIP — 3 */}
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

      <FAQs />

      <POCs />
 

      {/* FINAL SCROLL STRIP */}
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