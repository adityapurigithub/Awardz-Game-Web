import Tilt from "react-parallax-tilt";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-blue-50">
            Into the Meta Game Layer
          </p>
        </div>
        <p className="max-w-md mb-6 text-lg text-blue-50 opacity-70">
          Immerse yourself in a Rich & ever-expanding universe where a vibrant
          array of products converge into a interconnected overlay exericence of
          your world
        </p>
        <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} transitionSpeed={1000}>
          <div className="border-hsla relative mb-6 h-96 w-full md:h-[65vh] overflow-hidden rounded-md">
            <BentoCard
              videoSrc="videos/feature-1.mp4"
              title={
                <>
                  R<b>A</b>DI<b>A</b>NT
                </>
              }
              description="A cross-platform metagame app, turning your activity across Web2 & Web3 games into rewarding adventure."
            />
          </div>
        </Tilt>
        <div className="grid grid-cols-2 gap-6 mb-6  h-[100vh] w-full overflow-hidden rounded-md">
          <div className="bento-tilt_1 row-span-1 md:row-span-2 md:col-span-1 border-hlsa">
            <BentoCard
              videoSrc="videos/feature-2.mp4"
              title={
                <>
                  Z<b>!</b>G<b>M</b>A
                </>
              }
              description="A cross-platform metagame app, turning your activity across Web2 & Web3 games into rewarding adventure."
            />
          </div>
          <div className="bento-tilt_1 md:col-span-1 border-hlsa">
            <BentoCard
              videoSrc="videos/feature-4.mp4"
              title={
                <>
                  AZ<b>U</b>r<b>E</b>
                </>
              }
              description="A cross world AI Agent - Elevating your gameplay to be more fun and productive."
            />
          </div>
          <div className="bento-tilt_1 md:col-span-1 border-hlsa">
            <BentoCard
              videoSrc="videos/feature-3.mp4"
              title={
                <>
                  N<b>E</b>X<b>U</b>S
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
            />
          </div>

          <div className="bento-tilt_2 bento-title special-font bg-violet-300 md:p-5 p-3">
            <h1 className="max-w-64 text-black">
              M<b>O</b>re C<b>O</b>m<b>I</b>ng So<b>o</b>n!
            </h1>
            <TiLocationArrow className="absolute right-4 bottom-5 scale-[2]" />
          </div>
          <div className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
