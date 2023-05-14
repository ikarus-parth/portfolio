import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import {FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    // <div className="flex flex-col gap-4" >
      <>
      <div className="border-t-2 max-w-[80vw] mx-auto" >
     <div className="flex flex-row justify-between">
     <span className="text-non-link-gradient">
      &copy; 2023 <span className="text-non-link-gradient">Parth Arora</span>
      </span>
      <div className="flex flex-row gap-4 my-auto">
      <a href="https://twitter.com/the_parth_arora">
          <BsTwitter className="hover:text-blue-500"/>
        </a>
        <a href="https://instagram.com/the_parth_arora">
          <FaInstagram className="hover:text-accent"/>
        </a>
        <a href="https://www.linkedin.com/in/the-parth-arora/">
          <ImLinkedin className="hover:text-blue-500"/>
        </a>
      </div>
     </div>
      </div>
     
      </>
    // </div>
  )
}
