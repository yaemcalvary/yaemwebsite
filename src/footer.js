import React from "react";
import "./styles.css";
import "@fontsource/lora";
import "@fontsource/source-serif-pro";

function Footer() {
  return (
    <footer className="bg-[#EAEFFF] py-8 px-4 md:px-10 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:pr-12 md:flex-row items-center md:items-start justify-center space-y-4 md:space-y-0">
        {/* Left Section: Logo and Calvary YAEM */}
        <div className="flex items-center justify-center md:mr-20">
          <img
            src="/yaemlogo2.png"
            alt="Calvary Logo"
            className="h-8 w-auto mr-2"
          />
          <span className="font-bold font-lora text-2xl">Calvary YAEM</span>
        </div>

        {/* Middle Section: Text */}
        <div className="text-gray-700 text-sm space-y-2 text-center md:text-left md:mx-20">
          <div className="text-lg font-bold font-source-serif">Visit us!</div>
          <div className="font-source-serif">Sundays 1pm @ Daniel Chapel</div>
          <div className="font-source-serif">
            572 Ryders Lane, East Brunswick, NJ 08816
          </div>
        </div>

        {/* Right Section: Contact Info and Social Icons */}
        <div className="text-gray-700 text-sm space-y-1 text-center md:text-left md:ml-20 pb-4">
          <div className="text-lg font-bold font-source-serif">
            Stay connected!
          </div>
          <div className="flex justify-center md:justify-start font-source-serif">
            yaemcalvary@gmail.com
          </div>
          <div className="flex justify-center md:justify-start space-x-2 mt-4">
            {/* Facebook Icon */}
            <span className="h-5 w-5">
              <img src="/facebook.svg" alt="facebook" className="h-5 w-5" />
            </span>
            {/* Instagram Icon */}
            <span className="h-5 w-5">
              <img src="/instagram.svg" alt="instagram" className="h-5 w-5" />
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="w-full text-center py-4">
        <p className="text-[#888888] text-sm font-source-serif">
          © 2024 Calvary KUMC. All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
