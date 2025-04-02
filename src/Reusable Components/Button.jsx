import React from "react";

const Button = ({ text, firstType, height, width,onClick, ...rest }) => {
  const type1 = "bg-[#ed2a4f] text-[#e6ebe0]";
  const type2 = "bg-white text-[#ed2a4f]";
  const hgt = height || "h-[42px]";
  const wdt = width || "w-[120px]";
  return (
    <button
      onClick={onClick}
      class={`${
        firstType ? type1 : type2
      } hover:before:bg-gray-800 relative ${hgt} ${wdt} overflow-hidden border-[2px] border-[#ed2a4f] hover:border-gray-400 px-3  transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gray-800 before:transition-all before:duration-200 hover:text-[#e6ebe0] hover:before:left-0 hover:before:w-full`}
      {...rest}
    >
      <span class="relative z-10 font-bold">{text}</span>
    </button>
  );
};

export default Button;
