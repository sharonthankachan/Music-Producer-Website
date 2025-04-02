import React from "react";
import logo from "../assets/footer_logo.png";
import Button2 from "../Reusable Components/Button2";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const explore = ["Home", "About", "Services", "Contact", "Instagram"];
  const connect = ["Twitter", "Facebook", "Youtube", "SoundCloud", "LinkedIn"];
  const followUs = [
    {
      icon: <FaFacebookSquare />,
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
    },
    {
      icon: <FaTwitter />,
      name: "X",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
    },
    {
      icon: <FaYoutube />,
      name: "Youtube",
    },
  ];
  return (
    <div className="md:px-20 px-12 ">
      <div className="md:flex md:space-x-16 border-b pb-6 border-black mb-20">
        <div className="space-y-6">
          <img src={logo} alt="logo" className="w-36" />
          <p>
            Subscribe to our newsletter for the latest updates on new features
            and product releases.
          </p>
          <div className="flex gap-5 flex-wrap">
            <input
              type="text"
              style={{ fontFamily: "roboto" }}
              className="border py-3 px-4 border-black flex-1 text-base focus:outline focus:outline-[#ed2a4f] focus placeholder:text-gray-500 placeholder:text-center placeholder:"
              placeholder="Enter your email"
            />
            <Button2 width="w-full lg:w-auto" text="Subscribe" />
          </div>
          <p className="text-xs" style={{ fontFamily: "roboto" }}>
            Stay updated with our latest releases and news.
          </p>
        </div>
        <div className="flex justify-between mt-6 gap-20 px-10">
          <div>
            <h1 className="font-bold text-lg">Explore</h1>
            <ul className="mt-6 space-y-2">
              {explore.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Connect</h1>
            <ul className="mt-6 space-y-2">
              {connect.map((item, index) => (
                <li className="" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-lg">Follow Us</h1>
            <ul className="mt-6 space-y-6">
              {followUs.map((item, index) => (
                <li className="flex items-center" key={index}>
                  <p className="text-2xl mr-3">{item.icon}</p>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
