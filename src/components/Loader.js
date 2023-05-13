import React from "react";
import { BlobLoader } from "react-loaders-kit";
import Typed from "react-typed";
import "../styles/loader.css";

export default function Loader() {
  const loaderProps = {
    loading: true,
    size: 40,
    duration: 1.5,
    colors: ["#5e22f0", "#f6b93b"],
  };
  return (
    // <div className="bg-black h-screen flex flex-col">
    //   <div className="m-auto">
    //     <div className="flex flex-col gap-2">
    //       <div className="w-max m-auto"><BlobLoader {...loaderProps} /></div>
    //       <div className="w-max">
    //         <Typed strings={["Ahoy Sailor..!"]} typeSpeed={40} />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-black h-screen flex flex-col">
      <div className="m-auto">
     <div className="flex flex-col gap-2">
     <ul className="loader">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="text-[#635863]"><Typed strings={["Vintage Jukebox Loading..."]} typeSpeed={35} /></div>
     </div>
      </div>
      
    </div>
  );
}
