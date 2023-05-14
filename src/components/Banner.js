import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiOverleaf } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import AboutImage from "../assets/animeAbout.jpg";
import Typed from "react-typed";
import {Link} from "react-scroll";

export default function Banner() {
  return (
    <div className="section min-h[85vh]" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
        <div className="flex gap-8">
          <div>
            <h1 className="text-[55px] font-bold leading-[0.9]">
              <span className="text-non-link-gradient">PARTH ARORA</span>
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <span>Y'all know me as </span>
              <Typed
                strings={["a Developer", "a Researcher", "an Analyst", "an Arstist"]}
                typeSpeed={35}
                backSpeed={50}
                loop
                className="text-accent"
              />
            </div>
            <p className="max-w-max">
              Welcome to my digital corner! I'm a Developer,
              Researcher, and Analyst with an artistic flair, honed through my
              experiences with two fast-paced startups. My keen understanding of
              modern technologies, coupled with my knack for insightful product
              analysis, allows me to create cutting-edge solutions. Infusing my
              projects with creativity, I adeptly align tech initiatives with
              strategic business goals. Dive into my unique blend of skills and
              portfolio right here.
            </p>
          </div>
          
          <div>
            {/* <img src={AboutImage} className="h-40" /> */}
          </div>
        </div>
        
        <h3><span className="text-non-link-gradient border-b-2">Contact Me</span></h3>
        <div className="flex gap-4 right-4">
        <a href="https://www.linkedin.com/in/the-parth-arora/">
          <ImLinkedin className="hover:text-blue-500"/>
        </a>
        <a href="https://github.com/parth1614">
          <FaGithub className="hover:text-red-500"/>
        </a>
        <a href="https://twitter.com/the_parth_arora">
          <BsTwitter className="hover:text-blue-500"/>
        </a>
        <a href="https://twitter.com/the_parth_arora" className="hover:text-green-500">
          <SiOverleaf />
        </a>
        </div>
        </div>
      </div>
    </div>
  );
}
