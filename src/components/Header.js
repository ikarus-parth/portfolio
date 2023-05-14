import React from "react";
import logo1 from "../assets/logo1.png";
import {Link} from "react-scroll"

export default function Header() {
  return (
    <header className="py-8" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={logo1} className="h-20" />
          </a>
          <Link to="contact" smooth={true}>
          <button className="btn btn-sm my-auto">Let's Work</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
