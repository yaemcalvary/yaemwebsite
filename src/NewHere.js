import React from "react";
import { Link } from "react-router-dom";
import "@fontsource/lora";

function NewHere() {
  return (
    <div>
      {/* New Here Section */}
      <div className="bg-[#C3D0FF59] flex items-center justify-center py-32 px-10 sm:px-8 md:px-8 lg:px-10 xl:px-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold font-lora mb-4">
            New here? Let us know!
          </h2>
          <p className="text-lg font-normal font-lora max-w-lg mx-auto">
            We are looking forward to meeting you! Please fill out the
            information below so that we can prepare for your visit.
          </p>
          <Link
            to="https://docs.google.com/forms/d/e/1FAIpQLSeSw9VNf7ZBiIMlPKh9FCKy_fucI0jjgUSHrwL7hokkS_wzGA/viewform"
            target="_blank"
            className="bg-transparent hover:bg-[#004686] hover:text-white text-xl text-[#004686] font-bold font-lora py-2 px-4 rounded-lg inline-block mt-4 border-[#004686] border-solid border-2.5"
          >
            Plan A Visit
          </Link>
        </div>
      </div>
      {/* End of New Here Section */}
    </div>
  );
}

export default NewHere;
