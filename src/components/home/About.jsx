import React, { useEffect, useRef, useState } from "react"
import { OrbitingCircles } from "../ui/OrbitingCircles"
import { File, Settings, Search, Code } from "lucide-react"

const About = () => {
  const orbitRef = useRef(null)
  const [size, setSize] = useState(0)

  // Dynamically measure orbit container
  useEffect(() => {
    if (!orbitRef.current) return

    const observer = new ResizeObserver(([entry]) => {
      setSize(entry.contentRect.width)
    })

    observer.observe(orbitRef.current)
    return () => observer.disconnect()
  }, [])

  // Dynamic radii (scale with container)
  const outerRadius = size * 0.42
  const middleRadius = size * 0.30
  const innerRadius = size * 0.18

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT */}
          <div className="order-2 lg:order-1">

            {/* TITLE */}
            <div className=" inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h2 className="cursor-target font-bubble font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide" style={{ fontFamily: "BlueWinter" }}
              >
                What is{" "}
                <span className="text-[#EA4335]">K</span>
                <span className="text-[#4285F4]">r</span>
                <span className="text-[#FBBC05]">a</span>
                <span className="text-[#4285F4]">c</span>
                <span className="text-[#34A853]">k</span>
                <span className="text-[#EA4335]">H</span>
                <span className="text-[#4285F4]">a</span>
                <span className="text-[#34A853]">c</span>
                <span className="text-[#EA4335]">k</span>?
              </h2>
            </div>

            {/* CONTENT */}
            <div className="cursor-target bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xl">

              <p className="font-monospace text-base sm:text-lg leading-relaxed text-gray-800">
                <strong>KrackHack</strong> is a 48-hour student hackathon organised by GDG on Campus, IIT Mandi, bringing together developers, designers, and problem-solvers to build impactful solutions across diverse technology domains.
              </p>

              <p className="font-monospace text-base sm:text-lg leading-relaxed text-gray-800 mt-4">
                <strong>Purpose</strong>
              </p>

              <ul className="font-monospace text-base sm:text-lg leading-relaxed text-gray-800 list-disc ml-5 mt-2">
                <li>Encourage hands-on building</li>
                <li>Promote learning through real-world problem statements</li>
                <li>Provide exposure to industry-aligned domains</li>
                <li>Create a collaborative student tech ecosystem</li>
              </ul>

              <p className="font-monospace text-base sm:text-lg leading-relaxed text-gray-800 mt-4">
                <strong>Who can participate</strong>
              </p>

              <ul className="font-monospace text-base sm:text-lg leading-relaxed text-gray-800 list-disc ml-5 mt-2">
                <li>College students</li>
                <li>Beginners to advanced developers</li>
                <li>Teams passionate about building and learning</li>
              </ul>

            </div>
          </div>

          {/* RIGHT — DYNAMIC ORBITS */}
          <div className="order-1 lg:order-2 flex items-center justify-center lg:justify-end">

            <div
              ref={orbitRef}
              className="
                relative
                flex items-center justify-center
                w-65
                sm:w-85
                md:w-105
                lg:w-130
                aspect-square
              "
            >
              {/* OUTER ORBIT */}
              {size > 0 && (
                <OrbitingCircles iconSize={size * 0.12} radius={outerRadius} duration={30}>
                  <div className="bg-white border-2 border-black rounded-full p-3 shadow-md text-[#4285F4]">
                    <Code />
                  </div>
                  <div className="bg-white border-2 border-black rounded-full p-3 shadow-md text-[#EA4335]">
                    <File />
                  </div>
                  <div className="bg-white border-2 border-black rounded-full p-3 shadow-md text-[#34A853]">
                    <Settings />
                  </div>
                </OrbitingCircles>
              )}

              {/* MIDDLE ORBIT */}
              {size > 0 && (
                <OrbitingCircles
                  reverse
                  iconSize={size * 0.095}
                  radius={middleRadius}
                  duration={22}
                >
                  <div className="bg-white border-2 border-black rounded-full p-2 shadow-md text-[#FBBC05]">
                    <Search />
                  </div>
                  <div className="bg-white border-2 border-black rounded-full p-2 shadow-md text-[#4285F4]">
                    <Code />
                  </div>
                  <div className="bg-white border-2 border-black rounded-full p-2 shadow-md text-[#EA4335]">
                    <File />
                  </div>
                  <div className="bg-white border-2 border-black rounded-full p-2 shadow-md text-[#34A853]">
                    <Settings />
                  </div>
                </OrbitingCircles>
              )}

              {/* INNER ORBIT */}
              {size > 0 && (
                <OrbitingCircles iconSize={size * 0.07} radius={innerRadius} duration={14}>
                  <div className="bg-white border border-black rounded-full p-1.5 shadow-sm text-[#4285F4]">
                    <Code />
                  </div>
                  <div className="bg-white border border-black rounded-full p-1.5 shadow-sm text-[#FBBC05]">
                    <Search />
                  </div>
                </OrbitingCircles>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
