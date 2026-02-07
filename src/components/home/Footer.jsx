import React from "react"
import { Linkedin, Instagram, Globe, Twitter, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/google-developer-groups-iit-mandi/",
    icon: Linkedin,
    color: "#4285F4",
    handle: "Google Developer Groups IIT Mandi"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/gdg_iitmandi",
    icon: Instagram,
    color: "#EA4335",
    handle: "@gdg_iitmandi"
  },
  {
    name: "Website",
    url: "https://gdg.iitmandi.co.in",
    icon: Globe,
    color: "#34A853",
    handle: "gdg.iitmandi.co.in"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/gdg_iitmandi",
    icon: Twitter,
    color: "#4285F4",
    handle: "@gdg_iitmandi"
  },
  {
    name: "GDG Event Platform",
    url: "https://gdg.community.dev/gdg-on-campus-indian-institute-of-technology-mandi-india/",
    icon: ExternalLink,
    color: "#FBBC05",
    handle: "GDG on Campus IIT Mandi"
  }
]

const Footer = () => {
  return (
    <footer className="relative w-full bg-black py-16 overflow-hidden">
      {/* DECORATIVE CIRCLES */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#EA4335]" />
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-[#4285F4]" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-[#FBBC05]" />
        <div className="absolute bottom-10 left-1/3 w-28 h-28 rounded-full bg-[#34A853]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* ABOUT SECTION */}
          <div>
            <h3 
              className="font-bold text-3xl sm:text-4xl mb-4 text-white"
              style={{ fontFamily: "BlueWinter" }}
            >
              <span className="text-[#EA4335]">K</span>
              <span className="text-[#4285F4]">r</span>
              <span className="text-[#FBBC05]">a</span>
              <span className="text-[#4285F4]">c</span>
              <span className="text-[#34A853]">k</span>
              <span className="text-[#EA4335]">H</span>
              <span className="text-[#4285F4]">a</span>
              <span className="text-[#34A853]">c</span>
              <span className="text-[#EA4335]">k</span>
            </h3>
            <p className="text-gray-400 text-base leading-relaxed mb-4">
              A high-energy hackathon where curious minds come together to build, break, and reimagine ideas.
            </p>
            <p className="text-gray-500 text-sm">
              Organized by Google Developer Groups <br />
              IIT Mandi
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 
              className="font-bold text-xl mb-4 text-white"
              style={{ fontFamily: "BlueWinter" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#4285F4] group-hover:w-4 transition-all duration-200" />
                  About KrackHack
                </a>
              </li>
              <li>
                <a 
                  href="#domains" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#EA4335] group-hover:w-4 transition-all duration-200" />
                  Domains
                </a>
              </li>
              <li>
                <a 
                  href="#timeline" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#FBBC05] group-hover:w-4 transition-all duration-200" />
                  Timeline
                </a>
              </li>
              <li>
                <a 
                  href="#faqs" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#34A853] group-hover:w-4 transition-all duration-200" />
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="https://luma.com/m92p8v92" 
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-0 h-0.5 bg-[#4285F4] group-hover:w-4 transition-all duration-200" />
                  Register
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 
              className="font-bold text-xl mb-4 text-white"
              style={{ fontFamily: "BlueWinter" }}
            >
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:krackhack@iitmandi.ac.in"
                className="text-gray-400 hover:text-[#4285F4] transition-colors duration-200 block"
              >
                gdgiitmandi@gmail.com 
              </a>
              <a 
                href="tel:+919876543210"
                className="text-gray-400 hover:text-[#34A853] transition-colors duration-200 block"
              >
                +91 98765 43210
              </a>
              <p className="text-gray-500 text-sm mt-4">
                IIT Mandi, Kamand<br />
                Himachal Pradesh, India<br />
                175005
              </p>
            </div>
          </div>

        </div>

        {/* SOCIAL LINKS */}
        <div 
          className="
            bg-white
            border-4 border-white
            p-8
            shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]
            mb-12
          "
        >
          <h4 
            className="font-bold text-2xl mb-6 text-center"
            style={{ fontFamily: "BlueWinter" }}
          >
            Connect With Us
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    cursor-target
                    group
                    flex flex-col items-center
                    bg-white
                    border-4 border-black
                    p-4
                    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-300
                    hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                    hover:translate-x-0.5 hover:translate-y-0.5
                  "
                  style={{
                    animation: `popIn 0.4s ease-out ${index * 0.1}s both`
                  }}
                >
                  {/* ICON */}
                  <div 
                    className="
                      w-12 h-12
                      flex items-center justify-center
                      border-4 border-black
                      mb-3
                      transition-transform duration-300
                      group-hover:scale-110
                      group-hover:rotate-12
                    "
                    style={{ backgroundColor: social.color }}
                  >
                    <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>

                  {/* NAME */}
                  <p 
                    className="font-bold text-sm mb-1"
                    style={{ fontFamily: "BlueWinter", color: social.color }}
                  >
                    {social.name}
                  </p>

                  {/* HANDLE */}
                  <p className="text-gray-600 text-xs text-center">
                    {social.handle}
                  </p>
                </a>
              )
            })}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t-4 border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* COPYRIGHT */}
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 KrackHack. All rights reserved. <br className="md:hidden" />
              Organized with ❤️ by GDG IIT Mandi
            </p>

            {/* LEGAL LINKS */}
            <div className="flex gap-6">
              <a 
                href="#privacy" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#conduct" 
                className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
              >
                Code of Conduct
              </a>
            </div>

          </div>

          {/* BUILT WITH LOVE */}
          <p className="text-center text-gray-600 text-xs mt-6">
            Built with{" "}
            <span className="text-[#EA4335]">❤</span>
            {" "}by the{" "}
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">D</span>
            <span className="text-[#FBBC05]">G</span>
            {" "}team
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer