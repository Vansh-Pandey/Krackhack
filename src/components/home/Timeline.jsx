import React from "react"
import { Clock, Calendar, Zap, Trophy } from "lucide-react"

const timelineEvents = [
  {
    date: "14 Feb",
    time: "12:00 AM",
    title: "Problem Statements Release",
    description: "Official PS released across all domains",
    icon: Calendar,
    color: "#EA4335"
  },
  {
    date: "15 Mar",
    time: "9:00 AM",
    title: "Registration & Check-in",
    description: "Team registration and venue check-in begins",
    icon: Clock,
    color: "#4285F4"
  },
  {
    date: "15 Mar",
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and event kickoff",
    icon: Zap,
    color: "#FBBC05"
  },
  {
    date: "15 Mar",
    time: "11:00 AM",
    title: "Hacking Begins!",
    description: "24-hour coding marathon starts",
    icon: Zap,
    color: "#34A853"
  },
  {
    date: "16 Mar",
    time: "11:00 AM",
    title: "Submission Deadline",
    description: "All projects must be submitted",
    icon: Clock,
    color: "#EA4335"
  },
  {
    date: "16 Mar",
    time: "12:00 PM",
    title: "Project Presentations",
    description: "Teams present their solutions to judges",
    icon: Trophy,
    color: "#4285F4"
  },
  {
    date: "16 Mar",
    time: "4:00 PM",
    title: "Winner Announcement",
    description: "Results declared and prize distribution",
    icon: Trophy,
    color: "#FBBC05"
  },
  {
    date: "16 Mar",
    time: "5:00 PM",
    title: "Closing Ceremony",
    description: "Wrap-up and networking session",
    icon: Zap,
    color: "#34A853"
  }
]

const Timeline = () => {
  return (
    <section className="relative w-full bg-white py-12 overflow-hidden">

      <div className="mx-auto max-w-5xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2
            className="cursor-target font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide"
            style={{ fontFamily: "BlueWinter" }}
          >
            <span className="text-[#EA4335]">T</span>
            <span className="text-[#4285F4]">i</span>
            <span className="text-[#FBBC05]">m</span>
            <span className="text-[#34A853]">e</span>
            <span className="text-[#EA4335]">l</span>
            <span className="text-[#4285F4]">i</span>
            <span className="text-[#FBBC05]">n</span>
            <span className="text-[#34A853]">e</span>
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* VERTICAL LINE */}
          <div
            className="
              absolute left-8 sm:left-12
              top-0 bottom-0
              w-1
              bg-black
              hidden md:block
            "
          />

          {/* TIMELINE EVENTS */}
          <div className="space-y-1">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    animation: `slideInTimeline 0.6s ease-out ${index * 0.1}s both`,
                    animationDirection: isEven ? 'normal' : 'reverse'
                  }}
                >
                  {/* DESKTOP LAYOUT */}
                  <div className="hidden md:flex items-center gap-8">

                    {/* DOT */}
                    <div
                      className="
                        relative z-10
                        shrink-0
                        w-16 h-16
                        flex items-center justify-center
                        border-4 border-black
                        bg-white
                        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                      "
                      style={{ backgroundColor: event.color }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* CONTENT */}
                    <div
                      className="
                        cursor-target
                        group
                        flex-1
                        bg-white
                        border-4 border-black
                        p-6
                        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                        transition-all duration-300
                        hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                        hover:translate-x-0.75 hover:translate-y-0.75
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3
                            className="font-bold text-xl sm:text-2xl mb-2"
                            style={{ fontFamily: "BlueWinter", color: event.color }}
                          >
                            {event.title}
                          </h3>
                          <p className="text-gray-700 text-base sm:text-lg">
                            {event.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <div
                            className="
                              inline-block
                              bg-white
                              border-2 border-black
                              px-3 py-1
                              mb-1
                              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                            "
                          >
                            <p
                              className="font-bold text-sm"
                              style={{ fontFamily: "BlueWinter" }}
                            >
                              {event.date}
                            </p>
                          </div>
                          <p className="text-gray-600 text-sm font-mono">
                            {event.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MOBILE LAYOUT */}
                  <div className="md:hidden">
                    <div
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
                    >
                      <div className="flex items-start gap-4 mb-4">
                        {/* ICON */}
                        <div
                          className="
                            shrink-0
                            w-12 h-12
                            flex items-center justify-center
                            border-4 border-black
                            bg-white
                            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                          "
                          style={{ backgroundColor: event.color }}
                        >
                          <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
                        </div>

                        {/* DATE/TIME */}
                        <div>
                          <div
                            className="
                              inline-block
                              bg-white
                              border-2 border-black
                              px-2 py-1
                              mb-1
                              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                            "
                          >
                            <p
                              className="font-bold text-sm"
                              style={{ fontFamily: "BlueWinter" }}
                            >
                              {event.date}
                            </p>
                          </div>
                          <p className="text-gray-600 text-sm font-mono">
                            {event.time}
                          </p>
                        </div>
                      </div>

                      {/* CONTENT */}
                      <h3
                        className="font-bold text-lg mb-2"
                        style={{ fontFamily: "BlueWinter", color: event.color }}
                      >
                        {event.title}
                      </h3>
                      <p className="text-gray-700 text-base">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* FOOTER NOTE */}
        <div
          className="
            cursor-target
            mt-12
            bg-white
            border-4 border-black
            p-6 sm:p-8
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            text-center
          "
        >
          <p
            className="font-bold text-lg sm:text-xl text-black mb-2"
            style={{ fontFamily: "BlueWinter" }}
          >
            Mark Your Calendars! 
          </p>
          <p className="text-gray-600 text-base sm:text-lg">
            All times are in IST. Schedule is subject to minor changes.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes slideInTimeline {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  )
}

export default Timeline