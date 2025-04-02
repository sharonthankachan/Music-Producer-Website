import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/ScrollImageBar1/1.jpg";
import img2 from "../assets/ScrollImageBar1/2.jpg";
import img3 from "../assets/ScrollImageBar1/3.jpg";
import img4 from "../assets/ScrollImageBar1/4.jpg";
import img5 from "../assets/ScrollImageBar1/5.jpg";
import img6 from "../assets/ScrollImageBar1/6.jpg";

import img7 from "../assets/ScrollImageBar2/1.jpg";
import img8 from "../assets/ScrollImageBar2/2.jpg";
import img9 from "../assets/ScrollImageBar2/3.jpg";
import img10 from "../assets/ScrollImageBar2/4.jpg";
import img11 from "../assets/ScrollImageBar2/5.jpg";
import img12 from "../assets/ScrollImageBar2/6.jpg";

const imgArray1 = [img1, img2, img3, img4, img5, img6];
const imgArray2 = [img7, img8, img9, img10, img11, img12];

const ImageScroller = () => {
  return (
    <div className="mt-16 mb-12">
      <Marquee
        speed="130"
        pauseOnHover={true}
        className="h-[400px] overflow-hidden"
      >
        {imgArray1.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Image 1"
            className="object-cover w-[400px] h-[400px] mx-2 hover:scale-105 transition-all duration-300"
          />
        ))}
      </Marquee>

      <Marquee
        speed="130"
        direction="right"
        className="mt-5 h-[400px] overflow-hidden"
        pauseOnHover={true}
      >
        {imgArray2.map((item, index) => (
          <img
            key={index}
            src={item}
            alt="Image 1"
            className="object-cover w-[400px] h-[400px] mx-2 hover:scale-105 transition-all duration-300"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default ImageScroller;
