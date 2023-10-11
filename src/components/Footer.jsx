import Image from "next/image";
import React from "react";
import { logo } from "@/assets";

const Footer = () => {
  return (
    <div className="footer-bg py-8 mx-auto">
      <div className="container w-full row grid grid-cols-5 mx-auto py-2">
        <div className="col-span-2 pr-64">
          <Image src={logo} width={100} height={100} className=" mb-3" />
          <p className="text-white">
            ACUFAB focuses its efforts on innovation, understanding, and
            consistency with custom steel fabrication and structural welding
            services. We have been in this industry for about 30 years and
            counting. People choose us for a reason - contact to learn what.
          </p>
        </div>
        <div className="col-span-1 ">
          <h4 className="text-2xl text-red-700">Web Links</h4>
          <ul className="list-none text-white">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h4 className="text-2xl text-red-700">Contact Information</h4>
          <ul className="list-none text-white">
            <li><a href="#">310-538-4944</a></li>
            <li><a href="#">000 BLVD St Martin O Laval (Québec) H0S 00, USA</a></li>
            <li><a href="#">qoutes@acufab.us</a></li>
          </ul>
          <h4 className="text-2xl text-red-700">Social Media:</h4>
          <ul className="">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
