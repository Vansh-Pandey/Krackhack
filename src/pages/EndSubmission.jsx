import { useState } from "react"
import { Send, CheckCircle2, AlertCircle, ArrowLeft, ExternalLink } from "lucide-react"
import { useNavigate } from "react-router-dom"

const DOMAINS = {
  "Web Development": {
    color: "#EA4335",
    compulsory: [
      "GitHub repo link",
      "Youtube video link",
      "Live Link - optional"
    ],
    specific: [
      "Technical Presentation"
    ]
  },
  "Blockchain": {
    color: "#FBBC05",
    compulsory: [
      "GitHub repo link",
      "Youtube video link",
      "Live Link - optional"
    ],
    specific: [
      "Public GitHub repo (or GitLab)",
      "README.md with one-paragraph project summary and quick start",
      "Contract code + tests",
      "Frontend code (link to live demo)",
      "Deployment addresses (testnet/mainnet) and 3 example tx hashes",
      "Short demo video posted on any social (max 5 minutes) showing flow",
      "Live demo URL (hosted on Netlify / Vercel / or direct IPFS gateway)"
    ]
  },
  "Generative AI": {
    color: "#34A853",
    compulsory: [
      "GitHub repo link",
      "Youtube video link",
      "Live Link - optional"
    ],
    specific: [
      "Team Leader Full Name",
      "Team Leader Email ID",
      "Team Leader WhatsApp",
      "Project Name",
      "Project Documentation / Write-up URL",
      "Link to Synthesized Dataset",
      "Link to HF Model Repo",
      "Twitter (X) Post URL (tag @smolifyai, caption: 'Built with Smolify.AI')",
      "LinkedIn Post URL (tag Smolify, caption: 'Built with Smolify.AI')",
      "Utility (40%): What specific business problem does your model solve?",
      "Efficiency (30%): How did you replace a generalist model?",
      "Integration (30%): How is the model deployed in your final application?"
    ]
  },
  "AI / Machine Learning": {
    color: "#EA4335",
    compulsory: [
      "GitHub repo link",
      "Youtube video link",
      "Live Link - optional"
    ],
    specific: [
      "A single, Final Packaged Folder that includes all necessary files",
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
  },
  "Cybersecurity": {
    color: "#4285F4",
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

const EndSubmission = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const [formData, setFormData] = useState({
    teamName: "",
    domain: "",
    githubLink: "",
    youtubeLink: "",
    liveLink: "",
    specificLinks: {}
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSpecificLinkChange = (key, value) => {
    setFormData(prev => ({
      ...prev,
      specificLinks: {
        ...prev.specificLinks,
        [key]: value
      }
    }))
  }

  const validateForm = () => {
    if (!formData.teamName.trim()) return "Team name is required"
    if (!formData.domain) return "Please select a domain"
    if (!formData.githubLink.trim()) return "GitHub repo link is required"
    if (!formData.youtubeLink.trim()) return "YouTube video link is required"
    
    // Validate domain-specific requirements
    const domain = DOMAINS[formData.domain]
    if (!domain) return "Invalid domain selected"
    
    // For specific domains, check if all required specific links are filled
    if (formData.domain === "Blockchain") {
      const requiredFields = [
        "readmeLink",
        "contractCode",
        "frontendCode",
        "deploymentAddresses",
        "demoVideo",
        "liveDemoUrl"
      ]
      for (let field of requiredFields) {
        if (!formData.specificLinks[field]?.trim()) {
          return `Please fill all Blockchain-specific requirements`
        }
      }
    }

    if (formData.domain === "Generative AI") {
      const requiredFields = [
        "leaderName",
        "leaderEmail",
        "leaderWhatsapp",
        "projectName",
        "documentation",
        "datasetLink",
        "smolifyModelLink",
        "smolifyTwitter",
        "smolifyLinkedin",
        "utilityQuestion",
        "efficiencyQuestion",
        "integrationQuestion"
      ]
      for (let field of requiredFields) {
        if (!formData.specificLinks[field]?.trim()) {
          return `Please fill all Generative AI-specific requirements`
        }
      }
    }

    if (formData.domain === "AI / Machine Learning") {
      const requiredFields = [
        "packagedFolder",
        "trainingScripts",
        "reportPdf",
        "readmeMd"
      ]
      for (let field of requiredFields) {
        if (!formData.specificLinks[field]?.trim()) {
          return `Please fill all AI/ML-specific requirements`
        }
      }
    }

    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const error = validateForm()
    if (error) {
      setSubmitError(error)
      return
    }

    setIsSubmitting(true)
    setSubmitError("")

    try {
      const submissionData = {
        type: "final",
        timestamp: new Date().toISOString(),
        teamName: formData.teamName,
        domain: formData.domain,
        githubLink: formData.githubLink,
        youtubeLink: formData.youtubeLink,
        liveLink: formData.liveLink,
        specificLinks: formData.specificLinks
      }

      // Replace with your Google Apps Script Web App URL
      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxYVWMs_CbfrD-BGDq28uDNKS1Mno3vNwfa_R84rvQM0IcBhsVxnCWZrQiaKVN-VVBW/exec"
      
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData)
      })

      setSubmitSuccess(true)
      
      setTimeout(() => {
        setFormData({
          teamName: "",
          domain: "",
          githubLink: "",
          youtubeLink: "",
          liveLink: "",
          specificLinks: {}
        })
        setSubmitSuccess(false)
      }, 3000)

    } catch (error) {
      console.error("Submission error:", error)
      setSubmitError("Submission failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedDomain = formData.domain ? DOMAINS[formData.domain] : null

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="mx-auto max-w-4xl">
        
        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="
            cursor-target
            mb-8
            flex items-center gap-2
            px-6 py-3
            bg-white
            border-4 border-black
            font-bold
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-0.75 hover:translate-y-0.75
            transition-all duration-200
          "
          style={{ fontFamily: "BlueWinter" }}
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.5} />
          Back to Home
        </button>

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h1 
            className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-wide"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">F</span>
            <span className="text-[#4285F4]">i</span>
            <span className="text-[#FBBC05]">n</span>
            <span className="text-[#34A853]">a</span>
            <span className="text-[#EA4335]">l</span>
            {" "}
            <span className="text-[#4285F4]">S</span>
            <span className="text-[#FBBC05]">u</span>
            <span className="text-[#34A853]">b</span>
            <span className="text-[#EA4335]">m</span>
            <span className="text-[#4285F4]">i</span>
            <span className="text-[#FBBC05]">s</span>
            <span className="text-[#34A853]">s</span>
            <span className="text-[#EA4335]">i</span>
            <span className="text-[#4285F4]">o</span>
            <span className="text-[#FBBC05]">n</span>
          </h1>
        </div>

        {/* INFO BOX */}
        <div className="bg-[#EA4335] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-white text-lg font-bold flex items-center gap-2">
            <AlertCircle className="w-6 h-6" strokeWidth={2.5} />
            Submit your final project by EOD on 15 Feb
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitSuccess && (
          <div className="bg-[#34A853] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
            <p className="text-white text-lg font-bold flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
              Final submission successful! Good luck with judging! 🎉
            </p>
          </div>
        )}

        {/* ERROR MESSAGE */}
        {submitError && (
          <div className="bg-[#EA4335] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
            <p className="text-white text-lg font-bold flex items-center gap-2">
              <AlertCircle className="w-6 h-6" strokeWidth={2.5} />
              {submitError}
            </p>
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* BASIC INFO */}
          <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 
              className="font-bold text-2xl mb-6 text-[#EA4335]"
              style={{ fontFamily: "BlueWinter" }}
            >
              Team Information
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-2">Team Name *</label>
                <input
                  type="text"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                  placeholder="Enter your team name"
                  required
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Problem Statement Domain *</label>
                <select
                  name="domain"
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                  required
                >
                  <option value="">Select Domain</option>
                  {Object.keys(DOMAINS).map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* COMPULSORY SUBMISSIONS */}
          <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 
              className="font-bold text-2xl mb-6 text-[#4285F4]"
              style={{ fontFamily: "BlueWinter" }}
            >
              Compulsory Submissions
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block font-bold mb-2">GitHub Repository Link *</label>
                <input
                  type="url"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                  placeholder="https://github.com/..."
                  required
                />
              </div>

              <div>
                <label className="block font-bold mb-2">YouTube Video Link *</label>
                <input
                  type="url"
                  name="youtubeLink"
                  value={formData.youtubeLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                  placeholder="https://youtube.com/..."
                  required
                />
              </div>

              <div>
                <label className="block font-bold mb-2">Live Link (Optional)</label>
                <input
                  type="url"
                  name="liveLink"
                  value={formData.liveLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>

          {/* DOMAIN-SPECIFIC SUBMISSIONS */}
          {selectedDomain && formData.domain === "Web Development" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6"
                style={{ fontFamily: "BlueWinter", color: selectedDomain.color }}
              >
                Web Development Specific
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">Technical Presentation Link</label>
                  <input
                    type="url"
                    value={formData.specificLinks.technicalPresentation || ""}
                    onChange={(e) => handleSpecificLinkChange("technicalPresentation", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    style={{ outlineColor: selectedDomain.color }}
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
          )}

          {selectedDomain && formData.domain === "Blockchain" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6"
                style={{ fontFamily: "BlueWinter", color: selectedDomain.color }}
              >
                Blockchain Specific Requirements
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">README.md Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.readmeLink || ""}
                    onChange={(e) => handleSpecificLinkChange("readmeLink", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Link to README with project summary and quick start"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Contract Code + Tests Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.contractCode || ""}
                    onChange={(e) => handleSpecificLinkChange("contractCode", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Link to contract code and tests"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Frontend Code Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.frontendCode || ""}
                    onChange={(e) => handleSpecificLinkChange("frontendCode", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Link to frontend code and live demo"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Deployment Addresses & TX Hashes *</label>
                  <textarea
                    value={formData.specificLinks.deploymentAddresses || ""}
                    onChange={(e) => handleSpecificLinkChange("deploymentAddresses", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Testnet/mainnet addresses and 3 example transaction hashes"
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Demo Video Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.demoVideo || ""}
                    onChange={(e) => handleSpecificLinkChange("demoVideo", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Short demo video (max 5 min) on any social platform"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Live Demo URL *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.liveDemoUrl || ""}
                    onChange={(e) => handleSpecificLinkChange("liveDemoUrl", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Netlify / Vercel / IPFS gateway"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {selectedDomain && formData.domain === "Generative AI" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6"
                style={{ fontFamily: "BlueWinter", color: selectedDomain.color }}
              >
                Generative AI - Smolify Track Requirements
              </h2>

              <div className="bg-[#34A853] bg-opacity-10 border-2 border-[#34A853] p-4 mb-6">
                <p className="font-bold text-sm mb-2">
                  Don't just build a toy project. Build a sovereign AI startup.
                </p>
                <p className="text-sm">
                  We are looking for "Intelligence Distillation"—projects that solve specific, high-value problems using efficient, proprietary Small Language Models (SLMs).
                </p>
                <p className="text-sm mt-2">
                  👉 Read the docs at: <a href="https://smolify.ai/docs/get-started" target="_blank" rel="noopener noreferrer" className="underline text-[#34A853]">smolify.ai/docs/get-started</a>
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">Team Leader Full Name *</label>
                  <input
                    type="text"
                    value={formData.specificLinks.leaderName || ""}
                    onChange={(e) => handleSpecificLinkChange("leaderName", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Full name of team leader"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Team Leader Email ID *</label>
                  <input
                    type="email"
                    value={formData.specificLinks.leaderEmail || ""}
                    onChange={(e) => handleSpecificLinkChange("leaderEmail", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Team Leader WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.specificLinks.leaderWhatsapp || ""}
                    onChange={(e) => handleSpecificLinkChange("leaderWhatsapp", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="+91XXXXXXXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Project Name *</label>
                  <input
                    type="text"
                    value={formData.specificLinks.projectName || ""}
                    onChange={(e) => handleSpecificLinkChange("projectName", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Your project name"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Project Documentation / Write-up URL *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.documentation || ""}
                    onChange={(e) => handleSpecificLinkChange("documentation", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Devpost, GitHub README, etc."
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    This must include the problem you solved and why a specialized model was better than a general LLM.
                  </p>
                </div>

                <div>
                  <label className="block font-bold mb-2">Link to your Synthesized Dataset *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.datasetLink || ""}
                    onChange={(e) => handleSpecificLinkChange("datasetLink", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="https://huggingface.co/datasets/smolify/..."
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Link to the synthetic dataset you generated using the Smolify platform.
                  </p>
                </div>

                <div>
                  <label className="block font-bold mb-2">Link to your HF Model Repo *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.smolifyModelLink || ""}
                    onChange={(e) => handleSpecificLinkChange("smolifyModelLink", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="https://huggingface.co/smolify/..."
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Link to the Hugging Face model you trained using Smolify.
                  </p>
                </div>

                <div>
                  <label className="block font-bold mb-2">Twitter (X) Post URL *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.smolifyTwitter || ""}
                    onChange={(e) => handleSpecificLinkChange("smolifyTwitter", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="https://twitter.com/..."
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Must include screenshot/video, tag @smolifyai, and caption "Built with Smolify.AI"
                  </p>
                </div>

                <div>
                  <label className="block font-bold mb-2">LinkedIn Post URL *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.smolifyLinkedin || ""}
                    onChange={(e) => handleSpecificLinkChange("smolifyLinkedin", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="https://linkedin.com/posts/..."
                    required
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Must include screenshot/video, tag Smolify, and caption "Built with Smolify.AI"
                  </p>
                </div>

                {/* JUDGING CRITERIA QUESTIONS */}
                <div className="border-t-4 border-black pt-6 mt-6">
                  <h3 className="font-bold text-xl mb-4" style={{ fontFamily: "BlueWinter" }}>
                    Judging Criteria Questions
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block font-bold mb-2">
                        Utility (40%): What specific business problem does your model solve? *
                      </label>
                      <textarea
                        value={formData.specificLinks.utilityQuestion || ""}
                        onChange={(e) => handleSpecificLinkChange("utilityQuestion", e.target.value)}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                        placeholder="Describe the real-world challenge your model addresses. Focus on high-value tasks that require privacy or strict data structure."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-2">
                        Efficiency (30%): How did you replace a generalist model? *
                      </label>
                      <textarea
                        value={formData.specificLinks.efficiencyQuestion || ""}
                        onChange={(e) => handleSpecificLinkChange("efficiencyQuestion", e.target.value)}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                        placeholder="Explain why your custom SLM is better than just calling GPT-4 for this specific task. Mention factors like privacy, speed, specific structure requirements, or cost per inference."
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-2">
                        Integration (30%): How is the model deployed in your final application? *
                      </label>
                      <textarea
                        value={formData.specificLinks.integrationQuestion || ""}
                        onChange={(e) => handleSpecificLinkChange("integrationQuestion", e.target.value)}
                        className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                        placeholder="Describe how the model runs (e.g., local laptop, edge device, cloud) and how it handles inputs to create structured outputs (JSON, strict formatting, etc.)."
                        rows={4}
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedDomain && formData.domain === "AI / Machine Learning" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6"
                style={{ fontFamily: "BlueWinter", color: selectedDomain.color }}
              >
                AI/ML Specific Requirements
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">Packaged Folder Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.packagedFolder || ""}
                    onChange={(e) => handleSpecificLinkChange("packagedFolder", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Link to final packaged folder with all files"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Training Scripts Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.trainingScripts || ""}
                    onChange={(e) => handleSpecificLinkChange("trainingScripts", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Link to train.py, test.py, config files"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Hackathon Report (PDF/DOCX) *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.reportPdf || ""}
                    onChange={(e) => handleSpecificLinkChange("reportPdf", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="Report covering methodology, challenges, optimizations, evaluation"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">README.md Link *</label>
                  <input
                    type="url"
                    value={formData.specificLinks.readmeMd || ""}
                    onChange={(e) => handleSpecificLinkChange("readmeMd", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="README with setup, run instructions, dependencies"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {selectedDomain && formData.domain === "Cybersecurity" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6"
                style={{ fontFamily: "BlueWinter", color: selectedDomain.color }}
              >
                Cybersecurity Specific
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">Deployed Website Link</label>
                  <input
                    type="url"
                    value={formData.specificLinks.deployedWebsite || ""}
                    onChange={(e) => handleSpecificLinkChange("deployedWebsite", e.target.value)}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              cursor-target
              w-full
              px-8 py-5
              bg-white
              border-4 border-[#34A853]
              text-[#34A853]
              font-bold
              text-xl
              shadow-[6px_6px_0px_0px_#34A853]
              hover:shadow-[3px_3px_0px_0px_#34A853]
              hover:translate-x-0.75 hover:translate-y-0.75
              transition-all duration-200
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
            style={{ fontFamily: "BlueWinter" }}
          >
            {isSubmitting ? (
              "SUBMITTING..."
            ) : (
              <>
                <Send className="inline w-6 h-6 mr-2 mb-1" strokeWidth={2.5} />
                SUBMIT FINAL PROJECT
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EndSubmission