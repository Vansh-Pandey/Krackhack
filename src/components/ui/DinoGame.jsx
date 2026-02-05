import { useState } from 'react';

const DinoGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartGame = () => {
    setIsPlaying(true);

    // Simulate spacebar press to start the game
    setTimeout(() => {
      const iframe = document.getElementById('dino-game-iframe');
      if (iframe && iframe.contentWindow) {
        try {
          const spaceEvent = new KeyboardEvent('keydown', {
            key: ' ',
            keyCode: 32,
            code: 'Space',
            which: 32,
            bubbles: true
          });
          iframe.contentWindow.document.dispatchEvent(spaceEvent);
        } catch (e) {
          console.log('Cross-origin iframe access');
        }

        // Immediately return focus to main window
        iframe.blur();
        window.focus();
        document.body.focus();
      }
    }, 100);
  };

  return (
    <div className="relative w-full h-full pointer-events-auto">
      {/* Start Game Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-white/90 backdrop-blur-sm pointer-events-auto">
          <button
            onClick={handleStartGame}
            className="cursor-target px-10 py-4 bg-white border-4 border-black font-mono font-bold text-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 active:shadow-none active:translate-x-1.5 active:translate-y-1.5"
            style={{ fontFamily: "BlueWinter" }}
          >
           CLICK TO START GAME
          </button>
        </div>
      )}

      {/* Game Iframe */}
      <iframe
        id="dino-game-iframe"
        src="/t-rex-runner-gh-pages/index.html"
        title="Dino Game"
        className="w-full h-full border-none bg-white"
        tabIndex="-1"
        style={{ pointerEvents: isPlaying ? 'auto' : 'none' }}
      />

    </div>
  );
};

export default DinoGame;