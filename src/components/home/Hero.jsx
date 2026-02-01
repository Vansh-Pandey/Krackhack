import DinoGame from "../ui/DinoGame";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      
      {/* Background Dino Game */}
      <div className="absolute inset-0 z-0">
        <DinoGame />
      </div>

      {/* Foreground Text */}
      <div className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center z-10 pointer-events-none">
        <h1 className="font-mono font-bold tracking-[0.2em] text-[clamp(3rem,8vw,6rem)]">
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

    </div>
  );
};

export default Hero;
