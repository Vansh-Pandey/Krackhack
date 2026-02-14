import React from "react"
import { useNavigate } from "react-router-dom"
import { Upload, Send, Clock, AlertTriangle } from "lucide-react"

const Submissions = () => {
  const navigate = useNavigate()

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">S</span>
            <span className="text-[#4285F4]">u</span>
            <span className="text-[#FBBC05]">b</span>
            <span className="text-[#34A853]">m</span>
            <span className="text-[#EA4335]">i</span>
            <span className="text-[#4285F4]">s</span>
            <span className="text-[#FBBC05]">s</span>
            <span className="text-[#34A853]">i</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#4285F4]">n</span>
            <span className="text-[#FBBC05]">s</span>
          </h2>
        </div>

        {/* IMPORTANT NOTICE */}
        <div 
          className="
            bg-[#FBBC05]
            border-4 border-black
            p-6
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            mb-12
          "
        >
          <p className="text-black text-lg font-bold flex items-center gap-2">
            <AlertTriangle className="w-6 h-6" strokeWidth={2.5} />
            Make sure to submit on time! Late submissions will not be accepted.
          </p>
        </div>

        {/* SUBMISSION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* MID SUBMISSION CARD */}
          <div
            className="
              cursor-target
              group
              bg-white
              border-4 border-black
              p-8
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-300
              hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-0.75 hover:translate-y-0.75
            "
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            {/* ICON */}
            <div 
              className="
                inline-flex items-center justify-center
                w-20 h-20
                border-4 border-black
                bg-[#EA4335]
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                mb-6
                transition-transform duration-300
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              <Upload className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>

            {/* TITLE */}
            <h3 
              className="font-bold text-2xl sm:text-3xl mb-4 text-[#EA4335]"
              style={{ fontFamily: "BlueWinter" }}
            >
              Mid Submission
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Submit your mid-hackathon progress including team details, approach, and required social media posts.
            </p>

            {/* DEADLINE */}
            <div className="flex items-center gap-2 mb-6 text-gray-600">
              <Clock className="w-5 h-5" strokeWidth={2.5} />
              <span className="font-bold">Deadline: 14 Feb, 4:00 PM IST</span>
            </div>

            {/* WHAT TO SUBMIT */}
            <div className="bg-gray-50 border-2 border-black p-4 mb-6">
              <p className="font-bold mb-2 text-sm">What to submit:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335]">•</span>
                  <span>Team details (2-4 members)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335]">•</span>
                  <span>PDF with approach (Google Drive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#EA4335]">•</span>
                  <span>Domain-specific social posts</span>
                </li>
              </ul>
            </div>

            {/* REWARD */}
            <div className="bg-[#EA4335] bg-opacity-10 border-2 border-[#EA4335] p-4 mb-6">
              <p className="font-bold text-[#ffffff] flex items-center gap-2">
                🍕 Get your pizza after successful submission!
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/mid-submission")}
              className="
                w-full
                px-8 py-4
                bg-white
                border-4 border-[#EA4335]
                text-[#EA4335]
                font-bold
                text-lg
                shadow-[6px_6px_0px_0px_#EA4335]
                hover:shadow-[3px_3px_0px_0px_#EA4335]
                hover:translate-x-0.75 hover:translate-y-0.75
                transition-all duration-200
              "
              style={{ fontFamily: "BlueWinter" }}
            >
              SUBMIT MID PROGRESS
            </button>
          </div>

          {/* FINAL SUBMISSION CARD */}
          <div
            className="
              cursor-target
              group
              bg-white
              border-4 border-black
              p-8
              shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              transition-all duration-300
              hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:translate-x-0.75 hover:translate-y-0.75
            "
            style={{ animation: 'fadeInUp 0.6s ease-out 0.1s both' }}
          >
            {/* ICON */}
            <div 
              className="
                inline-flex items-center justify-center
                w-20 h-20
                border-4 border-black
                bg-[#34A853]
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                mb-6
                transition-transform duration-300
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              <Send className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>

            {/* TITLE */}
            <h3 
              className="font-bold text-2xl sm:text-3xl mb-4 text-[#34A853]"
              style={{ fontFamily: "BlueWinter" }}
            >
              Final Submission
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              Submit your complete project with all required deliverables based on your chosen domain.
            </p>

            {/* DEADLINE */}
            <div className="flex items-center gap-2 mb-6 text-gray-600">
              <Clock className="w-5 h-5" strokeWidth={2.5} />
              <span className="font-bold">Deadline: 15 Feb, EOD</span>
            </div>

            {/* WHAT TO SUBMIT */}
            <div className="bg-gray-50 border-2 border-black p-4 mb-6">
              <p className="font-bold mb-2 text-sm">What to submit:</p>
              <ul className="space-y-1 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853]">•</span>
                  <span>GitHub repository link</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853]">•</span>
                  <span>YouTube demo video</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853]">•</span>
                  <span>Domain-specific requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#34A853]">•</span>
                  <span>Live deployment (if applicable)</span>
                </li>
              </ul>
            </div>

            {/* NOTE */}
            <div className="bg-[#34A853] bg-opacity-10 border-2 border-[#34A853] p-4 mb-6">
              <p className="font-bold text-[#ffffff]">
                ⚠️ Requirements vary by domain. Check guidelines carefully!
              </p>
            </div>

            {/* BUTTON */}
            <button
              onClick={() => navigate("/final-submission")}
              className="
                w-full
                px-8 py-4
                bg-white
                border-4 border-[#34A853]
                text-[#34A853]
                font-bold
                text-lg
                shadow-[6px_6px_0px_0px_#34A853]
                hover:shadow-[3px_3px_0px_0px_#34A853]
                hover:translate-x-0.75 hover:translate-y-0.75
                transition-all duration-200
              "
              style={{ fontFamily: "BlueWinter" }}
            >
              SUBMIT FINAL PROJECT
            </button>
          </div>

        </div>

        {/* HELP SECTION */}
        <div 
          className="
            mt-12
            bg-white
            border-4 border-black
            p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            text-center
          "
        >
          <h3 
            className="font-bold text-2xl sm:text-3xl mb-4"
            style={{ fontFamily: "BlueWinter" }}
          >
            Need Help?
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            Having trouble with your submission? Our team is here to assist you!
          </p>
          <button
            onClick={() => navigate("/#pocs")}
            className="
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
            "
            style={{ fontFamily: "BlueWinter" }}
          >
            CONTACT POCs
          </button>
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

export default Submissions