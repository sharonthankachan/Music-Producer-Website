import React, { useState, useEffect } from "react";
import img1 from "../assets/about_img1.jpg";
import img2 from "../assets/about_img2.jpg";
import img3 from "../assets/about_img3.jpg";

const preloadImages = (images) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

const About = () => {
  const data = [
    {
      id: 1,
      title: "Professional Music Production",
      desc: "High-quality music production services tailored to your needs",
      img: img1,
    },
    {
      id: 2,
      title: "Custom Soundtrack Creation",
      desc: "Create custom soundtracks for films and commercials",
      img: img2,
    },
    {
      id: 3,
      title: "Artist Collaborations",
      desc: "Collaborate with top artists and bands",
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
    <div className="mt-36">
      <div className="lg:flex lg:justify-center lg:gap-x-10 mb-20 lg:mx-20 mx-12">
        <div className="relative lg:w-[554px] w-full lg:h-[341px] h-56 sm:h-96 overflow-hidden">
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
        <div className="lg:ml-10 mt-10 lg:mt-0 space-y-7">
          {data.map((item) => (
            <div
              onClick={() => handleTabChange(item.id)}
              key={item.id}
              className={`pl-7 cursor-pointer py-1 space-y-6 ${
                activeTab === item.id
                  ? "border-l-2 border-gray-900"
                  : "border-l-2 border-white"
              }`}
            >
              <h1 id="custom_font" className="text-4xl font-semibold">
                {item.title}
              </h1>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
