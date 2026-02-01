import React from "react"

const images = [
  {
    src: "/gallery/1.jpg",
    alt: "KrackHack Hackathon Moment 1",
  },
  {
    src: "/gallery/2.jpg",
    alt: "KrackHack Hackathon Moment 2",
  },
  {
    src: "/gallery/3.jpg",
    alt: "KrackHack Hackathon Moment 3",
  },
  {
    src: "/gallery/4.jpg",
    alt: "KrackHack Hackathon Moment 4",
  },
  {
    src: "/gallery/5.jpg",
    alt: "KrackHack Hackathon Moment 5",
  },
  {
    src: "/gallery/6.jpg",
    alt: "KrackHack Hackathon Moment 6",
  },
]

const PhotoGallery = () => {
  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* TITLE */}
        <div className="inline-block bg-white border-4 border-black px-6 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="cursor-target font-bubble font-extrabold text-[clamp(1.8rem,4vw,3rem)] tracking-wide">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">a</span>
            <span className="text-[#FBBC05]">l</span>
            <span className="text-[#4285F4]">l</span>
            <span className="text-[#34A853]">e</span>
            <span className="text-[#EA4335]">r</span>
            <span className="text-[#4285F4]">y</span>
          </h2>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            gap-8
          "
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="
                cursor-target
                group
                relative
                bg-white
                border-4 border-black
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                overflow-hidden
                transition-transform duration-300
                hover:-translate-x-1 hover:-translate-y-1
              "
            >
              {/* IMAGE */}
              <img
                src={img.src}
                alt={img.alt}
                className="
                  w-full h-full
                  object-cover
                  aspect-square
                  transition-transform duration-500
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}
              <div
                className="
                  absolute inset-0
                  bg-black/0
                  group-hover:bg-black/10
                  transition-colors duration-300
                "
              />

              {/* INDEX TAG */}
              <div
                className="
                  absolute top-3 left-3
                  bg-white border-2 border-black
                  px-2 py-1
                  font-monospace text-xs
                  shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                "
              >
                #{index + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PhotoGallery
