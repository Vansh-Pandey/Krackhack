import React from "react"
import { Trophy, DollarSign, Gift, Star, Award, Sparkles, Brain } from "lucide-react"

const PrizePool = () => {
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
            <span className="text-[#4285F4]">r</span>
            <span className="text-[#FBBC05]">i</span>
            <span className="text-[#34A853]">z</span>
            <span className="text-[#EA4335]">e</span>
            {" "}
            <span className="text-[#4285F4]">P</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">l</span>
          </h2>
        </div>

        {/* MAIN TRACK PRIZE */}
        <div 
          className="
            bg-gradient-to-br from-[#EA4335] to-[#FBBC05]
            border-4 border-black
            p-8 sm:p-12
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            mb-8
          "
          style={{ animation: 'slideUp 0.6s ease-out' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 text-white">
            <div 
              className="
                shrink-0
                w-20 h-20 sm:w-24 sm:h-24
                bg-white
                border-4 border-black
                flex items-center justify-center
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              "
            >
              <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-[#FBBC05]" strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 
                className="font-bold text-2xl sm:text-3xl mb-2"
                style={{ fontFamily: "BlueWinter" }}
              >
                Track Prizes (5 Tracks)
              </h3>
              <p className="text-base sm:text-lg mb-1 opacity-90">
                ₹10,000 per track
              </p>
              <p className="text-xs sm:text-sm mb-4 opacity-80">
                Web Dev • Blockchain • Gen AI • AI/ML • Cybersecurity
              </p>
              <p className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ fontFamily: "BlueWinter" }}>
                ₹50,000 Total
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                <div 
                  className="
                    bg-white
                    text-black
                    border-4 border-black
                    px-6 py-3
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  "
                >
                  <p className="text-sm font-bold mb-1" style={{ fontFamily: "BlueWinter" }}>🥇 Winner (each)</p>
                  <p className="text-2xl font-extrabold text-[#EA4335]" style={{ fontFamily: "BlueWinter" }}>₹6,000</p>
                </div>
                <div 
                  className="
                    bg-white
                    text-black
                    border-4 border-black
                    px-6 py-3
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  "
                >
                  <p className="text-sm font-bold mb-1" style={{ fontFamily: "BlueWinter" }}>🥈 Runner-Up (each)</p>
                  <p className="text-2xl font-extrabold text-[#4285F4]" style={{ fontFamily: "BlueWinter" }}>₹4,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOUNTIES & ADDITIONAL PRIZES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
          {/* REQUESTLY BOUNTY */}
          <div 
            className="
              bg-white
              border-4 border-black
              p-6
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              group
              hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-0.5 hover:translate-y-0.5
              transition-all duration-200
            "
            style={{ animation: 'slideUp 0.6s ease-out 0.1s both' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="
                  shrink-0
                  w-14 h-14
                  bg-[#4285F4]
                  border-4 border-black
                  flex items-center justify-center
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <DollarSign className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              
              <div className="flex-1">
                <h4 
                  className="font-bold text-xl sm:text-2xl mb-2 text-[#4285F4]"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  Requestly Bounty
                </h4>
                <p className="text-3xl font-extrabold mb-3" style={{ fontFamily: "BlueWinter" }}>
                  $100
                </p>
              </div>
            </div>
            
            <div className="bg-[#4285F4] bg-opacity-10 border-2 border-[#4285F4] p-4">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                <strong>Open to all domains!</strong> Refer to the PS document for detailed information and requirements.
              </p>
            </div>
          </div>

          {/* AI/ML BOUNTY */}
          <div 
            className="
              bg-white
              border-4 border-black
              p-6
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              group
              hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-0.5 hover:translate-y-0.5
              transition-all duration-200
            "
            style={{ animation: 'slideUp 0.6s ease-out 0.2s both' }}
          >
            <div className="flex items-start gap-4 mb-4">
              <div 
                className="
                  shrink-0
                  w-14 h-14
                  bg-[#EA4335]
                  border-4 border-black
                  flex items-center justify-center
                  shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                  transition-transform duration-300
                  group-hover:scale-110
                "
              >
                <Brain className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              
              <div className="flex-1">
                <h4 
                  className="font-bold text-xl sm:text-2xl mb-2 text-[#EA4335]"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  AI/ML Bounty
                </h4>
                <p className="text-3xl font-extrabold mb-3" style={{ fontFamily: "BlueWinter" }}>
                  ₹5,000
                </p>
              </div>
            </div>
            
            <div className="bg-[#EA4335] bg-opacity-10 border-2 border-[#EA4335] p-4">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                <strong>By Gold Sponsors</strong> – May be awarded to track winners or a new AI/ML team based on quality and evaluation scores.
              </p>
            </div>
          </div>
        </div>

        {/* DIGITAL GOODIES */}
        <div 
          className="
            bg-white
            border-4 border-black
            p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          "
          style={{ animation: 'slideUp 0.6s ease-out 0.3s both' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <div 
              className="
                shrink-0
                w-16 h-16
                bg-[#34A853]
                border-4 border-black
                flex items-center justify-center
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              "
            >
              <Gift className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            
            <div className="flex-1 text-center sm:text-left">
              <h3 
                className="font-bold text-2xl sm:text-3xl mb-2 text-[#34A853]"
                style={{ fontFamily: "BlueWinter" }}
              >
                Digital Goodies
              </h3>
              <p className="text-gray-700 text-base sm:text-lg">
                Exclusive digital rewards and perks for top performers
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* WINNER GOODIES */}
            <div 
              className="
                bg-gradient-to-br from-[#FBBC05] to-[#EA4335]
                border-4 border-black
                p-6
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                group
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-0.5 hover:translate-y-0.5
                transition-all duration-200
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-8 h-8 text-white" strokeWidth={2.5} fill="white" />
                <h4 
                  className="font-bold text-xl text-white"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  Winners
                </h4>
              </div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "BlueWinter" }}>
                $4,000
              </p>
              <p className="text-white text-sm sm:text-base">
                Worth of digital goodies
              </p>
            </div>

            {/* RUNNER-UP GOODIES */}
            <div 
              className="
                bg-gradient-to-br from-[#4285F4] to-[#34A853]
                border-4 border-black
                p-6
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                group
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-0.5 hover:translate-y-0.5
                transition-all duration-200
              "
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-white" strokeWidth={2.5} />
                <h4 
                  className="font-bold text-xl text-white"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  Runner-Up
                </h4>
              </div>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2" style={{ fontFamily: "BlueWinter" }}>
                $3,000
              </p>
              <p className="text-white text-sm sm:text-base">
                Worth of digital goodies
              </p>
            </div>
          </div>
        </div>

        {/* TOTAL VALUE BANNER */}
        <div 
          className="
            mt-8
            bg-black
            border-4 border-black
            p-6
            shadow-[8px_8px_0px_0px_#FBBC05]
            text-center
          "
          style={{ animation: 'slideUp 0.6s ease-out 0.4s both' }}
        >
          <p className="text-white text-sm sm:text-base mb-2 uppercase tracking-wider">
            Total Prize Pool Value
          </p>
          <p 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-2"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">₹</span>
            <span className="text-[#4285F4]">5</span>
            <span className="text-[#FBBC05]">5</span>
            <span className="text-[#34A853]">,</span>
            <span className="text-[#EA4335]">0</span>
            <span className="text-[#4285F4]">0</span>
            <span className="text-[#FBBC05]">0</span>
            <span className="text-white"> + </span>
            <span className="text-[#34A853]">$</span>
            <span className="text-[#EA4335]">7</span>
            <span className="text-[#4285F4]">,</span>
            <span className="text-[#FBBC05]">2</span>
            <span className="text-[#34A853]">0</span>
            <span className="text-[#EA4335]">0</span>
          </p>
          <p className="text-white text-base sm:text-lg">
            in cash prizes and digital goodies
          </p>
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
      `}</style>
    </section>
  )
}

export default PrizePool