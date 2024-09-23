import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import pic from "../../src/assets/image.png";

function Home() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md: mt24 space-y-2 order-2 md:order-1">
            <span>Welcome in My PORTFOLIO</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h2>Hello,I am a</h2>
              {/* <ReactTyped
                strings={["Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input type="text" />
              </ReactTyped> */}
            </div>
            <div className="flex space-x-1 text-2xl md:text-4xl text-blue-500">
              <ReactTyped
                className="text-blue-500"
                strings={["Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                attr="placeholder"
                loop
              >
                <input type="text" />
              </ReactTyped>
            </div>
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              assumenda ex error eos at aut id rem. Nostrum sed totam autem
              voluptate corrupti officiis error, magni libero, quibusdam
              eligendi voluptates!
            </p>

            <br />
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
              <h1 className="font-bold">Available on</h1>
              <ul className="flex space-x-5">
                <li>
                  <a href="https://www.facebook.com/nilduniar.azobpakhi">
                  <FaFacebook className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/md-zuel-rana-21004a26a/">
                  <FaLinkedin className="text-2xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/MdZuelRana0">
                <FaSquareXTwitter className="text-xl md:text-2xl hover:scale-100 duration-200 rounded full border-[2px]" />
                </a>
                </li>
                <li>
                  <FaTelegram className="text-2xl cursor-pointer" />
                </li>
              </ul>
              </div>

              <div className="space-y-3  ml-20">
                <h1 className="font-bold">Currently Working on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaReact className="text-xl md:text-2xl hover:scale-100 duration-200 rounded full border-[2px]" />
                  </li>
                  <li>
                    <RiTailwindCssFill className="text-xl md:text-2xl hover:scale-100 duration-200 rounded full border-[2px]" />
                  </li>
                  <li>
                  <TbBrandJavascript className="text-2xl cursor-pointer" />
                    
                  </li>
                  <li>
                    <FaBootstrap className="text-xl md:text-2xl hover:scale-100 duration-200 rounded full border-[2px]" />
                  </li>
                  <li>
                    <FaHtml5 className="text-xl md:text-2xl hover:scale-100 duration-200 rounded full border-[2px]" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:width-[450px] md:height-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
