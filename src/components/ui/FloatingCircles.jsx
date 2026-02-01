const FloatingCircles = () => {
  const circles = [
    { color: '#EA4335', size: 80, duration: 20, delay: 0 },
    { color: '#4285F4', size: 120, duration: 25, delay: 2 },
    { color: '#FBBC05', size: 60, duration: 18, delay: 4 },
    { color: '#34A853', size: 100, duration: 22, delay: 1 },
    { color: '#EA4335', size: 90, duration: 24, delay: 3 },
    { color: '#4285F4', size: 70, duration: 19, delay: 5 },
    { color: '#FBBC05', size: 110, duration: 21, delay: 2.5 },
    { color: '#34A853', size: 85, duration: 23, delay: 0.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full opacity-15 border-2"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            borderColor: circle.color,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float-${index % 4} ${circle.duration}s ease-in-out infinite`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -40px) scale(1.1); }
          50% { transform: translate(-20px, -80px) scale(0.9); }
          75% { transform: translate(-50px, -40px) scale(1.05); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-40px, 30px) scale(0.95); }
          50% { transform: translate(60px, 70px) scale(1.1); }
          75% { transform: translate(30px, 40px) scale(0.9); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(50px, 50px) scale(1.05); }
          50% { transform: translate(-30px, 90px) scale(0.95); }
          75% { transform: translate(-60px, 30px) scale(1.1); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(-50px, -30px) scale(0.9); }
          50% { transform: translate(40px, -70px) scale(1.1); }
          75% { transform: translate(20px, -50px) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

export default FloatingCircles;