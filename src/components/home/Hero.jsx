import DinoGame from "../ui/DinoGame";
import FloatingCircles from "../ui/FloatingCircles";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* Floating Circles Background */}
      <FloatingCircles />

      {/* Upper Section - Dino Game (Reduced Size) */}
      <div className="absolute top-0 left-0 w-full h-[35vh] z-10">
        <DinoGame />
      </div>

      {/* Centered Content (Overlapping Everything) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
        
        {/* KRACKHACK Heading - Box Style */}
        <div className="bg-white border-4 border-black px-8 py-6 mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h1 className="font-mono font-bold tracking-[0.2em] text-[clamp(2.5rem,7vw,5rem)] leading-none">
            <span className="text-[#EA4335]">K</span>
            <span className="text-[#EA4335]">R</span>
            <span className="text-[#4285F4]">A</span>
            <span className="text-[#FBBC05]">C</span>
            <span className="text-[#4285F4]">K</span>
            <span className="text-[#34A853]">H</span>
            <span className="text-[#EA4335]">A</span>
            <span className="text-[#4285F4]">C</span>
            <span className="text-[#34A853]">K</span>
          </h1>
        </div>

        {/* Buttons - Box Style */}
        <div className="flex gap-6 pointer-events-auto">
          <button className="cursor-target px-8 py-4 bg-white border-4 border-[#EA4335] text-[#EA4335] font-mono font-bold text-lg shadow-[6px_6px_0px_0px_#EA4335] hover:shadow-[2px_2px_0px_0px_#EA4335] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 active:shadow-none active:translate-x-[6px] active:translate-y-[6px]">
            REGISTER
          </button>
          <button className="cursor-target px-8 py-4 bg-white border-4 border-[#4285F4] text-[#4285F4] font-mono font-bold text-lg shadow-[6px_6px_0px_0px_#4285F4] hover:shadow-[2px_2px_0px_0px_#4285F4] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 active:shadow-none active:translate-x-[6px] active:translate-y-[6px]">
            LEARN MORE
          </button>
        </div>
      </div>

    </div>
  );
};

export default Hero;