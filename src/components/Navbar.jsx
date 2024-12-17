import React, { useEffect, useRef, useState } from "react";

const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
const Navbar = () => {
  const navRef = useRef();
  const audioRef = useRef();

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  console.log(isAudioPlaying);

  useEffect(() => {
    if (isAudioPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isAudioPlaying]);

  return (
    <div
      ref={navRef}
      className="fixed inset-x-0 z-50 h-16 border-0 duration-500 transition-all sm:inset-x-5"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="size-full flex items-center justify-between">
          <img className="w-12" src="/img/logo.png" alt="nav-logo" />

          <div className="lg:flex hidden">
            {navItems.map((item) => (
              <a
                key={item}
                className="nav-hover-btn"
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="ml-2 flex gap-1"
            onClick={() => setIsAudioPlaying((prev) => !prev)}
          >
            <audio className="hidden" src="/audio/loop.mp3" ref={audioRef} />
            {[1, 2, 3, 4].map((bar) => (
              <div
                key={bar}
                className={`indicator-line ${isAudioPlaying ? "active" : ""}`}
                style={{
                  animationDelay: `${bar * 0.1}s`,
                }}
              />
            ))}
          </button>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
