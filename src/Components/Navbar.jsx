import React, { useState } from "react";
import pic from "../../src/assets/image.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Contact",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Skill",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 bg-gray-500 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-20 ">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl text-white cursor-pointer">
              Md Zue<span className="text-green-500 text-2xl">l</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          <div className="">
            <ul className="hidden md:flex text-white space-x-8">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {/* {menu ? <IoMdMenu size={24} /> : <IoMdClose size={24} />} */}
              {menu ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
            </div>
          </div>
        </div>
        {menu && (
            <div className="">
            <ul className="md:hidden flex flex-col text-white h-screen items-center justify-center space-y-3">
              {navItems.map(({ id, text }) => (
                <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>{text}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
