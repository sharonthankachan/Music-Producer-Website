import React from "react";
import TestimonialCard from "../Reusable Components/TestimonialCard";
import { Testimonialdata } from "../JsonData/TestimonialData";

const Testimonials = () => {
 

  return (
    <div className="lg:px-20 px-12 mt-20">
      <div className="lg:flex justify-center mb-24">
        <div className="">
          <h1 id="custom_font" className="text-center text-4xl font-semibold">
            Testimonials
          </h1>
          <p className="text-center xl:max-w-[37rem] text-base mt-8">
            Working with this music producer has been a game-changer for my
            career. Their attention to detail and creative input have elevated
            my songs to a whole new level.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mb-24">
        {Testimonialdata.map((item, index) => (
          <TestimonialCard
            key={index}
            image={item.image}
            name={item.name}
            profession={item.profession}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
