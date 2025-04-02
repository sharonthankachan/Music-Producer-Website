import React from "react";

const ContactDetailsCard = ({icon,heading,socialMedia,link}) => {
  return (
    <div className=" max-w-[23rem]">
      <div className="flex justify-center">
        {icon}
      </div>
      <h1
        className="text-center mt-6 text-[1.65rem] font-semibold"
        id="custom_font"
      >
        {heading}
      </h1>
      <p className="text-center mt-4 text-lg text-gray-800">
        {socialMedia}
      </p>
      <p className="text-center mt-6 text-gray-800">
        {link}
      </p>
    </div>
  );
};

export default ContactDetailsCard;
