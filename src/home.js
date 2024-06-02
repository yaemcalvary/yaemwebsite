import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/lora";

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section flex items-center"
        style={{
          backgroundImage: `url('/church2.png')`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <div className="hero-text text-left ml-8">
          <h1 className="text-4xl md:text-6xl font-semibold font-lora text-[#333333] mb-4">
            Welcome to Calvary YAEM!
          </h1>
          <p className="text-lg font-normal font-lora text-[#333333] max-w-lg">
            We love God by growing in our knowledge of Him and living in
            obedience to His Word. We recall His love so that we are driven to
            love those who are around us.
          </p>
          <Link
            to="/service"
            className="text-xl bg-transparent hover:bg-blue-200 text-white font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-white border-solid border-2"
          >
            About Service
          </Link>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Get to know us Section */}
      <div className="flex">
        {/* Left Half */}
        <div className="w-1/2 p-8 flex flex-col items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-semibold font-lora mb-4">
              Get to know us!
            </h2>
            <p className="text-lg font-normal font-lora max-w-lg mx-auto">
              Learn about our mission, our beliefs, <br />
              and the hope we have in Jesus.
            </p>
            <Link
              to="/about"
              className="bg-white hover:bg-blue-200 text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-[#004686] border-solid border-2"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Right Half (Image) */}
        <div className="w-1/2">
          <img src="/groupPicture.png" alt="Group" className="w-full h-auto" />
        </div>
      </div>
      {/* End of Get to know us Section */}

      {/* New Here Section */}
      <div className="bg-[#C3D0FF59] flex items-center justify-center py-12">
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

      {/* Events Section */}
      <div className="flex justify-center items-center min-h-screen">
        {/* Left Half with Image and Text */}
        <div className="w-1/2 p-8">
          <Link to="/events">
            <div className="relative">
              <img
                src="/michael.png"
                alt="Events"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
                <div className="text-white text-center">
                  <h3 className="text-4xl text-black font-semibold font-lora mb-4 pt-5">
                    Events
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Right Half with Image and Text */}
        {/* <div className="w-1/2 p-8">
          <Link to="/resources">
            <div className="relative">
              <img
                src="/bible.png"
                alt="Bible"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center">
                <div className="text-white text-center">
                  <h3 className="text-3xl text-black font-bold mb-4">
                    Resources
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div> */}
      </div>
      {/* End of Events Section */}

      {/* Connect with Us Section */}
      <div
        className="flex items-center justify-center py-12"
        style={{
          position: "relative",
          height: "500px",
        }}
      >
        {/* Background image container with filter */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('/taz.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)", // Adjust the brightness percentage as needed
          }}
        />

        {/* Content */}
        <div className="relative text-center text-white">
          <h2 className="text-3xl font-bold font-lora mb-4">
            Connect with us!
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="text-lg font-medium font-lora mb-4">
              We would love to get to know you! Join our email list and keep
              up-to-date with everything happening at Calvary.
            </p>
          </div>
          <Link
            to="/"
            className="bg-transparent hover:bg-blue-200 text-xl text-white font-bold font-lora py-2 px-4 rounded inline-block mt-4 border-white border-solid border-2"
          >
            Connect
          </Link>
        </div>
      </div>
      {/* End of Connect with Us Section */}
    </div>
  );
}

export default HomePage;
