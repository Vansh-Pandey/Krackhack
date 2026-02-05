import React from "react"
import { Award, Zap, Heart } from "lucide-react"

// Sample sponsor data - replace with actual logos and URLs
const sponsors = {
  title: [
    { name: "Google", logo: "/sponsors/google.png", url: "https://google.com", tier: "Title" },
    { name: "Microsoft", logo: "/sponsors/microsoft.png", url: "https://microsoft.com", tier: "Title" }
  ],
  platinum: [
    { name: "Amazon", logo: "/sponsors/amazon.png", url: "https://amazon.com", tier: "Platinum" },
    { name: "Meta", logo: "/sponsors/meta.png", url: "https://meta.com", tier: "Platinum" },
    { name: "Apple", logo: "/sponsors/apple.png", url: "https://apple.com", tier: "Platinum" }
  ],
  gold: [
    { name: "GitHub", logo: "/sponsors/github.png", url: "https://github.com", tier: "Gold" },
    { name: "Vercel", logo: "/sponsors/vercel.png", url: "https://vercel.com", tier: "Gold" },
    { name: "MongoDB", logo: "/sponsors/mongodb.png", url: "https://mongodb.com", tier: "Gold" },
    { name: "AWS", logo: "/sponsors/aws.png", url: "https://aws.com", tier: "Gold" }
  ]
}

const SponsorCard = ({ sponsor, size = "medium" }) => {
  const sizeClasses = {
    large: "h-48",
    medium: "h-32",
    small: "h-24"
  }

  return (
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        cursor-target
        group
        relative
        bg-white
        border-4 border-black
        p-8
        ${sizeClasses[size]}
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-300
        hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-0.75 hover:translate-y-0.75
        flex items-center justify-center
      `}
    >
      {/* Placeholder for logo - replace with actual image */}
      <div className="text-center">
        <div 
          className="
            font-bold text-2xl mb-2
            transition-colors duration-300
            group-hover:text-[#4285F4]
          "
          style={{ fontFamily: "BlueWinter" }}
        >
          {sponsor.name}
        </div>
        <div className="text-sm text-gray-500 uppercase tracking-wider">
          {sponsor.tier} Sponsor
        </div>
      </div>

      {/* Hover overlay */}
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

        {/* TITLE SPONSORS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-[#EA4335]" strokeWidth={2.5} />
            <h3 
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Title Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sponsors.title.map((sponsor, index) => (
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

        {/* PLATINUM SPONSORS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-[#4285F4]" strokeWidth={2.5} />
            <h3 
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Platinum Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} size="medium" />
              </div>
            ))}
          </div>
        </div>

        {/* GOLD SPONSORS */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-[#FBBC05]" strokeWidth={2.5} />
            <h3 
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: "BlueWinter" }}
            >
              Gold Sponsors
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <SponsorCard sponsor={sponsor} size="small" />
              </div>
            ))}
          </div>
        </div>

        {/* BECOME A SPONSOR CTA */}
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