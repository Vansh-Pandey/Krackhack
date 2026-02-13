import React from "react"
import { Award, Zap, Heart } from "lucide-react"

// Sample sponsor data - replace with actual logos and URLs
const sponsors = {
  gold: [
    { name: "Duality", logo: "/sponsors/duality.png", url: "#", tier: "Gold" }
  ],
  silver: [
    { name: "Insights", logo: "/sponsors/insights.jpeg", url: "#", tier: "Silver" }
  ],

  associate: [
    { name: "Smolify AI", logo: "/sponsors/smolify.png", url: "#", tier: "Associate" }
  ],
  blockchain: [
    { name: "Hela", logo: "/sponsors/hela.jpeg", url: "#", tier: "Blockchain Track Sponsor" }
  ],

  inkind: [
    { name: "Featherless.ai", logo: "/sponsors/featherlessai.png", url: "#", tier: "InKind" },
    { name: "Give My Certificates", logo: "/sponsors/givemycertificates.png", url: "#", tier: "InKind" },
    { name: ".xyz", logo: "/sponsors/xyz.png", url: "#", tier: "InKind" },
    { name: "n8n", logo: "/sponsors/n8n.png", url: "#", tier: "InKind" }
  ],
  platform: [
    { name: "DoraHacks", logo: "/sponsors/dorahacks.png", url: "#", tier: "Platform" }
  ],
  community: [
    { name: "GDG VU", logo: "/sponsors/gdg_vu.jpeg", url: "#", tier: "Community Partner" },

    { name: "Bhopal DAO", logo: "/sponsors/bhopal_dao.jpeg", url: "#", tier: "Community Partner" },

    { name: "GDG LDCE", logo: "/sponsors/gdg_ldce.jpeg", url: "#", tier: "Community Partner" },

    { name: "Girl Leading", logo: "/sponsors/girl_leading.jpeg", url: "#", tier: "Community Partner" },

    { name: "GDG UPES", logo: "/sponsors/gdg_upes.jpeg", url: "#", tier: "Community Partner" }
  ]
}


const SponsorCard = ({ sponsor }) => {
  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        cursor-target
        group
        relative
        bg-white
        border-4 border-black
        p-6 sm:p-8
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-300
        hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-0.75 hover:translate-y-0.75

        flex items-center justify-center
 
        h-auto min-h-30
      "
    >
      <div className="
        w-full
        flex items-center justify-center
      ">
        <img
          src={sponsor.logo}
          alt={sponsor.name}

          className="
            w-auto
            h-auto

            max-h-40        
            max-w-[95%]

            object-contain

            transition-transform duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* soft hover tint */}
      <div className="
        absolute inset-0
        bg-linear-to-br from-[#EA4335]/0 to-[#4285F4]/0
        group-hover:from-[#EA4335]/5 group-hover:to-[#4285F4]/5
        transition-all duration-300
        pointer-events-none
      " />
    </a>
  )
}



const PartnersSponsors = () => {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">P</span>
            <span className="text-[#4285F4]">a</span>
            <span className="text-[#FBBC05]">r</span>
            <span className="text-[#34A853]">t</span>
            <span className="text-[#EA4335]">n</span>
            <span className="text-[#4285F4]">e</span>
            <span className="text-[#FBBC05]">r</span>
            <span className="text-[#34A853]">s</span>
            {" & "}
            <span className="text-[#EA4335]">S</span>
            <span className="text-[#4285F4]">p</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">n</span>
            <span className="text-[#EA4335]">s</span>
            <span className="text-[#4285F4]">o</span>
            <span className="text-[#FBBC05]">r</span>
            <span className="text-[#34A853]">s</span>
          </h2>
        </div>

        {/* SILVER SPONSOR */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#EA4335]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Gold Sponsor
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} size="large" />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#EA4335]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Silver Sponsor
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} size="large" />
              </div>
            ))}
          </div>
        </div>

        {/* ASSOCIATE SPONSOR */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#4285F4]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              GenAI Track Sponsor
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.associate.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#4285F4]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              BlockChain Track Sponsor
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.blockchain.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#4285F4]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Platform Sponsor
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.platform.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#4285F4]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              InKind Sponsor
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.inkind.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#4285F4]" strokeWidth={2.5} />
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Community Partners
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.community.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="
            cursor-target
            bg-white
            border-4 border-black
            p-8 sm:p-12
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            text-center
            transition-all duration-300
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-1 hover:translate-y-1
          "
        >
          <h3
            className="font-bold text-2xl sm:text-3xl mb-4"
            style={{ fontFamily: "BlueWinter" }}
          >
            Interested in Sponsoring?
          </h3>
          <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
            Join us in supporting the next generation of innovators and help make KrackHack an unforgettable experience!
          </p>
          <a
            href="https://www.linkedin.com/company/google-developer-groups-iit-mandi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="
      cursor-target
      px-8 sm:px-12
      py-4 sm:py-5
      bg-white
      border-4 border-[#34A853]
      text-[#34A853]
      font-bold
      text-lg sm:text-xl
      shadow-[6px_6px_0px_0px_#34A853]
      hover:shadow-[3px_3px_0px_0px_#34A853]
      hover:translate-x-1 hover:translate-y-1
      transition-all duration-200
      active:shadow-none
    "
              style={{ fontFamily: "BlueWinter" }}
            >
              BECOME A SPONSOR
            </button>
          </a>

        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  )
}

export default PartnersSponsors
