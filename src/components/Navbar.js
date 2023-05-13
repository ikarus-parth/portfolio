import React from "react";
import { BiHomeAlt, BiUserCircle } from "react-icons/bi";
import {BsClipboardData,BsBriefcase} from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div
          className="bg-black/20 w-full h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] 
        mx-auto px-7 flex justify-between text-2x1 text-white/50"
        >
          {/* <div className="my-auto"> */}
          <Link className="my-auto">
            <BiHomeAlt className="" />
          </Link>
          <Link className="my-auto">
            <BiUserCircle className="" />
          </Link>
          <Link className="my-auto">
            <BsClipboardData className="" />
          </Link>
          <Link className="my-auto">
            <BsBriefcase className="" />
          </Link>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
}
