import { useState, useEffect } from "react"
import { Pizza, CheckCircle2, XCircle, RefreshCw, Search, Filter, Download } from "lucide-react"

const Admin = () => {
  const [midSubmissions, setMidSubmissions] = useState([])
  const [finalSubmissions, setFinalSubmissions] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("mid")
  const [searchQuery, setSearchQuery] = useState("")
  const [filterDomain, setFilterDomain] = useState("")
  const [filterPizza, setFilterPizza] = useState("")

  // Replace with your Google Apps Script Web App URL for reading data
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxYVWMs_CbfrD-BGDq28uDNKS1Mno3vNwfa_R84rvQM0IcBhsVxnCWZrQiaKVN-VVBW/exec"

  useEffect(() => {
    fetchSubmissions()
  }, [])

  const fetchSubmissions = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${SCRIPT_URL}?action=getSubmissions`)
      const data = await response.json()
      
      setMidSubmissions(data.midSubmissions || [])
      setFinalSubmissions(data.finalSubmissions || [])
    } catch (error) {
      console.error("Error fetching submissions:", error)
    } finally {
      setLoading(false)
    }
  }

  const updatePizzaStatus = async (submissionId, status) => {
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "updatePizza",
          submissionId,
          pizzaGiven: status
        })
      })
      
      // Update local state
      setMidSubmissions(prev => 
        prev.map(sub => 
          sub.id === submissionId ? { ...sub, pizzaGiven: status } : sub
        )
      )
    } catch (error) {
      console.error("Error updating pizza status:", error)
    }
  }

  const currentSubmissions = activeTab === "mid" ? midSubmissions : finalSubmissions

  const filteredSubmissions = currentSubmissions.filter(sub => {
    const matchesSearch = 
      sub.teamName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.domain?.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesDomain = !filterDomain || sub.domain === filterDomain
    const matchesPizza = !filterPizza || sub.pizzaGiven === filterPizza

    return matchesSearch && matchesDomain && matchesPizza
  })

  const pizzaStats = {
    total: midSubmissions.length,
    given: midSubmissions.filter(s => s.pizzaGiven === "Yes").length,
    pending: midSubmissions.filter(s => s.pizzaGiven === "No").length
  }

  const exportToCSV = () => {
    const submissions = activeTab === "mid" ? midSubmissions : finalSubmissions
    
    let csv = ""
    if (activeTab === "mid") {
      csv = "Team Name,Domain,PDF Link,LinkedIn,Twitter,Smolify LinkedIn,Smolify Twitter,THORE LinkedIn,THORE Twitter,Members,Pizza Given,Timestamp\n"
      submissions.forEach(sub => {
        const members = sub.members?.map(m => `${m.name} (${m.mobile}, ${m.telegram})`).join("; ") || ""
        csv += `"${sub.teamName}","${sub.domain}","${sub.pdfLink}","${sub.linkedinPost}","${sub.twitterPost}","${sub.smolifyLinkedin}","${sub.smolifyTwitter}","${sub.thoreLinkedin}","${sub.thoreTwitter}","${members}","${sub.pizzaGiven}","${sub.timestamp}"\n`
      })
    } else {
      csv = "Team Name,Domain,GitHub,YouTube,Live Link,Specific Links,Timestamp\n"
      submissions.forEach(sub => {
        const specificLinks = JSON.stringify(sub.specificLinks || {})
        csv += `"${sub.teamName}","${sub.domain}","${sub.githubLink}","${sub.youtubeLink}","${sub.liveLink}","${specificLinks}","${sub.timestamp}"\n`
      })
    }

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${activeTab}_submissions_${new Date().toISOString()}.csv`
    a.click()
  }

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <h1 
            className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] tracking-wide"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">A</span>
            <span className="text-[#4285F4]">d</span>
            <span className="text-[#FBBC05]">m</span>
            <span className="text-[#34A853]">i</span>
            <span className="text-[#EA4335]">n</span>
            {" "}
            <span className="text-[#4285F4]">D</span>
            <span className="text-[#FBBC05]">a</span>
            <span className="text-[#34A853]">s</span>
            <span className="text-[#EA4335]">h</span>
            <span className="text-[#4285F4]">b</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">a</span>
            <span className="text-[#EA4335]">r</span>
            <span className="text-[#4285F4]">d</span>
          </h1>
        </div>

        {/* PIZZA STATS */}
        {activeTab === "mid" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#4285F4] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-white text-sm font-bold mb-2">Total Submissions</p>
              <p className="text-white text-4xl font-bold" style={{ fontFamily: "BlueWinter" }}>
                {pizzaStats.total}
              </p>
            </div>

            <div className="bg-[#34A853] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-white text-sm font-bold mb-2">Pizza Given</p>
              <p className="text-white text-4xl font-bold" style={{ fontFamily: "BlueWinter" }}>
                {pizzaStats.given}
              </p>
            </div>

            <div className="bg-[#EA4335] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-white text-sm font-bold mb-2">Pending</p>
              <p className="text-white text-4xl font-bold" style={{ fontFamily: "BlueWinter" }}>
                {pizzaStats.pending}
              </p>
            </div>
          </div>
        )}

        {/* CONTROLS */}
        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mb-8">
          
          {/* TABS */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab("mid")}
              className={`
                px-6 py-3
                border-4 border-black
                font-bold
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-200
                ${activeTab === "mid" ? "bg-[#EA4335] text-white" : "bg-white text-black"}
              `}
              style={{ fontFamily: "BlueWinter" }}
            >
              <Pizza className="inline w-5 h-5 mr-2 mb-1" strokeWidth={2.5} />
              Mid Submissions
            </button>

            <button
              onClick={() => setActiveTab("final")}
              className={`
                px-6 py-3
                border-4 border-black
                font-bold
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-200
                ${activeTab === "final" ? "bg-[#34A853] text-white" : "bg-white text-black"}
              `}
              style={{ fontFamily: "BlueWinter" }}
            >
              Final Submissions
            </button>
          </div>

          {/* FILTERS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" strokeWidth={2.5} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
                placeholder="Search team or domain"
              />
            </div>

            <select
              value={filterDomain}
              onChange={(e) => setFilterDomain(e.target.value)}
              className="px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
            >
              <option value="">All Domains</option>
              <option value="Web Development">Web Development</option>
              <option value="Blockchain">Blockchain</option>
              <option value="Generative AI">Generative AI</option>
              <option value="AI / Machine Learning">AI / Machine Learning</option>
              <option value="Cybersecurity">Cybersecurity</option>
            </select>

            {activeTab === "mid" && (
              <select
                value={filterPizza}
                onChange={(e) => setFilterPizza(e.target.value)}
                className="px-4 py-3 border-4 border-black focus:outline-none focus:ring-4 focus:ring-[#4285F4]"
              >
                <option value="">All Pizza Status</option>
                <option value="Yes">Pizza Given</option>
                <option value="No">Pizza Pending</option>
              </select>
            )}

            <div className="flex gap-2">
              <button
                onClick={fetchSubmissions}
                className="
                  flex-1
                  px-4 py-3
                  bg-white
                  border-4 border-[#4285F4]
                  text-[#4285F4]
                  font-bold
                  shadow-[4px_4px_0px_0px_#4285F4]
                  hover:shadow-[2px_2px_0px_0px_#4285F4]
                  hover:translate-x-0.5 hover:translate-y-0.5
                  transition-all duration-200
                "
                style={{ fontFamily: "BlueWinter" }}
              >
                <RefreshCw className="inline w-5 h-5" strokeWidth={2.5} />
              </button>

              <button
                onClick={exportToCSV}
                className="
                  flex-1
                  px-4 py-3
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
                <Download className="inline w-5 h-5" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>

        {/* SUBMISSIONS LIST */}
        {loading ? (
          <div className="bg-white border-4 border-black p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <RefreshCw className="inline w-8 h-8 animate-spin mb-4" strokeWidth={2.5} />
            <p className="text-xl font-bold">Loading submissions...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="bg-white border-4 border-black p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center">
            <p className="text-xl font-bold">No submissions found</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredSubmissions.map((submission, index) => (
              <div
                key={submission.id || index}
                className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                {/* HEADER */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "BlueWinter" }}
                    >
                      {submission.teamName}
                    </h3>
                    <div className="flex gap-2">
                      <span 
                        className="px-3 py-1 border-2 border-black font-bold text-sm"
                        style={{ 
                          backgroundColor: 
                            submission.domain === "Web Development" ? "#EA4335" :
                            submission.domain === "Blockchain" ? "#FBBC05" :
                            submission.domain === "Generative AI" ? "#34A853" :
                            submission.domain === "AI / Machine Learning" ? "#EA4335" :
                            "#4285F4",
                          color: "white"
                        }}
                      >
                        {submission.domain}
                      </span>
                      {activeTab === "mid" && (
                        <span 
                          className={`px-3 py-1 border-2 border-black font-bold text-sm ${
                            submission.pizzaGiven === "Yes" 
                              ? "bg-[#34A853] text-white" 
                              : "bg-[#EA4335] text-white"
                          }`}
                        >
                          {submission.pizzaGiven === "Yes" ? "🍕 Pizza Given" : "⏳ Pizza Pending"}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600">
                    {new Date(submission.timestamp).toLocaleString()}
                  </p>
                </div>

                {/* MID SUBMISSION DETAILS */}
                {activeTab === "mid" && (
                  <>
                    {/* LINKS */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="font-bold text-sm mb-1">PDF Link:</p>
                        <a 
                          href={submission.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4285F4] underline break-all text-sm"
                        >
                          {submission.pdfLink}
                        </a>
                      </div>

                      {submission.smolifyLinkedin && (
                        <div>
                          <p className="font-bold text-sm mb-1">Smolify LinkedIn:</p>
                          <a 
                            href={submission.smolifyLinkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4285F4] underline break-all text-sm"
                          >
                            {submission.smolifyLinkedin}
                          </a>
                        </div>
                      )}

                      {submission.smolifyTwitter && (
                        <div>
                          <p className="font-bold text-sm mb-1">Smolify Twitter:</p>
                          <a 
                            href={submission.smolifyTwitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4285F4] underline break-all text-sm"
                          >
                            {submission.smolifyTwitter}
                          </a>
                        </div>
                      )}

                      {submission.thoreLinkedin && (
                        <div>
                          <p className="font-bold text-sm mb-1">THORE LinkedIn:</p>
                          <a 
                            href={submission.thoreLinkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4285F4] underline break-all text-sm"
                          >
                            {submission.thoreLinkedin}
                          </a>
                        </div>
                      )}

                      {submission.thoreTwitter && (
                        <div>
                          <p className="font-bold text-sm mb-1">THORE Twitter:</p>
                          <a 
                            href={submission.thoreTwitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4285F4] underline break-all text-sm"
                          >
                            {submission.thoreTwitter}
                          </a>
                        </div>
                      )}
                    </div>

                    {/* TEAM MEMBERS */}
                    <div className="mb-4">
                      <p className="font-bold mb-2">Team Members:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {submission.members?.map((member, idx) => (
                          <div key={idx} className="border-2 border-black p-3 text-sm">
                            <p className="font-bold">
                              {member.name} {member.isLeader && "(Leader)"}
                            </p>
                            <p> {member.mobile}</p>
                            <p> {member.telegram}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* PIZZA CONTROLS */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => updatePizzaStatus(submission.id, "Yes")}
                        disabled={submission.pizzaGiven === "Yes"}
                        className={`
                          flex-1
                          px-6 py-3
                          border-4 border-black
                          font-bold
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          hover:translate-x-0.5 hover:translate-y-0.5
                          transition-all duration-200
                          ${submission.pizzaGiven === "Yes" 
                            ? "bg-gray-300 cursor-not-allowed" 
                            : "bg-[#34A853] text-white"
                          }
                        `}
                        style={{ fontFamily: "BlueWinter" }}
                      >
                        <CheckCircle2 className="inline w-5 h-5 mr-2 mb-1" strokeWidth={2.5} />
                        Mark Pizza Given
                      </button>

                      <button
                        onClick={() => updatePizzaStatus(submission.id, "No")}
                        disabled={submission.pizzaGiven === "No"}
                        className={`
                          flex-1
                          px-6 py-3
                          border-4 border-black
                          font-bold
                          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                          hover:translate-x-0.5 hover:translate-y-0.5
                          transition-all duration-200
                          ${submission.pizzaGiven === "No" 
                            ? "bg-gray-300 cursor-not-allowed" 
                            : "bg-[#EA4335] text-white"
                          }
                        `}
                        style={{ fontFamily: "BlueWinter" }}
                      >
                        <XCircle className="inline w-5 h-5 mr-2 mb-1" strokeWidth={2.5} />
                        Mark Pizza Pending
                      </button>
                    </div>
                  </>
                )}

                {/* FINAL SUBMISSION DETAILS */}
                {activeTab === "final" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-bold text-sm mb-1">GitHub:</p>
                      <a 
                        href={submission.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4285F4] underline break-all text-sm"
                      >
                        {submission.githubLink}
                      </a>
                    </div>

                    <div>
                      <p className="font-bold text-sm mb-1">YouTube:</p>
                      <a 
                        href={submission.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#4285F4] underline break-all text-sm"
                      >
                        {submission.youtubeLink}
                      </a>
                    </div>

                    {submission.liveLink && (
                      <div>
                        <p className="font-bold text-sm mb-1">Live Link:</p>
                        <a 
                          href={submission.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4285F4] underline break-all text-sm"
                        >
                          {submission.liveLink}
                        </a>
                      </div>
                    )}

                    {submission.specificLinks && Object.keys(submission.specificLinks).length > 0 && (
                      <div className="md:col-span-2">
                        <p className="font-bold text-sm mb-2">Domain-Specific Submissions:</p>
                        <div className="border-2 border-black p-3 bg-gray-50">
                          <pre className="text-xs overflow-auto">
                            {JSON.stringify(submission.specificLinks, null, 2)}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Admin