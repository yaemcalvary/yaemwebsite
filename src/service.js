import React from "react";
import { Carousel } from "react-responsive-carousel";
// import { Link } from "react-router-dom";
import "@fontsource/lora";
import ConnectWithUs from "./ConnectWithUs";
import NewHere from "./NewHere";

import "react-responsive-carousel/lib/styles/carousel.min.css";

function ServicePage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section flex items-center justify-center bg-[#EAEFFF]"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div className="relative text-center text-[#525252] px-4">
          <h1 className="text-3xl md:text-4xl font-semibold font-lora">
            Our Service
          </h1>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Split Section with Text and Map */}
      <div className="flex justify-center py-12">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row px-4 md:px-8">
          <div className="w-full md:w-45/100 p-8 md:pl-12 pr-4">
            <h2 className="text-3xl font-bold font-lora mb-4">
              Time and Location
            </h2>
            <p className="text-lg mb-8 font-lora">
              Sundays 1:00pm
              <br />
              572 Ryders Lane<span className="sm:inline hidden">,</span>
              <span className="block sm:hidden"></span>{" "}
              {/* Line break for smaller screens */}
              East Brunswick, NJ 08816
            </p>

            <h2 className="text-3xl font-bold font-lora mb-4">Upon Arrival</h2>
            <p className="text-lg font-lora">
              Once you arrive to Calvary KUMC, you will see the entrance with
              stairs. After entering the building, take a right turn and in the
              corner take the steps upstairs. You will find the Daniel Chapel
              (Room 202) with some of us greeting you. Hope to see you soon!
            </p>
          </div>
          <div className="w-full md:w-55/100 p-8 md:pr-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5331370115346!2d-74.42135628837332!3d40.419192171320105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c577e0c24179%3A0x29995c444322d64f!2s572%20Ryders%20Ln%2C%20East%20Brunswick%2C%20NJ%2008816!5e0!3m2!1sen!2sus!4v1717108125643!5m2!1sen!2sus"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Calvary"
            ></iframe>
          </div>
        </div>
      </div>
      {/* End of Split Section */}

      {/* Image Carousel Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-center font-bold font-lora mb-4">
            Directions to Chapel
          </h2>
          <div className="max-w-2xl mx-auto">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              // autoPlay
            >
              {[
                "stairs.png",
                "stairsEntrance.png",
                "hallway.png",
                "insideStairs.png",
                "onStairs.png",
                "lobby.png",
                "doors.png",
                "chapel.png",
              ].map((src, index) => (
                <div key={index}>
                  <img
                    src={`/${src}`}
                    alt={src.split(".")[0]}
                    className="w-full h-auto"
                  />
                  {/* <p className="legend">{src.split(".")[0]}</p> */}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      {/* End of Image Carousel Section */}
      <NewHere />
      <ConnectWithUs />
    </div>
  );
}

export default ServicePage;
