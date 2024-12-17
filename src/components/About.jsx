import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip", // trigger animation once clip section reached
        start: "center center",
        end: "+=500 center", // to end after 500px
        pin: true,
        pinSpacing: true,
        scrub: 1, // scrub lets the animation works on scroll

        // When you scroll back up, revert the animation to the initial state(use onEnter and onleaveback for reverting the aniamtion back)
        // onEnter: () => {
        //   clipAnimation.play();
        // },
        // onLeaveBack: () => {
        //   clipAnimation.reverse();
        // },

        // if we dont want to use the above onEnter/Leave function we can directly use the below toggle action
        // toggleActions: "play none none reverse",
      },
    });

    clipAnimation.to(".mask-path-clip", {
      width: "95vw",
      height: "99vh",
      border: "0",
    });
  });
  return (
    <div id="about" className="min-h-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[34px] special-font tracking-widest">
          <b>Welcome!!!</b>
        </h2>

        <AnimatedTitle
          title={
            " Disc<b>o</b>ver the worlds <br/> l<b>a</b>rgest shared adventure"
          }
          className="!text-black mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]"
        />

        <span className="about-subtext">
          <p>The Game of Games begins your life, now an epic</p>

          <p>
            The Saga of Sagas begins, its story woven with dreams. You are the
            hero, rising to meet your destiny.
          </p>
        </span>
      </div>
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-path-clip about-image">
          <img
            src="img/about.webp"
            alt="bg"
            className="absolute size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
