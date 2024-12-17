import gsap from "gsap";
import { useEffect, useRef } from "react";

const AnimatedTitle = ({ title, className }) => {
  const containerRef = useRef();

  useEffect(() => {
    const context = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100px bottom", // start at 100px and bottom of the container
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });
      titleAnimation.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.02, // used for giving a time bw each word
      });
    }, containerRef);

    return () => context.revert();
  }, []);

  console.log(title);

  return (
    <div ref={containerRef} className={`animated-title ${className}`}>
      {title.split("<br/>").map((line, index) => (
        <div className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
          {line.split(" ").map((word, i) => (
            <span
              key={i}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
