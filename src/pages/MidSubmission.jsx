import { useState } from "react"
import { Upload, Users, Send, CheckCircle2, AlertCircle, ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const DOMAINS = [
  "Web Development",
  "Blockchain", 
  "Generative AI",
  "AI / Machine Learning",
  "Cybersecurity"
]

const MidSubmission = () => {
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const [formData, setFormData] = useState({
    teamName: "",
    domain: "",
    pdfLink: "",
    linkedinPost: "",
    twitterPost: "",
    smolifyLinkedin: "",
    smolifyTwitter: "",
    thoreLinkedin: "",
    thoreTwitter: "",
    members: [
      { name: "", mobile: "", telegram: "", isLeader: true },
      { name: "", mobile: "", telegram: "", isLeader: false }
    ]
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleMemberChange = (index, field, value) => {
    const newMembers = [...formData.members]
    newMembers[index][field] = value
    setFormData(prev => ({ ...prev, members: newMembers }))
  }

  const addMember = () => {
    if (formData.members.length < 4) {
      setFormData(prev => ({
        ...prev,
        members: [...prev.members, { name: "", mobile: "", telegram: "", isLeader: false }]
      }))
    }
  }

  const removeMember = (index) => {
    if (formData.members.length > 2) {
      setFormData(prev => ({
        ...prev,
        members: prev.members.filter((_, i) => i !== index)
      }))
    }
  }

  const setAsLeader = (index) => {
    const newMembers = formData.members.map((member, i) => ({
      ...member,
      isLeader: i === index
    }))
    setFormData(prev => ({ ...prev, members: newMembers }))
  }

  const validateForm = () => {
    if (!formData.teamName.trim()) return "Team name is required"
    if (!formData.domain) return "Please select a domain"
    if (!formData.pdfLink.trim()) return "PDF link is required"
    
    // Check Smolify links for Gen AI domain
    if (formData.domain === "Generative AI") {
      if (!formData.smolifyLinkedin.trim() || !formData.smolifyTwitter.trim()) {
        return "Smolify social media posts are required for Generative AI domain"
      }
    }
    
    // Check THORE links for Blockchain domain
    if (formData.domain === "Blockchain") {
      if (!formData.thoreLinkedin.trim() || !formData.thoreTwitter.trim()) {
        return "THORE social media posts are required for Blockchain domain"
      }
    }

    // Validate members
    const filledMembers = formData.members.filter(m => m.name.trim())
    if (filledMembers.length < 2) return "At least 2 team members are required"
    
    for (let member of filledMembers) {
      if (!member.mobile.trim()) return `Mobile number required for ${member.name}`
      if (!member.telegram.trim()) return `Telegram ID required for ${member.name}`
    }

    const hasLeader = formData.members.some(m => m.isLeader && m.name.trim())
    if (!hasLeader) return "Please designate a team leader"

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
      // Filter out empty members
      const validMembers = formData.members.filter(m => m.name.trim())
      
      const submissionData = {
        type: "mid",
        timestamp: new Date().toISOString(),
        teamName: formData.teamName,
        domain: formData.domain,
        pdfLink: formData.pdfLink,
        linkedinPost: formData.linkedinPost,
        twitterPost: formData.twitterPost,
        smolifyLinkedin: formData.smolifyLinkedin,
        smolifyTwitter: formData.smolifyTwitter,
        thoreLinkedin: formData.thoreLinkedin,
        thoreTwitter: formData.thoreTwitter,
        members: validMembers,
        pizzaGiven: "No"
      }
 
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
          pdfLink: "",
          linkedinPost: "",
          twitterPost: "",
          smolifyLinkedin: "",
          smolifyTwitter: "",
          thoreLinkedin: "",
          thoreTwitter: "",
          members: [
            { name: "", mobile: "", telegram: "", isLeader: true },
            { name: "", mobile: "", telegram: "", isLeader: false }
          ]
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
            <span className="text-[#EA4335]">M</span>
            <span className="text-[#4285F4]">i</span>
            <span className="text-[#FBBC05]">d</span>
            {" "}
            <span className="text-[#34A853]">S</span>
            <span className="text-[#EA4335]">u</span>
            <span className="text-[#4285F4]">b</span>
            <span className="text-[#FBBC05]">m</span>
            <span className="text-[#34A853]">i</span>
            <span className="text-[#EA4335]">s</span>
            <span className="text-[#4285F4]">s</span>
            <span className="text-[#FBBC05]">i</span>
            <span className="text-[#34A853]">o</span>
            <span className="text-[#EA4335]">n</span>
          </h1>
        </div>

        {/* INFO BOX */}
        <div className="bg-[#FBBC05] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-black text-lg font-bold flex items-center gap-2">
            <AlertCircle className="w-6 h-6" strokeWidth={2.5} />
            Submit your mid-hackathon progress by 2:00 PM on 14 Feb
          </p>
        </div>

        {/* SUCCESS MESSAGE */}
        {submitSuccess && (
          <div className="bg-[#34A853] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
            <p className="text-white text-lg font-bold flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" strokeWidth={2.5} />
              Submission successful! Your pizza is on the way 🍕
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
              Basic Information
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
                  {DOMAINS.map(domain => (
                    <option key={domain} value={domain}>{domain}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-bold mb-2">
                  <Upload className="inline w-5 h-5 mr-2 mb-1" strokeWidth={2.5} />
                  PDF Link (Google Drive) *
                </label>
                <input
                  type="url"
                  name="pdfLink"
                  value={formData.pdfLink}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                  placeholder="https://drive.google.com/..."
                  required
                />
                <p className="text-sm text-gray-600 mt-2">
                  Upload a PDF showing: Team name, Members, PS chosen, and Approach
                </p>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA POSTS - GENERATIVE AI */}
          {formData.domain === "Generative AI" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6 text-[#34A853]"
                style={{ fontFamily: "BlueWinter" }}
              >
                Smolify Social Posts (Required for Gen AI)
              </h2>
              
              <div className="bg-[#34A853] bg-opacity-10 border-2 border-[#34A853] p-4 mb-4">
                <p className="text-sm font-bold">
                  Caption must include: "Built with Smolify.AI"<br />
                  Twitter: Tag @smolifyai | LinkedIn: Tag Smolify
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">LinkedIn Post Link *</label>
                  <input
                    type="url"
                    name="smolifyLinkedin"
                    value={formData.smolifyLinkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#34A853]"
                    placeholder="https://linkedin.com/posts/..."
                    required={formData.domain === "Generative AI"}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Twitter Post Link *</label>
                  <input
                    type="url"
                    name="smolifyTwitter"
                    value={formData.smolifyTwitter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#34A853]"
                    placeholder="https://twitter.com/..."
                    required={formData.domain === "Generative AI"}
                  />
                </div>
              </div>
            </div>
          )}

          {/* SOCIAL MEDIA POSTS - BLOCKCHAIN */}
          {formData.domain === "Blockchain" && (
            <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h2 
                className="font-bold text-2xl mb-6 text-[#FBBC05]"
                style={{ fontFamily: "BlueWinter" }}
              >
                THORE Social Posts (Required for Blockchain)
              </h2>
              
              <div className="bg-[#FBBC05] bg-opacity-10 border-2 border-[#FBBC05] p-4 mb-4">
                <p className="text-sm font-bold">
                  Caption must include: "Built with THORE"<br />
                  Twitter: Tag @THORE | LinkedIn: Tag THORE
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2">LinkedIn Post Link *</label>
                  <input
                    type="url"
                    name="thoreLinkedin"
                    value={formData.thoreLinkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#FBBC05]"
                    placeholder="https://linkedin.com/posts/... (Tag THORE, Caption: 'Built with THORE')"
                    required={formData.domain === "Blockchain"}
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Twitter Post Link *</label>
                  <input
                    type="url"
                    name="thoreTwitter"
                    value={formData.thoreTwitter}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#FBBC05]"
                    placeholder="https://twitter.com/... (Tag @THORE, Caption: 'Built with THORE')"
                    required={formData.domain === "Blockchain"}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TEAM MEMBERS */}
          <div className="bg-white border-4 border-black p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <h2 
              className="font-bold text-2xl mb-6 text-[#4285F4]"
              style={{ fontFamily: "BlueWinter" }}
            >
              <Users className="inline w-7 h-7 mr-2 mb-1" strokeWidth={2.5} />
              Team Members (2-4)
            </h2>

            <div className="space-y-6">
              {formData.members.map((member, index) => (
                <div 
                  key={index}
                  className="border-4 border-black p-6"
                  style={{ backgroundColor: member.isLeader ? "#4285F410" : "white" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">
                      Member {index + 1} {member.isLeader && "(Leader)"}
                    </h3>
                    <div className="flex gap-2">
                      {!member.isLeader && (
                        <button
                          type="button"
                          onClick={() => setAsLeader(index)}
                          className="px-3 py-1 bg-[#4285F4] text-white border-2 border-black font-bold text-sm"
                        >
                          Set as Leader
                        </button>
                      )}
                      {formData.members.length > 2 && (
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          className="px-3 py-1 bg-[#EA4335] text-white border-2 border-black font-bold text-sm"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block font-bold mb-2 text-sm">Name *</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => handleMemberChange(index, "name", e.target.value)}
                        className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                        placeholder="Full name"
                        required={index < 2}
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-2 text-sm">Mobile *</label>
                      <input
                        type="tel"
                        value={member.mobile}
                        onChange={(e) => handleMemberChange(index, "mobile", e.target.value)}
                        className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                        placeholder="+91XXXXXXXXXX"
                        required={index < 2}
                      />
                    </div>

                    <div>
                      <label className="block font-bold mb-2 text-sm">Telegram ID *</label>
                      <input
                        type="text"
                        value={member.telegram}
                        onChange={(e) => handleMemberChange(index, "telegram", e.target.value)}
                        className="w-full px-3 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                        placeholder="@username"
                        required={index < 2}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {formData.members.length < 4 && (
              <button
                type="button"
                onClick={addMember}
                className="
                  mt-4
                  w-full
                  px-6 py-3
                  bg-white
                  border-4 border-[#34A853]
                  text-[#34A853]
                  font-bold
                  shadow-[4px_4px_0px_0px_#34A853]
                  hover:shadow-[2px_2px_0px_0px_#34A853]
                  hover:translate-x-0.5 hover:translate-y-0.5
                  transition-all duration-200
                "
                style={{ fontFamily: "BlueWinter" }}
              >
                + Add Member
              </button>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              cursor-target
              w-full
              px-8 py-5
              bg-white
              border-4 border-[#EA4335]
              text-[#EA4335]
              font-bold
              text-xl
              shadow-[6px_6px_0px_0px_#EA4335]
              hover:shadow-[3px_3px_0px_0px_#EA4335]
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
                SUBMIT MID PROGRESS
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default MidSubmission