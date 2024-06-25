import React from "react";
import "@fontsource/lora";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found bg-slate-100 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-8">
      <p className="text-4xl text-bold text-center mb-4 font-lora">
        The page you were looking for does not exist
      </p>
      <p className="text-2xl text-center font-lora pb-10">
        You may have mistyped the address or the page may have moved
      </p>
      <Link
        to="/"
        className="text-xl bg-transparent hover:border-[#004686] hover:bg-[#004686] hover:text-white text-[#004686] font-bold font-lora py-2 px-6 rounded-lg inline-block border-[#004686] border-solid border-2.5"
      >
        Home Page
      </Link>
    </div>
  );
}

export default NotFoundPage;
