import React, { useState } from "react"
import { X, Users, Mail, Phone, Code, Briefcase } from "lucide-react"

const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeaderName: "",
    teamLeaderEmail: "",
    teamLeaderPhone: "",
    member2Name: "",
    member2Email: "",
    member3Name: "",
    member3Email: "",
    member4Name: "",
    member4Email: "",
    institution: "",
    domain: "",
    experience: "",
    expectations: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Replace this with your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHRZ44N-LLwyxYXTcT9vmn5u82DLWrZWcqrt3umupFOQZlGguewrzWZIwt7BA98KhlNQ/exec"

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })

      setSubmitStatus("success")
      setTimeout(() => {
        onClose()
        setFormData({
          teamName: "",
          teamLeaderName: "",
          teamLeaderEmail: "",
          teamLeaderPhone: "",
          member2Name: "",
          member2Email: "",
          member3Name: "",
          member3Email: "",
          member4Name: "",
          member4Email: "",
          institution: "",
          domain: "",
          experience: "",
          expectations: ""
        })
        setSubmitStatus(null)
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b-4 border-black p-6">
          <div className="flex items-center justify-between">
            <h2
              className="font-extrabold text-2xl md:text-3xl tracking-wide"
              style={{ fontFamily: "BlueWinter" }}
            >
              <span className="text-[#EA4335]">R</span>
              <span className="text-[#4285F4]">E</span>
              <span className="text-[#FBBC05]">G</span>
              <span className="text-[#34A853]">I</span>
              <span className="text-[#EA4335]">S</span>
              <span className="text-[#4285F4]">T</span>
              <span className="text-[#FBBC05]">E</span>
              <span className="text-[#34A853]">R</span>
            </h2>
            <button
              onClick={onClose}
              className="cursor-target p-2 border-2 border-black bg-white hover:bg-gray-100 transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-120px)] p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Team Information */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2" style={{ fontFamily: "BlueWinter", color: "#EA4335" }}>
                <Users className="w-5 h-5" />
                Team Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                    Team Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="teamName"
                    value={formData.teamName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                    placeholder="Enter your team name"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                    Institution/College <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                    placeholder="Enter your institution name"
                  />
                </div>
              </div>
            </div>

            {/* Team Leader */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2" style={{ fontFamily: "BlueWinter", color: "#4285F4" }}>
                <Mail className="w-5 h-5" />
                Team Leader Details
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="teamLeaderName"
                    value={formData.teamLeaderName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                    placeholder="Enter team leader name"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="teamLeaderEmail"
                      value={formData.teamLeaderEmail}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="leader@email.com"
                    />
                  </div>

                  <div>
                    <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="teamLeaderPhone"
                      value={formData.teamLeaderPhone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2" style={{ fontFamily: "BlueWinter", color: "#FBBC05" }}>
                <Users className="w-5 h-5" />
                Team Members (2-4 members total)
              </h3>
              
              <div className="space-y-6">
                {/* Member 2 */}
                <div className="space-y-4">
                  <p className="font-bold text-sm" style={{ fontFamily: "BlueWinter" }}>Member 2</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="member2Name"
                      value={formData.member2Name}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      name="member2Email"
                      value={formData.member2Email}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* Member 3 */}
                <div className="space-y-4">
                  <p className="font-bold text-sm" style={{ fontFamily: "BlueWinter" }}>Member 3 (Optional)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="member3Name"
                      value={formData.member3Name}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      name="member3Email"
                      value={formData.member3Email}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="Email"
                    />
                  </div>
                </div>

                {/* Member 4 */}
                <div className="space-y-4">
                  <p className="font-bold text-sm" style={{ fontFamily: "BlueWinter" }}>Member 4 (Optional)</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="member4Name"
                      value={formData.member4Name}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      name="member4Email"
                      value={formData.member4Email}
                      onChange={handleChange}
                      className="px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2" style={{ fontFamily: "BlueWinter", color: "#34A853" }}>
                <Code className="w-5 h-5" />
                Additional Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                    Preferred Domain <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                  >
                    <option value="">Select a domain</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="IoT">IoT</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Game Development">Game Development</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                    Hackathon Experience
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                  >
                    <option value="">Select your experience</option>
                    <option value="First Time">First Time</option>
                    <option value="1-2 Hackathons">1-2 Hackathons</option>
                    <option value="3-5 Hackathons">3-5 Hackathons</option>
                    <option value="5+ Hackathons">5+ Hackathons</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2 text-sm" style={{ fontFamily: "BlueWinter" }}>
                    What do you hope to gain from KRACKHACK?
                  </label>
                  <textarea
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow resize-none"
                    placeholder="Tell us about your expectations..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Status */}
            {submitStatus === "success" && (
              <div className="bg-green-100 border-4 border-green-600 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-bold text-green-800" style={{ fontFamily: "BlueWinter" }}>
                  ✓ Registration Successful! We'll contact you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-100 border-4 border-red-600 p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="font-bold text-red-800" style={{ fontFamily: "BlueWinter" }}>
                  ✗ Something went wrong. Please try again.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-target w-full px-8 py-4 bg-white border-4 border-[#EA4335] text-[#EA4335] font-bold text-xl shadow-[6px_6px_0px_0px_#EA4335] hover:shadow-[3px_3px_0px_0px_#EA4335] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ fontFamily: "BlueWinter" }}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT REGISTRATION"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationModal