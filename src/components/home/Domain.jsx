import React, { useState } from "react"
import { Globe, Smartphone, Link2, Sparkles, Brain, Shield, Calendar, AlertCircle, ChevronDown, ExternalLink, FileText } from "lucide-react"

const domains = [
  { 
    name: "Web Development", 
    icon: Globe, 
    color: "#EA4335",
    description: "Build responsive web applications and platforms",
    psLink: "#web-dev-ps",
    guidelines: {
      compulsory: [
        "GitHub repo link",
        "Youtube video link",
        "Live Link - optional"
      ],
      specific: [
        "Technical Presentation"
      ]
    }
  },
  { 
    name: "Blockchain", 
    icon: Link2, 
    color: "#FBBC05",
    description: "Develop decentralized applications and smart contracts",
    psLink: "#blockchain-ps",
    guidelines: {
      compulsory: [
        "GitHub repo link",
        "Youtube video link",
        "Live Link - optional"
      ],
      specific: [
        "Public GitHub repo (or GitLab) with:",
        "README.md with one-paragraph project summary and quick start",
        "Contract code + tests",
        "Frontend code (link to live demo)",
        "Deployment addresses (testnet/mainnet) and 3 example tx hashes (post, like, tip)",
        "Short demo video posted on any social (max 5 minutes) showing flow",
        "Live demo URL (hosted on Netlify / Vercel / or direct IPFS gateway)"
      ]
    }
  },
  { 
    name: "Generative AI", 
    icon: Sparkles, 
    color: "#34A853",
    description: "Build AI models that generate content and solutions",
    psLink: "#genai-ps",
    guidelines: {
      compulsory: [
        "GitHub repo link",
        "Youtube video link",
        "Live Link - optional"
      ],
      specific: [
        "Build: Create a working prototype powered by a Smolify model",
        "Social Proof: Post a screenshot/video of your project using Smolify on Twitter (X) AND LinkedIn",
        "Twitter: Tag @smolifyai",
        "LinkedIn: Tag Smolify",
        "Caption must include: 'Built with Smolify.AI'",
        "Documentation: A brief write-up (Readme or Devpost) explaining:",
        "The problem you solved",
        "Why a specialized model was better than a general LLM for this task",
        "Link to your Smolify Model (the HuggingFace repo if you uploaded it)"
      ]
    }
  },
  { 
    name: "AI / Machine Learning", 
    icon: Brain, 
    color: "#EA4335",
    description: "Develop intelligent systems and predictive models",
    psLink: "#ai-ml-ps",
    guidelines: {
      compulsory: [
        "GitHub repo link",
        "Youtube video link",
        "Live Link - optional"
      ],
      specific: [
        "A single, Final Packaged Folder that includes all necessary files:",
        "Model training and inference scripts (train.py, test.py)",
        "Configuration files",
        "Any additional assets or scripts required to test your model",
        "A well-structured Hackathon Report (PDF or DOCX) that covers:",
        "Methodology: Your training approach and setup",
        "Challenges & Solutions: Issues faced and how you overcame them",
        "Optimizations: Techniques used to improve model performance",
        "Performance Evaluation: IoU score and Failure case analysis",
        "A README.md or README.txt that provides:",
        "Step-by-step instructions to run and test your model",
        "How to reproduce your final results",
        "Environment or dependency requirements",
        "Notes on expected outputs and how to interpret them"
      ]
    }
  },
  { 
    name: "Cybersecurity", 
    icon: Shield, 
    color: "#4285F4",
    description: "Create security solutions and vulnerability tools",
    psLink: "#cybersec-ps",
    guidelines: {
      compulsory: [
        "GitHub repo link",
        "Youtube video link",
        "Live Link - optional"
      ],
      specific: [
        "Deploy website comp"
      ]
    }
  }
]

const Domains = () => {
  const [expandedDomain, setExpandedDomain] = useState(null)

  const toggleDomain = (index) => {
    setExpandedDomain(expandedDomain === index ? null : index)
  }

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
        <div className="grid grid-cols-1 gap-6 mb-16">
          {domains.map((domain, index) => {
            const Icon = domain.icon
            const isExpanded = expandedDomain === index
            
            return (
              <div
                key={index}
                className="
                  cursor-target
                  bg-white
                  border-4 border-black
                  shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                "
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* CARD HEADER */}
                <div className="p-6 flex items-start gap-6">
                  {/* ICON */}
                  <div 
                    className="
                      shrink-0
                      inline-flex items-center justify-center
                      w-16 h-16
                      border-4 border-black
                      bg-white
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    "
                    style={{ backgroundColor: domain.color }}
                  >
                    <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h3 
                      className="font-bold text-xl sm:text-2xl mb-2"
                      style={{ fontFamily: "BlueWinter", color: domain.color }}
                    >
                      {domain.name}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
                      {domain.description}
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-wrap gap-3">
                      {/* VISIT PS BUTTON */}
                      <a
                        href={domain.psLink}
                        className="
                          inline-flex items-center gap-2
                          bg-white
                          border-4 border-black
                          px-4 py-2
                          font-bold
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          transition-all duration-200
                          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          hover:translate-x-0.5 hover:translate-y-0.5
                        "
                        style={{ 
                          fontFamily: "BlueWinter",
                          color: domain.color 
                        }}
                      >
                        <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
                        Visit PS
                      </a>

                      {/* VIEW GUIDELINES BUTTON */}
                      <button
                        onClick={() => toggleDomain(index)}
                        className="
                          inline-flex items-center gap-2
                          bg-white
                          border-4 border-black
                          px-4 py-2
                          font-bold
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          transition-all duration-200
                          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          hover:translate-x-0.5 hover:translate-y-0.5
                        "
                        style={{ 
                          fontFamily: "BlueWinter",
                          backgroundColor: domain.color,
                          color: "white"
                        }}
                      >
                        <FileText className="w-4 h-4" strokeWidth={2.5} />
                        {isExpanded ? "Hide" : "View"} Guidelines
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                          strokeWidth={2.5}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {/* EXPANDABLE GUIDELINES */}
                {isExpanded && (
                  <div 
                    className="border-t-4 border-black bg-gray-50 p-6"
                    style={{ animation: 'slideDown 0.3s ease-out' }}
                  >
                    {/* COMPULSORY SUBMISSIONS */}
                    <div className="mb-6">
                      <div 
                        className="
                          inline-block
                          bg-black
                          text-white
                          px-4 py-2
                          border-4 border-black
                          font-bold
                          mb-4
                        "
                        style={{ fontFamily: "BlueWinter" }}
                      >
                        Compulsory Submission
                      </div>
                      <ul className="space-y-2">
                        {domain.guidelines.compulsory.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div 
                              className="
                                shrink-0
                                w-6 h-6
                                flex items-center justify-center
                                border-2 border-black
                                font-bold text-xs
                                mt-0.5
                              "
                              style={{ 
                                backgroundColor: domain.color,
                                color: "white"
                              }}
                            >
                              ✓
                            </div>
                            <span className="text-gray-800 text-sm sm:text-base leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* DOMAIN-SPECIFIC SUBMISSIONS */}
                    <div>
                      <div 
                        className="
                          inline-block
                          px-4 py-2
                          border-4 border-black
                          font-bold
                          mb-4
                        "
                        style={{ 
                          fontFamily: "BlueWinter",
                          backgroundColor: domain.color,
                          color: "white"
                        }}
                      >
                        {domain.name} Specific Requirements
                      </div>
                      <ul className="space-y-2">
                        {domain.guidelines.specific.map((item, i) => {
                          // Determine if this is a parent item (ends with ":")
                          const isParentItem = item.endsWith(':')
                          
                          // Determine if this is a nested/sub item
                          // Logic: Look backwards to find the most recent parent item (ends with ":")
                          // If we find one and current item doesn't end with ":", we're nested
                          let isNested = false
                          if (!isParentItem) {
                            for (let j = i - 1; j >= 0; j--) {
                              if (domain.guidelines.specific[j].endsWith(':')) {
                                isNested = true
                                break
                              }
                            }
                          }
                          
                          return (
                            <li key={i} className={`flex items-start gap-3 ${isNested ? 'ml-6' : ''}`}>
                              {isNested ? (
                                // Sub-item bullet - smaller filled circle
                                <div 
                                  className="
                                    shrink-0
                                    w-1.5 h-1.5
                                    rounded-full
                                    mt-2
                                  "
                                  style={{ 
                                    backgroundColor: domain.color
                                  }}
                                />
                              ) : (
                                // Main item bullet - square with border
                                <div 
                                  className="
                                    shrink-0
                                    w-2 h-2
                                    border-2 border-black
                                    mt-2
                                  "
                                  style={{ 
                                    backgroundColor: domain.color
                                  }}
                                />
                              )}
                              <span 
                                className="text-gray-800 text-sm sm:text-base leading-relaxed"
                                style={{ 
                                  fontWeight: isParentItem ? '600' : 'normal'
                                }}
                              >
                                {item}
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                )}
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

        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 1000px;
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