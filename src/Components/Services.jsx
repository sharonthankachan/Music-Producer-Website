import React, { useState, useEffect } from "react";
import img1 from "../assets/Services/1.jpg";
import img2 from "../assets/Services/2.jpg";
import img3 from "../assets/Services/3.jpg";

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const Services = () => {
  const data = [
    {
      id: 1,
      title: "Professional Music Production",
      desc: "Experience top-notch music production services tailored to your needs.",
      img: img1,
    },
    {
      id: 2,
      title: "Collaborate with Industry Experts",
      desc: "Work with seasoned professionals in the music industry to elevate your sound.",
      img: img2,
    },
    {
      id: 3,
      title: "Customized Sound Design",
      desc: "Get unique and personalized sound design services to make your music stand out.",
      img: img3,
    },
  ];

  const [activeTab, setActiveTab] = useState(data[0].id);

  useEffect(() => {
    preloadImages(data.map((item) => item.img));
  }, [data]);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="mt-20">
      <div className="lg:grid grid-cols-2 mb-20 lg:mx-20 mx-12">
        <div className="space-y-5">
          {data.map((item) => (
            <div
              onClick={() => handleTabChange(item.id)}
              key={item.id}
              className={`pl-7 mr-12 cursor-pointer py-1 ${
                activeTab === item.id
                  ? "border-l-2 border-gray-900"
                  : "border-l-2 border-white"
              }`}
            >
              <h1 id="custom_font" className="text-4xl leading-relaxed font-semibold">
                {item.title}
              </h1>
              <p className="mt-3">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="relative lg:ml-10 mt-10 lg:mt-0 lg:w-[554px] w-full lg:h-[466px] h-56 sm:h-96 overflow-hidden">
          {data.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt="about section"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                activeTab === item.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
