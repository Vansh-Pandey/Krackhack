import { useMemo } from "react";

const COLORS = ["#EA4335", "#4285F4", "#FBBC05", "#34A853"];

const FloatingCircles = () => {
  const circles = useMemo(
    () =>
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 80 + 60,   // 60–140px
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 5,
        floatType: Math.floor(Math.random() * 4),
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color, // PURE Google colors
            opacity: 1,                  // solid but subtle
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            animation: `float-${circle.floatType} ${circle.duration}s ease-in-out infinite alternate`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes float-0 {
          to { transform: translate(120px, -80px); }
        }
        @keyframes float-1 {
          to { transform: translate(-100px, 100px); }
        }
        @keyframes float-2 {
          to { transform: translate(140px, 120px); }
        }
        @keyframes float-3 {
          to { transform: translate(-120px, -140px); }
        }
      `}</style>
    </div>
  );
};

export default FloatingCircles;
