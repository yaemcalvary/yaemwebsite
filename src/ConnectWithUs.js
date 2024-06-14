import { React } from "react";
import { Link } from "react-router-dom";

function ConnectWithUs() {
  return (
    <div>
      {/* Connect with Us Section */}
      <div
        className="flex items-center justify-center"
        style={{
          position: "relative",
          height: "400px",
        }}
      >
        {/* Background image container with filter */}
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url('/taz2.png')`,
            backgroundSize: "110%", // Adjust this value to control the zoom level
            backgroundPosition: "10% center", // Shift the image to the right
            backgroundRepeat: "no-repeat",
            filter: "brightness(0.5)", // Increase the brightness (adjust the percentage as needed)
          }}
        />

        {/* Content */}
        <div className="relative text-center text-white">
          <h2 className="text-3xl font-bold font-lora mb-4">
            Connect with us!
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="text-lg font-normal font-lora mb-4">
              We would love to get to know you! Join our email list and keep
              up-to-date with everything happening at Calvary.
            </p>
          </div>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSdsrcThxvqQ2EBKKWKPlbp0HwHdDqPjFI3CnlXM_oQ668cqcg/viewform"
            target="_blank"
            className="bg-transparent hover:border-[#004686] hover:bg-[#004686] text-xl text-white font-semibold font-lora py-3 px-5 rounded-lg inline-block mt-4 border-white border-solid border-2.5"
          >
            Connect
          </Link>
        </div>
      </div>
      {/* End of Connect with Us Section */}
    </div>
  );
}

export default ConnectWithUs;
