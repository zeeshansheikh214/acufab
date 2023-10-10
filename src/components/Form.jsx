import Image from "next/image";
import React from "react";
import { contact } from "@/assets";

const Form = () => {
  return (
    <div className="grid gap-12 grid-cols-3 bg-[#373E51]">
      <div className="col-span-1 contact-bg"></div>
      <div className="col-span-2 pt-20 pb-10">
        <div className="content lg:text-left sm:text-center w-3/4 font-bold relative">
          <h2 className="absolute text-[9rem] uppercase font-extrabold text-white/10 -top-24 -left-8">
            REQUEST
          </h2>
          <h2 className="uppercase text-4xl text-white">
            Request  <span className="text-red-700">A Quote?</span>
          </h2>
          <h3 className="uppercase tracking-[0.3rem] font-light text-white mb-4">
          GOT A QUESTION?
          </h3>
          <forn>
            <div className="grid justify-between gap-4 grid-cols-2">
                <input type="text" placeholder="name" className="p-3 mt-4 border-none font-normal capitalize"/>
                <input type="text" placeholder="last name" className="p-4 mt-3 border-none font-normal capitalize"/>
            </div>
            <div className="grid justify-between gap-4 grid-cols-1">
                <input type="text" placeholder="Email" className="p-3 mt-4 border-none font-normal capitalize"/>
            </div>
            <div className="grid justify-between gap-4 grid-cols-1">
                <textarea className="p-3 mt-4 border-none font-normal capitalize" rows="4" placeholder="Message"></textarea> 
            </div>
            <button className="bg-red-700 text-white font-bold py-3 px-8 my-4">Submit</button>
          </forn>
        </div>
      </div>
    </div>
  );
};

export default Form;
