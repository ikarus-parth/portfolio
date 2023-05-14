import React from "react";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import {BsClipboardData,BsBriefcase} from "react-icons/bs";
import {RiContactsLine} from "react-icons/ri";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="bg-black/20 w-full h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] 
        mx-auto px-10 flex justify-between text-2x1 text-white/50"
        >
          {/* <div className="my-auto"> */}
          <Link to="home" className="my-auto cursor-pointer" activeClass="active" smooth={true} spy={true}>
            <BiHomeAlt className="w-[60px] h-[25px] hover:text-white" />
          </Link>
          <Link to="about" className="my-auto cursor-pointer" activeClass="active" smooth={true} spy={true}>
            <BiUserCircle className="w-[60px] h-[25px] hover:text-white" />
          </Link>
          <Link to="skills" className="my-auto cursor-pointer" activeClass="active" smooth={true} spy={true}>
            <BsClipboardData className="w-[60px] h-[25px] hover:text-white" />
          </Link>
          <Link to="projects" className="my-auto cursor-pointer" activeClass="active" smooth={true} spy={true}>
            <BsBriefcase className="w-[60px] h-[25px] hover:text-white" />
          </Link>
          <Link to="contact" className="my-auto cursor-pointer" activeClass="active" smooth={true} spy={true}>
            <RiContactsLine className="w-[60px] h-[25px] hover:text-white" />
          </Link>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
}
