import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
  const teamMembers = [
    {
      id: 1,
      image: "/yaemlogo.png",
      name: "Inerrancy and Infallibility of Scripture",
      description:
        "The Bible is the inspired and inerrant Word of God, the only infallible rule of faith and practice.",
    },
    {
      id: 2,
      image: "/trinity.png",
      name: "The Trinity",
      description:
        "There is one eternal God, existing in three persons—Father, Son, and Holy Spirit—each deserving equal love, honor, and worship.",
    },
    {
      id: 3,
      image: "/fall.png",
      name: "The Fall",
      description:
        "All humanity shares in Adam's original sin, leading to a state of lostness and helplessness.",
    },
    {
      id: 4,
      image: "/mercy.png",
      name: "God's Mercy and Grace",
      description:
        "Out of His boundless love and mercy, God sovereignly chooses sinners from every nation for redemption through the Holy Spirit's work and Jesus Christ's atoning sacrifice.",
    },
    {
      id: 5,
      image: "/bornAgain.png",
      name: "Being Born Again",
      description:
        "Those quickened by the Spirit, upon hearing the Word of God, believe in Christ as their Savior, are born anew, adopted as God's children, and will persevere until the end.",
    },
    {
      id: 6,
      image: "/justification.png",
      name: "Justification",
      description:
        "Justification comes by faith, wherein the undeserving sinner is covered with Christ's righteousness",
    },
    {
      id: 7,
      image: "/sanctification.png",
      name: "Sanctification",
      description:
        "The aim of God's salvation is holiness, good deeds, and service to glorify Him in the believer's life.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section flex items-center justify-center"
        style={{
          backgroundImage: `url('/michael.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div className="relative text-center text-white">
          <h1 className="text-3xl md:text-6xl font-bold">About Us</h1>
        </div>
      </div>

      {/* Split Section with Text on Left and Image on Right */}
      <div className="flex py-12">
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            Our mission is to abide in Him in every facet of life and to bear
            witness to our neighbors, bringing glory to His name.
          </p>
        </div>
        <div className="w-1/2">
          <img
            src="/churchTopRight.png"
            alt="Our Mission"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Split Section with Image on Left and Text on Right */}
      <div className="flex py-12 bg-gray-100">
        <div className="w-1/2">
          <img
            src="/churchBotLeft.png"
            alt="Our Vision"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            Calvary YAEM endeavors to be a gospel-centered community for both
            the present and future generations. Our aim is to cultivate
            meaningful church relationships internally and externally that are
            founded upon the gospel.
          </p>
        </div>
      </div>

      {/* New Section with Cards */}
      <div className="bg-blue-100 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg">
            At Calvary YAEM, we believe in these seven values
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div
                  className="rounded-lg shadow-lg overflow-hidden"
                  style={{ background: "transparent" }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-0 left-0 p-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full">
                      {member.id}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-gray-700">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Section with Two Images Side by Side */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">The Team</h2>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/pastorpaul.png"
                  alt="Paul Baek"
                  className="w-full h-auto"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mt-4">Pastor</h3>
                  <h3 className="text-lg font-bold mt-4">Paul Baek</h3>
                  <p className="text-lg text-gray-700">Description</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/joo.png"
                  alt="JooHyeng Lee"
                  className="w-full h-auto object"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold mt-4">President</h3>
                  <h3 className="text-lg font-bold mt-4">JooHyeng Lee</h3>
                  <p className="text-lg text-gray-700">Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* New Background Section */}
      <div
        className="flex items-center justify-center text-center text-white py-24"
        style={{
          backgroundImage: `url('/taz.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl px-4">
          <h2 className="text-4xl font-bold mb-4">Connect with Us</h2>
          <p className="text-lg mb-8">
            We would love to get to know you! Join our email list and keep
            up-to-date with everything happening at Calvary
          </p>
          <Link
            to="/about"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-block mt-4"
          >
            Connect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
