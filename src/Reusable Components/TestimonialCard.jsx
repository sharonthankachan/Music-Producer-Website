import React from "react";

const TestimonialCard = ({ image, name, profession, description, ...rest }) => {
  return (
      <div className="relative min-h-64 xl:min-h-52 group" {...rest}>
        <div className="bg-[#aea7bf] h-full group-hover:rotate-[3deg] transition-all duration-300"></div>
        <div className="bg-[#ccc7d6] h-full p-8 group-hover:rotate-[-3deg] absolute top-0 w-full transition-all duration-300">
          <div className="flex">
            <div className="overflow-hidden w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <img
                src={image}
                alt="image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg">{name}</p>
              <p>{profession}</p>
            </div>
          </div>
          <p className="mt-6 pb-12">{description}</p>
        </div>
      </div>
  );
};

export default TestimonialCard;
