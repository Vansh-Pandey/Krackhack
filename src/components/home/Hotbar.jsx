import { useState, useEffect } from "react"
import {
  Home,
  User,
  Folder,
  Clock,
  HelpCircle,
  Users,
  Image,
  Book,
  Scale,
  Send,  // ADD THIS IMPORT
} from "lucide-react"

const Hotbar = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isMobile, setIsMobile] = useState(false)

  const navItems = [
    { id: "hero", label: "HOME", icon: Home, color: "#34A853" },
    { id: "about", label: "ABOUT", icon: User, color: "#EA4335" },
    { id: "domains", label: "DOMAINS", icon: Folder, color: "#4285F4" },
    { id: "timeline", label: "TIMELINE", icon: Clock, color: "#FBBC05" },
    { id: "submissions", label: "SUBMIT", icon: Send, color: "#EA4335" },  // ADD THIS LINE
    { id: "guidelines", label: "RULES", icon: Book, color: "#34A853" },
    { id: "judging", label: "JUDGING", icon: Scale, color: "#EA4335" },
    { id: "gallery", label: "GALLERY", icon: Image, color: "#4285F4" },
    { id: "faqs", label: "FAQs", icon: HelpCircle, color: "#FBBC05" },
    { id: "pocs", label: "TEAM", icon: Users, color: "#34A853" },
  ]

  // ===== Detect Mobile =====
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // ===== Scroll Spy =====
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.id)
      )

      const offset = isMobile ? 180 : 300
      const scrollPosition = window.scrollY + offset

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobile])

  // ===== Smooth Scroll =====
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)

    if (element) {
      const yOffset = isMobile ? -60 : -80
      const y =
        element.getBoundingClientRect().top +
        window.scrollY +
        yOffset

      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-100 flex justify-center pb-4 sm:pb-6 px-2 sm:px-4 pointer-events-none">
      {/* ===== MAIN HOTBAR ===== */}
      <div
        className="
          max-w-[98vw] sm:max-w-none
          overflow-x-auto sm:overflow-visible
          bg-white border-4 border-black
          shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)]
          rounded-[28px] sm:rounded-full
          px-2 sm:px-4 py-2 sm:py-3
          pointer-events-auto
        "
      >
        <nav className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <div key={item.id} className="relative group shrink-0">
                {/* ===== ICON BUTTON ===== */}
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="
                    relative
                    w-10 h-10
                    xs:w-11 xs:h-11
                    sm:w-14 sm:h-14
                    bg-white border-[3px] sm:border-4
                    rounded-full
                    flex items-center justify-center
                    transition-all duration-300
                    hover:-translate-y-2
                  "
                  style={{
                    borderColor: isActive ? item.color : "black",
                    boxShadow: isActive
                      ? `0px 6px 0px 0px ${item.color}`
                      : "0px 4px 0px 0px rgba(0,0,0,1)",
                    transform: isActive
                      ? isMobile
                        ? "translateY(-5px)"
                        : "translateY(-8px)"
                      : "translateY(0)",
                  }}
                >
                  <Icon
                    className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
                    strokeWidth={2.5}
                    style={{
                      color: isActive ? item.color : "black",
                    }}
                  />
                </button>

                {/* ===== TOOLTIP (NOW VISIBLE ON MOBILE TOO) ===== */}
                <div
                  className="
                    absolute bottom-full left-1/2 -translate-x-1/2 mb-3
                    opacity-0 group-hover:opacity-100
                    group-hover:-translate-y-1
                    pointer-events-none
                    transition-all duration-300
                  "
                >
                  <div
                    className="
                      bg-white border-4 border-black
                      px-3 py-1.5
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      whitespace-nowrap
                      rounded-lg
                    "
                  >
                    <span
                      className="text-sm font-bold tracking-wider"
                      style={{
                        fontFamily: "BlueWinter, sans-serif",
                        color: item.color,
                      }}
                    >
                      {item.label}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 -mt-1"
                    style={{
                      width: 0,
                      height: 0,
                      borderLeft: "6px solid transparent",
                      borderRight: "6px solid transparent",
                      borderTop: "6px solid black",
                    }}
                  />
                </div>

                {/* ===== SEPARATOR ===== */}
                {index < navItems.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1 w-0.5 h-4 sm:h-6 bg-black/20" />
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default Hotbar
 