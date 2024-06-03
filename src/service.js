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
          // backgroundImage: `url('/serviceHero2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div className="relative text-center text-[#525252]">
          <h1 className="text-3xl md:text-4xl font-semibold font-playfair">
            Our Service
          </h1>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Split Section with Text and Map */}
      <div className="flex flex-col md:flex-row py-12">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold font-lora mb-4">
            Time and Location
          </h2>
          <p className="text-lg mb-8 font-lora">
            Sundays 1pm
            <br />
            572 Ryders Lane, East Brunswick, NJ 08816
          </p>
          <h2 className="text-3xl font-bold font-lora mb-4">Upon Arrival</h2>
          <p className="text-lg font-lora">
            Once you arrive to Calvary KUMC, you will see the entrance with
            stairs. After entering the building, take a right turn and in the
            corner take the steps upstairs. You will find the Daniel Chapel
            (Room 202) with some of us greeting you. Hope to see you soon!
          </p>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.5331370115346!2d-74.42135628837332!3d40.419192171320105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c577e0c24179%3A0x29995c444322d64f!2s572%20Ryders%20Ln%2C%20East%20Brunswick%2C%20NJ%2008816!5e0!3m2!1sen!2sus!4v1717108125643!5m2!1sen!2sus"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Calvary"
          ></iframe>
        </div>
      </div>
      {/* End of Split Section */}

      {/* Image Carousel Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
            >
              <div>
                <img src="/stairs.png" alt="Stairs" />
                <p className="legend">Stairs</p>
              </div>
              <div>
                <img src="/stairsEntrance.png" alt="Stairs Entrance" />
                <p className="legend">Main Lobby</p>
              </div>
              <div>
                <img src="/hallway.png" alt="Hallway" />
                <p className="legend">Hallway</p>
              </div>
              <div>
                <img src="/insideStairs.png" alt="Inside Stairs" />
                <p className="legend">Inside Stairs</p>
              </div>
              <div>
                <img src="/onStairs.png" alt="On Stairs" />
                <p className="legend">Going up Stairs</p>
              </div>
              <div>
                <img src="/lobby.png" alt="Lobby" />
                <p className="legend">Lobby</p>
              </div>
              <div>
                <img src="/doors.png" alt="Doors" />
                <p className="legend">Doors</p>
              </div>
              <div>
                <img src="/chapel.png" alt="Chapel" />
                <p className="legend">Chapel</p>
              </div>
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
