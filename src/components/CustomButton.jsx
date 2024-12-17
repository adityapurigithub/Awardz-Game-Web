import React from "react";

const CustomButton = ({ icon, title, id, className, onClick }) => {
  return (
    <button
      className={`group relative z-10 w-fit cursor-pointer rounded-full bg-violet-50 px-5 py-3 flex-center gap-1 text-black ${className}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs uppercase font-general">{title}</span>
    </button>
  );
};

export default CustomButton;
