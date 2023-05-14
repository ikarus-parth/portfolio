import React from 'react'
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer';

export default function About() {
  return (
    <div className="section" id="about">
      <div className="container flex flex-row gap-4">
      <div className="bg-about bg-no-repeat bg-contain h-[320px] flex-1 mix-blend-lighten bg-top items-center"></div>
      <h2 className="text-[45px] font-bold leading-[0.9] flex"><span className="text-non-link-gradient mx-auto">About Me</span></h2>
      
      </div>
    </div>
  )
}
