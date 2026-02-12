import React from "react"
import { Mail, Phone, User, MessageCircle } from "lucide-react"

const pocs = [
  {
    name: "Akshat",
    role: "AI/ML",
    phone: "+91 87662 26219",
    color: "#EA4335"
  },
  {
    name: "Vipresh",
    role: "Gen AI",
    phone: "+91 79735 74307",
    color: "#FBBC05"
  },
  {
    name: "Vansh",
    role: "Web Dev",
    phone: "+91 78400 52725",
    color: "#34A853"
  },
  {
    name: "Harsh",
    role: "Cybersecurity",
    phone: "+91 95188 30309",
    color: "#EA4335"
  },
  {
    name: "James",
    role: "Blockchain",
    phone: "+91 88495 56496",
    color: "#4285F4"
  },
  {
    name: "Khushbu",
    role: "Registration",
    phone: "+91 95880 72217",
    color: "#FBBC05"
  },
  {
    name: "Ridhhi",
    role: "Submissions",
    phone: "+91 96509 97560",
    color: "#34A853"
  }
]

const POCs = () => {
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
            <span className="text-[#4285F4]">o</span>
            <span className="text-[#FBBC05]">i</span>
            <span className="text-[#34A853]">n</span>
            <span className="text-[#EA4335]">t</span>
            <span className="text-[#4285F4]">s</span>
            {" "}
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#34A853]">f</span>
            {" "}
            <span className="text-[#EA4335]">C</span>
            <span className="text-[#4285F4]">o</span>
            <span className="text-[#FBBC05]">n</span>
            <span className="text-[#34A853]">t</span>
            <span className="text-[#EA4335]">a</span>
            <span className="text-[#4285F4]">c</span>
            <span className="text-[#FBBC05]">t</span>
          </h2>
        </div>

        {/* SUBTITLE */}
        <p className="text-gray-700 text-lg sm:text-xl mb-12 max-w-2xl">
          Have questions or need help? Our team is here for you! Reach out to the relevant POC for domain-specific or general queries.
        </p>

        {/* POC CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pocs.map((poc, index) => (
            <div
              key={index}
              className="
                cursor-target
                group
                bg-white
                border-4 border-black
                p-6
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-300
                hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-0.75 hover:translate-y-0.75
              "
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
              }}
            >
              {/* AVATAR */}
              <div
                className="
                  w-16 h-16
                  flex items-center justify-center
                  border-4 border-black
                  mb-4
                  transition-transform duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
                style={{ backgroundColor: poc.color }}
              >
                <User className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>

              {/* NAME */}
              <h3
                className="font-bold text-xl mb-1"
                style={{ fontFamily: "BlueWinter", color: poc.color }}
              >
                {poc.name}
              </h3>

              {/* ROLE */}
              <p className="text-gray-600 text-sm mb-4 uppercase tracking-wider font-bold">
                {poc.role}
              </p>

              {/* CONTACT INFO */}
              <div className="space-y-2">


                {/* PHONE */}
                <a
                  href={`tel:${poc.phone}`}
                  className="
                    flex items-center gap-2
                    text-gray-700 text-sm
                    hover:text-black
                    transition-colors duration-200
                    group/link
                  "
                >
                  <Phone className="w-4 h-4 shrink-0 group-hover/link:scale-110 transition-transform" strokeWidth={2.5} />
                  <span>{poc.phone}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GENERAL CONTACT */}
        <div
          className="
            cursor-target
            mt-12
            bg-white
            border-4 border-black
            p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
          "
        >
          <h3
            className="font-bold text-2xl sm:text-3xl mb-4"
            style={{ fontFamily: "BlueWinter" }}
          >
            General Inquiries
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            For general questions or if you're not sure who to contact:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:gdgiitmandi@gmail.com "
              className="
                cursor-target
                flex items-center justify-center gap-2
                px-6 py-3
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
              <Mail className="w-5 h-5" strokeWidth={2.5} />
              gdgiitmandi@gmail.com
            </a>
            <a
              href="tel:+919876543210"
              className="
                cursor-target
                flex items-center justify-center gap-2
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
              <Phone className="w-5 h-5" strokeWidth={2.5} />
              +91 78400 52725
            </a>
            <a
              href="https://discord.gg/vjFsTBypdr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                cursor-target
                flex items-center justify-center gap-2
                px-6 py-3
                bg-white
                border-4 border-[#5865F2]
                text-[#5865F2]
                font-bold
                shadow-[4px_4px_0px_0px_#5865F2]
                hover:shadow-[2px_2px_0px_0px_#5865F2]
                hover:translate-x-0.5 hover:translate-y-0.5
                transition-all duration-200
              "
              style={{ fontFamily: "BlueWinter" }}
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.5} />
              Join Discord
            </a>

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

export default POCs