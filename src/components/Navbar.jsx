/* eslint-disable react-hooks/exhaustive-deps */
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];
  const navRef = useRef();
  const audioRef = useRef();

  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const { y: currentYScroll } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentYScroll === 0) {
      setIsNavVisible(true);
      navRef.current.classList.remove("floating-nav-bg");
    } else if (currentYScroll > lastScrollY) {
      setIsNavVisible(false);
      navRef.current.classList.add("floating-nav-bg");
    } else if (currentYScroll < lastScrollY) {
      setIsNavVisible(true);
      navRef.current.classList.add("floating-nav-bg");
    }

    setLastScrollY(currentYScroll);
  }, [currentYScroll]);

  useEffect(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 100 : 0,
      duration: 0.1,
    });
  }, [isNavVisible]);

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
      className="fixed sm:top-3 inset-x-0 z-50 h-16 border-0 duration-500 transition-all sm:inset-x-3"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex items-center justify-between">
          <img
            className="w-12"
            src="/img/logo.png"
            alt="nav-logo"
            onClick={() => window.scrollTo(0, 0)}
          />

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
            className="flex gap-1 mr-2"
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
