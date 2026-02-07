import React from "react"
import { Globe, Smartphone, Link2, Sparkles, Brain, Shield, Calendar, AlertCircle } from "lucide-react"

const domains = [
  { 
    name: "Web Development", 
    icon: Globe, 
    color: "#EA4335",
    description: "Build responsive web applications and platforms"
  } ,
  { 
    name: "Blockchain", 
    icon: Link2, 
    color: "#FBBC05",
    description: "Develop decentralized applications and smart contracts"
  },
  { 
    name: "Generative AI", 
    icon: Sparkles, 
    color: "#34A853",
    description: "Build AI models that generate content and solutions"
  },
  { 
    name: "AI / Machine Learning", 
    icon: Brain, 
    color: "#EA4335",
    description: "Develop intelligent systems and predictive models"
  },
  { 
    name: "Cybersecurity", 
    icon: Shield, 
    color: "#4285F4",
    description: "Create security solutions and vulnerability tools"
  }
]

const Domains = () => {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide" 
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">C</span>
            <span className="text-[#4285F4]">h</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">s</span>
            <span className="text-[#4285F4]">e</span>
            {" "}
            <span className="text-[#FBBC05]">Y</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">u</span>
            <span className="text-[#4285F4]">r</span>
            {" "}
            <span className="text-[#FBBC05]">D</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">m</span>
            <span className="text-[#4285F4]">a</span>
            <span className="text-[#FBBC05]">i</span>
            <span className="text-[#34A853]">n</span>
          </h2>
        </div>

        {/* IMPORTANT NOTE */}
        <div 
          className="
            bg-[#FBBC05]
            border-4 border-black
            p-6
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            mb-12
          "
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        >
          <p className="text-black text-base sm:text-lg font-bold">
            <AlertCircle className="inline w-6 h-6 mr-2 mb-1" strokeWidth={2.5} />
            Choose one domain for your project. Domain-specific sponsors and special instructions will be announced separately.
          </p>
        </div>

        {/* DOMAIN CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {domains.map((domain, index) => {
            const Icon = domain.icon
            return (
              <div
                key={index}
                className="
                  cursor-target
                  group
                  bg-white
                  border-4 border-black
                  p-6
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                  transition-all duration-300
                  hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  hover:translate-x-0.75 hover:translate-y-0.75
                "
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* ICON */}
                <div 
                  className="
                    inline-flex items-center justify-center
                    w-16 h-16
                    border-4 border-black
                    bg-white
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    mb-4
                    transition-transform duration-300
                    group-hover:scale-110
                    group-hover:rotate-6
                  "
                  style={{ backgroundColor: domain.color }}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* TITLE */}
                <h3 
                  className="font-bold text-xl sm:text-2xl mb-2"
                  style={{ fontFamily: "BlueWinter", color: domain.color }}
                >
                  {domain.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {domain.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* PROBLEM STATEMENTS SECTION */}
        <div className="mb-12">
          <div 
            className="
              bg-white
              border-4 border-black
              p-8
              shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            "
          >
            <h3 
              className="font-bold text-2xl sm:text-3xl mb-6 flex items-center gap-3"
              style={{ fontFamily: "BlueWinter" }}
            >
              <Calendar className="w-8 h-8 text-[#EA4335]" strokeWidth={2.5} />
              Problem Statements Release
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* RELEASE DATE */}
              <div 
                className="
                  bg-white
                  border-4 border-[#4285F4]
                  p-6
                  shadow-[4px_4px_0px_0px_#4285F4]
                "
              >
                <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider">Release Date</p>
                <p 
                  className="text-3xl font-bold text-[#4285F4]"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  14 February
                </p>
                <p className="text-xl text-gray-700 mt-1">12:00 AM IST</p>
              </div>

              {/* STATUS */}
              <div 
                className="
                  bg-white
                  border-4 border-[#34A853]
                  p-6
                  shadow-[4px_4px_0px_0px_#34A853]
                "
              >
                <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider">Status</p>
                <p 
                  className="text-2xl font-bold text-[#34A853]"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  PS will be released officially
                </p>
                <p className="text-base text-gray-700 mt-2">Stay tuned for updates!</p>
              </div>
            </div>
          </div>
        </div>

        {/* RULES */}
        <div 
          className="
            bg-white
            border-4 border-black
            p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          "
        >
          <h3 
            className="font-bold text-2xl sm:text-3xl mb-6"
            style={{ fontFamily: "BlueWinter" }}
          >
            Important Rules
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-4 group">
              <div 
                className="
                  shrink-0
                  w-10 h-10
                  flex items-center justify-center
                  bg-[#EA4335]
                  border-4 border-black
                  font-bold text-white text-lg
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{ fontFamily: "BlueWinter" }}
              >
                1
              </div>
              <div>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                  <strong>Open innovation is not allowed.</strong> You must work within the framework of the released problem statements.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div 
                className="
                  shrink-0
                  w-10 h-10
                  flex items-center justify-center
                  bg-[#4285F4]
                  border-4 border-black
                  font-bold text-white text-lg
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{ fontFamily: "BlueWinter" }}
              >
                2
              </div>
              <div>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                  <strong>Teams must choose from the officially released PS.</strong> No custom problem statements will be accepted.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div 
                className="
                  shrink-0
                  w-10 h-10
                  flex items-center justify-center
                  bg-[#34A853]
                  border-4 border-black
                  font-bold text-white text-lg
                  transition-transform duration-300
                  group-hover:scale-110
                "
                style={{ fontFamily: "BlueWinter" }}
              >
                3
              </div>
              <div>
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                  <strong>Solutions must strictly align to the selected PS.</strong> Deviations may result in disqualification.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }
      `}</style>
    </section>
  )
}

export default Domains