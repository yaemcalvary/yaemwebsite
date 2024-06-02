import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/lora";
import ConnectWithUs from "./ConnectWithUs";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/church2.png')`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="hero-text text-center mx-auto max-w-xl">
          <h1 className="text-4xl md:text-5xl font-semibold font-lora text-white mb-4">
            We are Calvary YAEM!
          </h1>
          <p className="text-lg font-normal font-lora text-[#525252] mb-4">
            Sundays 1pm &ensp;|&ensp; 572 Ryders Lane, East Brunswick, NJ
          </p>
          <div className="bg-[#FFFFFF80] rounded-xl px-4 py-2 mb-4 max-w-lg">
            <p className="text-lg font-normal font-lora text-[#525252]">
              Growing in knowledge of God. <br /> Living in obedience to His
              Word.
            </p>
          </div>
          <Link
            to="/service"
            className="text-xl bg-transparent hover:bg-blue-200 text-white font-bold font-lora py-2 px-4 rounded inline-block border-white border-solid border-2"
          >
            About Service
          </Link>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Get to know us Section */}
      <div className="flex py-20">
        {/* Left Half */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold font-lora mb-4">
              Get to know us!
            </h2>
            <p className="text-lg font-normal font-lora max-w-lg mx-auto">
              We love God by growing in our knowledge of Him and living in
              obedience to his Word. We recall His love so that we are driven to
              love those who are around us.
            </p>
            <Link
              to="/about"
              className="bg-white hover:bg-blue-200 text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-[#004686] border-solid border-2"
            >
              About Us
            </Link>
          </div>
        </div>
        {/* Right Half (Image) */}
        <div className="w-1/2">
          <img
            src="/groupPicture.png"
            alt="Group"
            className="w-full h-auto rounded-custom"
          />
        </div>
      </div>
      {/* End of Get to know us Section */}

      {/* New Here Section */}
      <div className="bg-[#C3D0FF59] flex items-center justify-center py-32">
        <div className="text-center">
          <h2 className="text-3xl font-semibold font-lora mb-4">
            New here? Let us know!
          </h2>
          <p className="text-lg font-normal font-lora max-w-lg mx-auto mb-4">
            We are looking forward to meeting you! Please fill out the
            information below so that we can prepare for your visit.
          </p>
          <Link
            to="/"
            className="bg-transparent hover:bg-blue-200 text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-[#004686] border-solid border-2"
          >
            Plan A Visit
          </Link>
        </div>
      </div>
      {/* End of New Here Section */}

      {/* Events and Prayer Meeting Section */}
      <div className="section flex flex-col md:flex-row py-16">
        {/* Left Half */}
        <div className="left-half md:w-1/2 text-center">
          <img
            src="michael.png"
            alt="Monthly Event"
            className="w-full h-auto max-w-500 max-h-365 rounded-custom object-cover"
          />
          <h2 className="text-2xl font-semibold font-lora mt-4">
            Monthly Event
          </h2>
          <p className="text-lg mt-2 font-lora">
            Check out our monthly YAEM event calendar for events, retreats and
            more!
          </p>
          <Link
            to="/events"
            className="bg-white hover:bg-blue-200 text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-[#004686] border-solid border-2"
          >
            More Info
          </Link>
        </div>

        {/* Right Half */}
        <div className="right-half md:w-1/2 text-center">
          <img
            src="table.png"
            alt="Prayer Meetings"
            className="w-full h-auto max-w-500 max-h-365 rounded-custom object-cover"
          />
          <h2 className="text-2xl font-lora font-semibold mt-4">
            Prayer Meetings
          </h2>
          <p className="text-lg mt-2 font-lora">
            Join us for a time of prayer and reflection!
            <br />
            We meet in-person on select Fridays at 7pm.
          </p>
          <Link
            to="/"
            className="bg-white hover:bg-blue-200 text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-[#004686] border-solid border-2"
          >
            More Info
          </Link>
        </div>
      </div>
      {/* End of Events and Prayer Meeting Section */}

      <ConnectWithUs />
    </div>
  );
}

export default HomePage;
