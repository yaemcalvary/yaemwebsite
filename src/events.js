import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/lora";
import ConnectWithUs from "./ConnectWithUs";

function EventsPage() {
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
            Events & Meetings
          </h1>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Calendar Section */}
      <div className="pt-12 pb-4 bg-white">
        <div className="container mx-auto text-left px-8">
          <div className="flex justify-center">
            <div className="w-4/5">
              <h2 className="text-4xl font-bold font-lora mb-4">Our Events</h2>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=America%2FNew_York"
                style={{ border: "0" }}
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="calendar"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* End of Calendar Section */}

      {/* Get to know us Section */}
      <div className="flex flex-col md:flex-row items-center">
        {/* Right Half (Image) */}
        <div className="md:w-1/2 w-full">
          <img
            src="/volleyball.png"
            alt="Volleyball"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Left Half */}
        <div className="md:w-1/2 w-full p-8 flex flex-col items-center justify-center">
          <div className="text-center w-full">
            <h2 className="text-3xl font-semibold font-lora mb-4">
              First time joining our events?
            </h2>
            <p className="text-lg font-normal font-lora max-w-lg mx-auto">
              Let us know by filling out this form! We will be ready to welcome
              you the best way we can.
            </p>
            <Link
              to="/events"
              className="bg-white hover:bg-[#004686] hover:text-white text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded-lg inline-block mt-4 border-[#004686] border-solid border-2.5"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>
      {/* End of Get to know us Section */}

      <ConnectWithUs />
    </div>
  );
}

export default EventsPage;
