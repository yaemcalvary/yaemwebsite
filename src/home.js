import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="bg-white py-6 px-4 md:px-40 m-4 grid md:grid-cols-2 md:gap-x-12 items-center">
        <img
          src="/frame-4@2x.png"
          className="rounded-lg mx-auto md:order-2"
          style={{ maxWidth: "100%" }}
          alt="Home 1"
        />
        <div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-3 mb-4">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              Our vision is to provide a space for students to be academically
              and socially engaged in a fun and friendly environment. Our goal
              is to empower each child with the tools and resources they need to
              navigate the challenges of the upcoming school year with
              resilience and enthusiasm!
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="bg-yellow-400 text-white rounded-full px-4 py-2 hover:bg-yellow-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-40 m-4 grid md:grid-cols-2 md:gap-x-12 items-center">
        <img
          src="/frame-5@2x.png"
          className="rounded-lg mx-auto"
          style={{ maxWidth: "100%" }}
          alt="Home 2"
        />
        <div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-3 mb-4">Our Program</h3>
            <p className="text-gray-700 mb-4">
              Explore the adventure awaiting in our program! From thrilling
              activities to meaningful moments, discover how our summer camp
              experience will inspire, challenge, and empower you.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/program"
              className="bg-yellow-400 text-white rounded-full px-4 py-2 hover:bg-yellow-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white py-6 px-4 md:px-40 m-4 grid md:grid-cols-2 md:gap-x-12 items-center">
        <img
          src="/frame-9@2x.png"
          className="rounded-lg mx-auto md:order-2"
          style={{ maxWidth: "100%" }}
          alt="Home 3"
        />
        <div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mt-3 mb-4">Become a Volunteer</h3>
            <p className="text-gray-700 mb-4">
              Ready to make a difference? Join us as a volunteer and help create
              unforgettable summer memories for our campers! Click here to learn
              more and get involved.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/volunteer"
              className="bg-yellow-400 text-white rounded-full px-4 py-2 hover:bg-yellow-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
