import DinoGame from "../ui/DinoGame";
import FloatingCircles from "../ui/FloatingCircles";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">

      <div className="absolute top-0 left-0 w-full z-30">
        <div
          className="
      bg-white border-b-4 border-black
      shadow-[0_6px_0px_0px_rgba(0,0,0,1)]
      h-[28vh]
      sm:h-[30vh]
      md:h-[32vh]
      lg:h-[35vh]
      xl:h-[38vh]
    "
        >
          <div className="flex gap-2 px-4 py-2 border-b-4 border-black">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-400 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          <div className="h-full w-full overflow-hidden">
            <DinoGame />
          </div>
        </div>
      </div>



      <div
        className="
    absolute inset-0
    flex flex-col items-center justify-center
    pt-[32vh]
    sm:pt-[34vh]
    md:pt-[36vh]
    lg:pt-[38vh]
    pointer-events-none
    z-40
  "
      >


        <div
          className="cursor-target
    bg-white border-4 border-black
    px-6 py-4
    sm:px-8 sm:py-6
    md:px-10 md:py-7
    shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
    max-w-[90vw]
  "
        >
          <h1
            className="
    flex justify-center
    font-bluewinter font-extrabold
    tracking-[0.12em]
    sm:tracking-[0.15em]
    md:tracking-[0.18em]
    text-[clamp(2.2rem,6vw,5rem)]
    leading-none
    whitespace-nowrap
  " style={{ fontFamily: "BlueWinter" }}
          >
            {"KRACKHACK".split("").map((char, i) => (
              <span
                key={i}
                className="
    inline-block
    font-bluewinter
    animate-bubble-pop
    transition-transform duration-200 ease-bubble
    hover:scale-108
    cursor-default
  "
                style={{ animationDelay: `${i * 0.08}s` }}
              >

                <span className={
                  [
                    "text-[#EA4335]",
                    "text-[#EA4335]",
                    "text-[#4285F4]",
                    "text-[#FBBC05]",
                    "text-[#4285F4]",
                    "text-[#34A853]",
                    "text-[#EA4335]",
                    "text-[#4285F4]",
                    "text-[#34A853]",
                  ][i]
                }>
                  {char}
                </span>
              </span>
            ))}
          </h1>

        </div>
        <div
          className="
    flex flex-col
    sm:flex-row
    gap-4 sm:gap-6 md:gap-8
    mt-10 sm:mt-12 md:mt-16
    pointer-events-auto
  "
        >


          <button
            className="
    cursor-target
    w-full sm:w-auto
    px-8 sm:px-10 md:px-12
    py-4 sm:py-5 md:py-6
    bg-white
    border-4 border-[#EA4335]
    text-[#EA4335]
    font-bubble font-bold
    text-base sm:text-lg md:text-xl
    shadow-[6px_6px_0px_0px_#EA4335]
    hover:shadow-[3px_3px_0px_0px_#EA4335]
    hover:translate-x-1 hover:translate-y-1
    transition-all duration-200
    active:shadow-none
  "
          >
            REGISTER
          </button>
          <button
            className="
    cursor-target
    w-full sm:w-auto
    px-8 sm:px-10 md:px-12
    py-4 sm:py-5 md:py-6
    bg-white
    border-4 border-[#4285F4]
    text-[#4285F4]
    font-monospace font-bold
    text-base sm:text-lg md:text-xl
    shadow-[6px_6px_0px_0px_#4285F4]
    hover:shadow-[3px_3px_0px_0px_#4285F4]
    hover:translate-x-1 hover:translate-y-1
    transition-all duration-200
    active:shadow-none
  "
          >
            LEARN MORE
          </button>


        </div>
      </div>

    </div>
  );
};

export default Hero;