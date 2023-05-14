import React from "react";

export default function Contact() {
  return (
    <div className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                Let's work <br />
                together
              </h2>
            </div>
          </div>
          <form className="flex-1">
            <input
              className="bg-transparent py-3 border-b outline-none focus:border-accent placeholder:text-white transition-all w-full"
              type="text"
              placeholder="Your Email"
            />
            <input
              className="bg-transparent py-3 border-b outline-none focus:border-accent placeholder:text-white transition-all w-full"
              type="text"
              placeholder="Your Name"
            />
            <textarea className="bg-transparent py-12 border-b outline-none focus:border-accent placeholder:text-white transition-all w-full resize-none mb-12" placeholder="Type Your Message Here...">

            </textarea>
            <button className="btn btn-lg">Send Message</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}
