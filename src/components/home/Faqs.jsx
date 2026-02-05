import React, { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "Is KrackHack beginner-friendly?",
    answer: "Yes! Students of all skill levels are welcome. We encourage beginners to participate and learn.",
    color: "#EA4335"
  },
  {
    question: "Can we change our problem statement later?",
    answer: "No. Once selected, the problem statement cannot be changed. Choose carefully!",
    color: "#4285F4"
  },
  {
    question: "Will certificates be provided?",
    answer: "Yes, participation certificates will be provided to all registered participants.",
    color: "#FBBC05"
  },
  {
    question: "What is the team size limit?",
    answer: "Teams can have 2-4 members. Solo participation is allowed but teams are encouraged.",
    color: "#34A853"
  },
  {
    question: "Do we need to bring our own laptops?",
    answer: "Yes, participants must bring their own laptops and chargers. Internet and power will be provided.",
    color: "#EA4335"
  },
  {
    question: "Is there any registration fee?",
    answer: "No! KrackHack is completely free to participate. Food and refreshments will also be provided.",
    color: "#4285F4"
  },
  {
    question: "Can we use pre-written code?",
    answer: "No. All code must be written during the hackathon. You can use libraries and frameworks, but no pre-built solutions.",
    color: "#FBBC05"
  },
  {
    question: "What prizes can we win?",
    answer: "Cash prizes, swag, certificates, and mentorship opportunities await the winners. Details will be announced with problem statements.",
    color: "#34A853"
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes! Experienced mentors from various domains will be available throughout the event to guide you.",
    color: "#EA4335"
  },
  {
    question: "What should we bring to the event?",
    answer: "Bring your laptop, charger, valid ID, enthusiasm, and be ready to code! Everything else will be provided.",
    color: "#4285F4"
  }
]

const FAQs = () => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-4xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide" 
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">F</span>
            <span className="text-[#4285F4]">A</span>
            <span className="text-[#FBBC05]">Q</span>
            <span className="text-[#34A853]">s</span>
          </h2>
        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
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
                  animation: `fadeInScale 0.5s ease-out ${index * 0.05}s both`
                }}
              >
                {/* QUESTION BUTTON */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    cursor-target
                    w-full
                    flex items-center justify-between
                    p-6
                    transition-all duration-300
                    hover:bg-gray-50
                    text-left
                  "
                >
                  <div className="flex items-center gap-4 flex-1">
                    {/* ICON */}
                    <div 
                      className="
                        shrink-0
                        w-10 h-10
                        flex items-center justify-center
                        border-4 border-black
                        transition-transform duration-300
                      "
                      style={{ 
                        backgroundColor: faq.color,
                        transform: isExpanded ? 'scale(1.1) rotate(180deg)' : 'scale(1) rotate(0deg)'
                      }}
                    >
                      <HelpCircle className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>

                    {/* QUESTION */}
                    <h3 
                      className="font-bold text-lg sm:text-xl flex-1"
                      style={{ fontFamily: "BlueWinter" }}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* CHEVRON */}
                  <ChevronDown 
                    className={`
                      w-6 h-6 
                      shrink-0
                      ml-4
                      transition-transform duration-300
                      ${isExpanded ? 'rotate-180' : ''}
                    `}
                    style={{ color: faq.color }}
                  />
                </button>

                {/* ANSWER */}
                <div 
                  className={`
                    overflow-hidden
                    transition-all duration-500
                    ${isExpanded ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div 
                    className="p-6 pt-0 border-t-4 border-black"
                    style={{
                      animation: isExpanded ? 'fadeIn 0.4s ease-out' : 'none'
                    }}
                  >
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* STILL HAVE QUESTIONS */}
        <div 
          className="
            cursor-target
            mt-12
            bg-white
            border-4 border-black
            p-8
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
            Still Have Questions?
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Our team is here to help! Reach out to us anytime.
          </p>
          <button
            className="
              cursor-target
              px-8 py-4
              bg-white
              border-4 border-[#4285F4]
              text-[#4285F4]
              font-bold
              text-lg
              shadow-[6px_6px_0px_0px_#4285F4]
              hover:shadow-[3px_3px_0px_0px_#4285F4]
              hover:translate-x-0.75 hover:translate-y-0.75
              transition-all duration-200
              active:shadow-none
            "
            style={{ fontFamily: "BlueWinter" }}
          >
            CONTACT US
          </button>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default FAQs