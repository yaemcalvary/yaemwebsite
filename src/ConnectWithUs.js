import { React } from "react";
import { Link } from "react-router-dom";

function ConnectWithUs() {
  return (
    <div>
      {/* Connect with Us Section */}
      <div
        className="flex items-center justify-center py-12"
        style={{
          position: "relative",
          height: "350px",
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

export default ConnectWithUs;
