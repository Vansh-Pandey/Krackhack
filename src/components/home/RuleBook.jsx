import React, { useState } from "react"
import { ChevronDown, CheckCircle2, XCircle } from "lucide-react"

const rules = [
  {
    category: "Registration & Team",
    color: "#EA4335",
    items: [
      {
        type: "do",
        text: "Complete solo registration before the deadline (team registration opens only after the hackathon begins)"
      },
      {
        type: "do",
        text: "Form teams of 2–4 members once team registration is enabled"
      },
      {
        type: "do",
        text: "Ensure every team member has completed individual registration before joining a team"
      },
      {
        type: "dont",
        text: "Create or modify teams after the team registration window closes"
      },
      {
        type: "dont",
        text: "Register multiple teams with the same participants"
      }
    ]

  },
  {
    category: "Development Rules",
    color: "#4285F4",
    items: [
      { type: "do", text: "Start coding only after the hackathon begins" },
      { type: "do", text: "Use open-source libraries and frameworks" },
      { type: "do", text: "Commit your code regularly to show progress" },
      { type: "dont", text: "Use pre-written code from before the event" },
      { type: "dont", text: "Copy code from other teams or online sources" }
    ]
  },
  {
    category: "Submission Guidelines",
    color: "#FBBC05",
    items: [
      { type: "do", text: "Submit your project before the deadline" },
      { type: "do", text: "Include a README with setup instructions" },
      { type: "do", text: "Provide a demo video or presentation" },
      { type: "dont", text: "Submit incomplete or broken projects" },
      { type: "dont", text: "Make changes after submission deadline" }
    ]
  },
  {
    category: "Conduct & Ethics",
    color: "#34A853",
    items: [
      { type: "do", text: "Respect all participants and organizers" },
      { type: "do", text: "Help and collaborate with other teams" },
      { type: "do", text: "Follow the venue rules and regulations" },
      { type: "dont", text: "Engage in harassment or discrimination" },
      { type: "dont", text: "Violate intellectual property rights" }
    ]
  }
]

const Rulebook = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleRule = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">R</span>
            <span className="text-[#4285F4]">u</span>
            <span className="text-[#FBBC05]">l</span>
            <span className="text-[#34A853]">e</span>
            <span className="text-[#EA4335]">b</span>
            <span className="text-[#4285F4]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">k</span>
          </h2>
        </div>

        {/* RULES ACCORDION */}
        <div className="space-y-6">
          {rules.map((rule, index) => {
            const isExpanded = expandedIndex === index

            return (
              <div
                key={index}
                className="
                  bg-white
                  border-4 border-black
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                  overflow-hidden
                  transition-all duration-300
                "
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* HEADER */}
                <button
                  onClick={() => toggleRule(index)}
                  className="
                    cursor-target
                    w-full
                    flex items-center justify-between
                    p-6
                    transition-all duration-300
                    hover:bg-gray-50
                  "
                  style={{
                    borderBottom: isExpanded ? '4px solid black' : 'none'
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* NUMBER BADGE */}
                    <div
                      className="
                        flex items-center justify-center
                        w-12 h-12
                        border-4 border-black
                        font-bold text-white text-xl
                      "
                      style={{
                        backgroundColor: rule.color,
                        fontFamily: "BlueWinter"
                      }}
                    >
                      {index + 1}
                    </div>

                    {/* CATEGORY NAME */}
                    <h3
                      className="font-bold text-xl sm:text-2xl text-left"
                      style={{ fontFamily: "BlueWinter" }}
                    >
                      {rule.category}
                    </h3>
                  </div>

                  {/* CHEVRON */}
                  <ChevronDown
                    className={`
                      w-6 h-6 
                      transition-transform duration-300
                      ${isExpanded ? 'rotate-180' : ''}
                    `}
                  />
                </button>

                {/* CONTENT */}
                <div
                  className={`
                    overflow-hidden
                    transition-all duration-500
                    ${isExpanded ? 'max-h-250 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="p-6 space-y-3">
                    {rule.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-start gap-3 group"
                        style={{
                          animation: isExpanded ? `fadeIn 0.4s ease-out ${itemIndex * 0.05}s both` : 'none'
                        }}
                      >
                        {item.type === "do" ? (
                          <CheckCircle2
                            className="w-6 h-6 shrink-0 mt-0.5 text-[#34A853]"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <XCircle
                            className="w-6 h-6 shrink-0 mt-0.5 text-[#EA4335]"
                            strokeWidth={2.5}
                          />
                        )}
                        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* FOOTER NOTE */}
        <div
          className="
            cursor-target
            mt-12
            bg-white
            border-4 border-black
            p-6 sm:p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            text-center
          "
        >
          <p
            className="font-bold text-lg sm:text-xl text-black"
            style={{ fontFamily: "BlueWinter" }}
          >
            Questions about the rules?{" "}
            <span className="text-[#4285F4]">Contact us</span> anytime!
          </p>
          <p className="text-gray-600 mt-2 text-base">
            We're here to help you have the best hackathon experience.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
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

export default Rulebook