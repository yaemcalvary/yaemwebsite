import React from "react";
import "./styles.css";
import "@fontsource/lora";
import "@fontsource/source-serif-pro";

function Footer() {
  return (
    <footer className="bg-[#EAEFFF] py-6 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-center space-y-4 md:space-y-0">
        {/* Left Section: Logo and Calvary YAEM */}
        <div className="flex items-start justify-center space-x-3 md:mr-20">
          <img src="/yaemlogo.png" alt="Calvary Logo" className="h-8 w-auto" />
          <span className="font-bold font-lora text-2xl">Calvary YAEM</span>
        </div>

        {/* Middle Section: Text */}
        <div className="text-gray-700 text-sm space-y-2 text-center md:text-left md:mx-20">
          <div className="text-lg font-bold font-source-serif">Visit us!</div>
          <div className="font-sf-pro-l">Sundays 1pm @ Daniel Chapel</div>
          <div className="font-sf-pro-l">
            572 Ryders Lane, East Brunswick, NJ 08816
          </div>
          <p className="text-gray-600 text-sm font-source-serif mt-4 pt-10">
            © 2024 Calvary KUMC. All rights reserved
          </p>
        </div>

        {/* Right Section: Contact Info and Social Icons */}
        <div className="text-gray-700 text-sm space-y-2 text-center md:text-left md:ml-20">
          <div className="text-lg font-bold font-source-serif">
            Stay connected!
          </div>
          <div className="flex justify-center md:justify-start font-sf-pro-l">
            yaemcalvary@gmail.com
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
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
    </footer>
  );
}

export default Footer;
