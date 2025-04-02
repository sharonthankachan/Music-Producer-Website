import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Button from "../Reusable Components/Button";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLargeLine } from "react-icons/ri";
const Navbar = () => {
  const navItems = ["Home", "About", "Music", "Services", "Contact"];

  const [showMenuBar, setShowMenuBar] = useState(false);

  return (
    <>
      <div className="fixed top-0 w-full bg-white z-50">
        <div className="flex justify-between items-center md:h-24 h-14 md:px-12 px-6">
          <img src={logo} className="md:w-12 w-9 mr-10" alt="logo" />
          <div className="hidden md:flex items-center w-full justify-between ">
            <ul className="flex flex-wrap gap-8 font-semibold text-gray-950">
              {navItems.map((item, index) => (
                <li
                  className="hover:text-[#ed2a4f] transition-all duration-300 hover:cursor-pointer"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-8">
              <Button text="Action 1" firstType={true}/>
              <Button text="Action 2" />
            </div>
          </div>
          <button
            className="w-4 md:hidden"
            onClick={() => setShowMenuBar(!showMenuBar)}
          >
            {showMenuBar ? <RiCloseLargeLine /> : <RiMenu3Line />}
          </button>
        </div>
        <div>
          {showMenuBar && (
            <div className="md:hidden  py-6 flex justify-center items-center">
              <ul className="space-y-6 font-semibold w-full text-gray-900">
                {navItems.map((item, index) => (
                  <li
                    className="hover:text-[#ed2a4f] text-center w-full hover:cursor-pointer transition-all duration-100 "
                    key={index}
                  >
                    <span class="relative z-10 font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="md:h-24 h-auto "></div>
    </>
  );
};

export default Navbar;
