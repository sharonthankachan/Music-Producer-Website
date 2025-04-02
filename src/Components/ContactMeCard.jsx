import React from "react";
import Button2 from "../Reusable Components/Button2";

const ContactMeCard = () => {
  return (
    <div className=" lg:px-20 px-12 pb-20 pt-16">
      <div className="relative flex group bg-slate-100 justify-center hover:scale-110 transition-all duration-300">
        <div className="lg:h-[300px] h-[550px] md:h-[400px] bg-[#ccc7d6] w-full rotate-[1.3deg] group-hover:rotate-[-2.5deg] transition-all duration-300"></div>
        <div className="lg:h-[300px] h-[550px] md:h-[400px] bg-[#aea7bf] w-full absolute  rotate-[1.3deg] group-hover:rotate-[-0.5deg] transition-all duration-300"></div>
        <div className="lg:h-[300px] h-[550px] md:h-[400px] px-16 absolute w-full bg-[#ccc7d6] flex items-center group-hover:text-white justify-between group-hover:bg-black  rotate-[-0.5deg] group-hover:rotate-[-1.5deg] transition-all duration-300">
          <div className="md:flex justify-between items-center w-full">
            <div className="lg:space-y-6 mr-9 space-y-7 ">
              <h1 id="custom_font" className="text-4xl leading-[3.5rem] font-semibold">
                Ready to take your music to the next level?
              </h1>
              <p className="leading-7 text-[18px] text-gray-800 group-hover:text-[#e6ebe0] transition-all duration-300 font-medium">
                Let's work together to create the perfect sound for your next
                project.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center md:flex-none">
              <Button2 text={"Contact Me"} firstType={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeCard;
