import { useRef } from "react";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currIndex, setCurrIndex] = useState(1); // for current playing video
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setIsLoading] = useState(false);

  const totalVids = 4;
  const nextVidRef = useRef(null);

  const getVidSrc = (index) => `videos/hero-${index}.mp4`; //vids path from public
  console.log(getVidSrc(currIndex + 1));

  const upcomingVidIndex = (currIndex % totalVids) + 1;

  const handleMiniVidClick = () => {
    setHasClicked(true);
    // setCurrIndex((prev) => prev + 1);
    setCurrIndex(upcomingVidIndex);
  };
  const handleVideoLoad = () => {};

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="z-10 relative h-full w-100 rounded-lg bg-blue-75"
      >
        <div>
          <div className="z-20 mask-clip-path absolute-center rounded-lg cursor-pointer overflow-hidden">
            <div
              className="origin-center opacity-0 scale-50 hover:scale-100 hover:opacity-100 transition-all duration-300"
              onClick={handleMiniVidClick}
            >
              <video
                ref={nextVidRef}
                src={getVidSrc(upcomingVidIndex)} // smaller one will always have the next video src
                loop
                muted
                className="size-72 scale-150 object-cover"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          {/* zoom effect video element below */}
          <video
            ref={nextVidRef}
            src={getVidSrc(currIndex)}
            loop
            muted
            autoPlay
            className="absolute-center invisible size-64 scale-150 object-cover"
          />

          <video
            src={getVidSrc(currIndex === totalVids - 1 ? 1 : currIndex)}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
        <div className="absolute top-5 left-5 z-30 text-blue-75">
          <h1 className="special-font hero-heading">
            Redefi<b>n</b>e
          </h1>
          <p className="font-robert-medium max-w-64 text-lg">
            Enter the MetaGame Layer <br />
            Unleash the Play Economy
          </p>
          <CustomButton
            icon={<TiLocationArrow />}
            title="Watch Trailer"
            id="watch-trailer"
            className="!bg-yellow-300 mt-4 hover:!bg-yellow-400 transition-all duration-200"
          />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-30 text-blue-75">
          G<b>a</b>ming
        </h1>
        {/* below one is used for showing once we scroll the UI */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
          G<b>a</b>ming
        </h1>
      </div>
    </div>
  );
};

export default Hero;