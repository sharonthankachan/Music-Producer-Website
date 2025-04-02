import React from "react";
import Button2 from "../Reusable Components/Button2";

const Hero = () => {
  return (
    <div className="">
      <div className=" md:px-16 px-3">
        <h1
          id="custom_font"
          className=" font-extrabold text-gray-950 text-5xl mt-24 text-center"
        >
          Medium length hero headline goes here
        </h1>

        <p className="text-center md:px-9 mt-10 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="flex justify-center space-x-5 mt-8">
            <Button2 firstType={true} text={"Main action"}/>
            <Button2  text={"Secondary action"}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
