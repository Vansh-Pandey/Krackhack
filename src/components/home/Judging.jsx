import React from "react"
import { Award, Users, Ban, Scale } from "lucide-react"

const judgingPoints = [
  {
    icon: Award,
    color: "#EA4335",
    title: "Detailed Criteria",
    description: "Detailed judging criteria will be shared with problem statements"
  },
  {
    icon: Users,
    color: "#4285F4",
    title: "Expert Panel",
    description: "Projects will be evaluated by a panel of judges"
  },
  {
    icon: Ban,
    color: "#FBBC05",
    title: "No Plagiarism",
    description: "No plagiarism policy applies strictly"
  }
]

const Judging = () => {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide" 
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">J</span>
            <span className="text-[#4285F4]">u</span>
            <span className="text-[#FBBC05]">d</span>
            <span className="text-[#34A853]">g</span>
            <span className="text-[#EA4335]">i</span>
            <span className="text-[#4285F4]">n</span>
            <span className="text-[#FBBC05]">g</span>
          </h2>
        </div>

        {/* JUDGING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {judgingPoints.map((point, index) => {
            const Icon = point.icon
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
                  text-center
                "
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* ICON */}
                <div 
                  className="
                    inline-flex items-center justify-center
                    w-20 h-20
                    border-4 border-black
                    bg-white
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    mb-4
                    transition-transform duration-300
                    group-hover:scale-110
                    group-hover:-rotate-6
                    mx-auto
                  "
                  style={{ backgroundColor: point.color }}
                >
                  <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>

                {/* TITLE */}
                <h3 
                  className="font-bold text-xl sm:text-2xl mb-3"
                  style={{ fontFamily: "BlueWinter" }}
                >
                  {point.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* TRANSPARENCY NOTE */}
        <div 
          className="
            cursor-target
            relative
            bg-[#34A853]
            border-4 border-black
            p-8 sm:p-10
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            overflow-hidden
          "
        >
          {/* DECORATIVE ELEMENTS */}
          <div 
            className="
              absolute top-0 right-0
              w-32 h-32
              bg-black opacity-5
              transform rotate-45 translate-x-16 -translate-y-16
            "
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            {/* ICON */}
            <div 
              className="
                shrink-0
                w-16 h-16 sm:w-20 sm:h-20
                flex items-center justify-center
                bg-white
                border-4 border-black
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
              "
            >
              <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-[#34A853]" strokeWidth={2.5} />
            </div>

            {/* TEXT */}
            <div className="text-center md:text-left">
              <h3 
                className="font-bold text-2xl sm:text-3xl text-white mb-2"
                style={{ fontFamily: "BlueWinter" }}
              >
                Fair & Transparent Judging
              </h3>
              <p className="text-white text-lg sm:text-xl opacity-95">
                Judging transparency and fairness will be maintained throughout the process.
              </p>
            </div>
          </div>
        </div>

        {/* EVALUATION PROCESS */}
        <div 
          className="
            mt-12
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
            Evaluation Process
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* WHAT WE LOOK FOR */}
            <div>
              <h4 
                className="font-bold text-xl mb-4 text-[#4285F4]"
                style={{ fontFamily: "BlueWinter" }}
              >
                What We Look For
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853] text-2xl leading-none">✓</span>
                  <span className="text-gray-700 text-base sm:text-lg">Innovation and creativity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853] text-2xl leading-none">✓</span>
                  <span className="text-gray-700 text-base sm:text-lg">Technical implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853] text-2xl leading-none">✓</span>
                  <span className="text-gray-700 text-base sm:text-lg">Problem-solving approach</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853] text-2xl leading-none">✓</span>
                  <span className="text-gray-700 text-base sm:text-lg">Presentation quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853] text-2xl leading-none">✓</span>
                  <span className="text-gray-700 text-base sm:text-lg">Real-world impact potential</span>
                </li>
              </ul>
            </div>

            {/* WHAT TO AVOID */}
            <div>
              <h4 
                className="font-bold text-xl mb-4 text-[#EA4335]"
                style={{ fontFamily: "BlueWinter" }}
              >
                What to Avoid
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335] text-2xl leading-none">✗</span>
                  <span className="text-gray-700 text-base sm:text-lg">Plagiarized code or content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335] text-2xl leading-none">✗</span>
                  <span className="text-gray-700 text-base sm:text-lg">Pre-built solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335] text-2xl leading-none">✗</span>
                  <span className="text-gray-700 text-base sm:text-lg">Incomplete submissions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335] text-2xl leading-none">✗</span>
                  <span className="text-gray-700 text-base sm:text-lg">Violating problem statement guidelines</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335] text-2xl leading-none">✗</span>
                  <span className="text-gray-700 text-base sm:text-lg">Late submissions</span>
                </li>
              </ul>
            </div>

          </div>
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

export default Judging