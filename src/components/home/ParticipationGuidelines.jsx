import React from "react"
import { Users, Lightbulb, Code2, Trophy } from "lucide-react"

const guidelines = [
  {
    icon: Users,
    color: "#EA4335",
    title: "Team Formation",
    description: "Teams can have 2-4 members. Solo participation is allowed but working in teams is encouraged for better collaboration and learning."
  },
  {
    icon: Lightbulb,
    color: "#FBBC05",
    title: "Eligibility",
    description: "Open to all students, developers, and tech enthusiasts. No prior hackathon experience required - beginners are welcome!"
  },
  {
    icon: Code2,
    color: "#4285F4",
    title: "Project Requirements",
    description: "All code must be written during the hackathon. You can use pre-existing libraries, frameworks, and APIs. Open-source contributions encouraged."
  },
  {
    icon: Trophy,
    color: "#34A853",
    title: "Judging Criteria",
    description: "Projects will be evaluated on innovation, technical complexity, design, presentation, and potential real-world impact."
  }
]

const ParticipationGuidelines = () => {
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
            <span className="text-[#EA4335]">i</span>
            <span className="text-[#4285F4]">c</span>
            <span className="text-[#FBBC05]">i</span>
            <span className="text-[#34A853]">p</span>
            <span className="text-[#EA4335]">a</span>
            <span className="text-[#4285F4]">t</span>
            <span className="text-[#FBBC05]">i</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">n</span>
            {" "}
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#FBBC05]">u</span>
            <span className="text-[#34A853]">i</span>
            <span className="text-[#EA4335]">d</span>
            <span className="text-[#4285F4]">e</span>
            <span className="text-[#FBBC05]">l</span>
            <span className="text-[#34A853]">i</span>
            <span className="text-[#EA4335]">n</span>
            <span className="text-[#4285F4]">e</span>
            <span className="text-[#FBBC05]">s</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="
                  cursor-target
                  group
                  bg-white
                  border-4 border-black
                  p-6 sm:p-8
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                  transition-all duration-300
                  hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                  hover:translate-x-0.75 hover:translate-y-0.75
                "
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
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
                  "
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* TITLE */}
                <h3 
                  className="font-bold text-xl sm:text-2xl mb-3 text-black"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* ADDITIONAL INFO BOX */}
        <div 
          className="
            cursor-target
            mt-12
            bg-white
            border-4 border-black
            p-6 sm:p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            transition-all duration-300
            hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-1 hover:translate-y-1
          "
        >
          <p 
            className="font-bold text-lg sm:text-xl mb-2 text-black"
            style={{ fontFamily: "BlueWinter" }}
          >
            Important Notes:
          </p>
          <ul className="space-y-2 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start">
              <span className="text-[#EA4335] font-bold mr-2">•</span>
              <span>All participants must register before the deadline</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#4285F4] font-bold mr-2">•</span>
              <span>Bring your laptop, charger, and enthusiasm!</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FBBC05] font-bold mr-2">•</span>
              <span>Internet and power will be provided throughout the event</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#34A853] font-bold mr-2">•</span>
              <span>Code of conduct must be followed by all participants</span>
            </li>
          </ul>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
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

export default ParticipationGuidelines