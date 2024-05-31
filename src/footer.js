import React from "react";

function Footer() {
  return (
    <footer className="bg-white py-6 px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-4 items-start">
        {/* Left Section: Logo and Calvary YAEM */}
        <div className="flex items-start justify-center md:justify-start space-x-4 md:pl-24">
          <img src="/yaemlogo.png" alt="Calvary Logo" className="h-8 w-auto" />
          <span className="font-bold text-xl">Calvary YAEM</span>
        </div>

        {/* Middle Section: Text */}
        <div className="text-gray-700 text-sm space-y-2 text-center md:text-left">
          <div className="text-lg font-bold">Visit us!</div>
          <div className="flex justify-center md:justify-start">
            Sundays 1pm @ Daniel Chapel
          </div>
          <div className="flex justify-center md:justify-start">
            572 Ryders Lane, East Brunswick, NJ 08816
          </div>
          <p className="text-gray-600 text-sm mt-4 pt-10">
            © 2024 Calvary KUMC. All rights reserved
          </p>
        </div>

        {/* Right Section: Contact Info and Social Icons */}
        <div className="text-gray-700 text-sm space-y-2 text-center md:text-left">
          <div className="text-lg font-bold">Stay connected!</div>
          <div className="flex justify-center md:justify-start">
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
