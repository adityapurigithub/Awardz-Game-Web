import React from "react";

const BentoCard = ({ videoSrc, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        className="absolute inset-0 object-cover object-center size-full"
        src={videoSrc}
        autoPlay
        muted
        loop
      />
      <div className="z-10 relative flex flex-col md:p-5 p-3 special-font text-blue-75">
        <h1 className="bento-title">{title}</h1>
        <p className="mt-3 md:text-base text-sm max-w-sm">{description}</p>
      </div>
    </div>
  );
};

export default BentoCard;
