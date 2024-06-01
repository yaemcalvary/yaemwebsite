import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/lora";

function EventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section flex items-center justify-center"
        style={{
          backgroundImage: `url('/eventHero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-4xl font-normal font-lora">Events</h1>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold font-lora mb-4">Our Events</h2>
          <div className="flex justify-center">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
              style={{ border: "0" }}
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
              title="calendar"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Split Section */}
      <div className="flex">
        {/* Left Half (Image) */}
        <div className="w-1/2">
          <img
            src="/volleyball.png"
            alt="Volleyball"
            className="w-full h-auto"
          />
        </div>
        {/* Right Half (Text in Light Blue Rectangle) */}
        <div className="w-1/2 bg-[#C3D0FF59] p-8 flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold font-lora mb-4">
            First time joining our events?
          </h3>
          <p className="text-lg font-lora mb-4">
            Let us know by filling out this form! We will be ready to welcome
            you the best way we can.
          </p>
          <Link
            to="/events"
            className="bg-transparent font-lora hover:bg-blue-200 text-[#0056BB] border-[#0056BB] border-2 font-bold py-2 px-4 rounded"
          >
            Connect
          </Link>
        </div>
      </div>

      {/* Final Section with Background Image */}
      <div
        className="flex items-center justify-center py-12"
        style={{
          backgroundImage: `url('/taz.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          position: "relative",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Connect with us!</h2>
          <p className="text-lg mb-4">
            We would love to get to know you! Join our email list and kee
            up-to-date with everything happening at Calvary.
          </p>
          <Link
            to="/events"
            className="bg-transparent hover:bg-blue-200 text-white font-bold py-2 px-4 rounded inline-block mt-4  border-white border-solid border-2"
          >
            Connect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
