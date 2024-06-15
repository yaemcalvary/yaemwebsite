import React from "react";
import "@fontsource/lora";
import ConnectWithUs from "./ConnectWithUs";

function AboutPage() {
  // Values
  const teamMembers = [
    {
      id: 1,
      image: "/scripture.png",
      name: "Inerrancy and Infallibility of Scripture",
      description:
        "The Bible is the inspired and inerrant Word of God, the only infallible rule of faith and practice.",
      height: "100px",
    },
    {
      id: 2,
      image: "/trinity.png",
      name: "The Trinity",
      description:
        "There is one eternal God, existing in three persons—Father, Son, and Holy Spirit—each deserving equal love, honor, and worship.",
      height: "100px",
    },
    {
      id: 3,
      image: "/fall.png",
      name: "The Fall",
      description:
        "All humanity shares in Adam's original sin, leading to a state of lostness and helplessness.",
      height: "100px",
    },
    {
      id: 4,
      image: "/mercy.png",
      name: "God's Mercy and Grace",
      description:
        "Out of His boundless love and mercy, God sovereignly chooses sinners from every nation for redemption through the Holy Spirit's work and Jesus Christ's atoning sacrifice.",
      height: "100px",
    },
    {
      id: 5,
      image: "/bornAgain.png",
      name: "Being Born Again",
      description:
        "Those quickened by the Spirit, upon hearing the Word of God, believe in Christ as their Savior, are born anew, adopted as God's children, and will persevere until the end.",
      height: "100px",
    },
    {
      id: 6,
      image: "/justification.png",
      name: "Justification",
      description:
        "Justification comes by faith, wherein the undeserving sinner is covered with Christ's righteousness",
      height: "100px",
    },
    {
      id: 7,
      image: "/sanctification.png",
      name: "Sanctification",
      description:
        "The aim of God's salvation is holiness, good deeds, and service to glorify Him in the believer's life.",
      height: "100px",
    },
  ];

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
        <div className="relative text-center text-[#525252]">
          <h1 className="text-3xl md:text-4xl font-semibold font-lora">
            About Us
          </h1>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* Our Mission Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-8">
        <div className="lg:w-1/2 p-8 flex flex-col justify-center items-center">
          <div className="w-full max-w-md text-center lg:text-left">
            <h2 className="text-3xl font-semibold font-lora mb-4">
              Our Mission
            </h2>
            <p className="text-lg font-normal font-lora">
              Our mission is to abide in Him in every facet of life and to bear
              witness to our neighbors, bringing glory to His name.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/churchTopRight.png"
            alt="Church"
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* End of Our Mission Section */}

      {/* Our Vision Section */}
      <div className="flex flex-col lg:flex-row px-4 lg:px-8">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <img
            src="/churchBotLeft.png"
            alt="Church"
            className="w-full h-auto"
          />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2 p-8 flex flex-col justify-center items-center">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-semibold font-lora text-center lg:text-left mb-4">
              Our Vision
            </h2>
            <p className="text-lg font-normal font-lora">
              Calvary YAEM endeavors to be a gospel-centered community for both
              the present and future generations. Our aim is to cultivate
              meaningful church relationships internally and externally that are
              founded upon the gospel.
            </p>
          </div>
        </div>
      </div>
      {/* End of Our Vision Section */}

      {/* Our Values Section */}
      <div className="bg-[#EAEFFF] py-28 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold font-lora mb-4">Our Values</h2>
          <p className="text-lg font-normal font-lora">
            At Calvary YAEM, we believe in these seven values
          </p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8"
              >
                <div
                  className="rounded-xl shadow-lg overflow-hidden pt-6 px-4"
                  style={{ background: "white", height: "320px" }}
                >
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full object-contain"
                      style={{ height: member.height }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-bold font-lora mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-700 font-lora">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End of Our Values Section */}

      {/* The Team Section */}
      <div className="py-20 px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-lora mb-4">The Team</h2>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-1">
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img
                  src="/pastorpaul.png"
                  alt="Paul Baek"
                  className="w-full h-auto"
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-lora mt-2 mb-1">
                      Paul Baek
                    </h3>
                    <h3 className="text-lg font-normal italic font-lora pt-2 mt-0 mb-2">
                      Pastor
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 font-lora mt-0">
                    pbaek87@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-8 flex justify-center">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                <img
                  src="/joo.png"
                  alt="JooHyeng Lee"
                  className="w-full h-auto"
                  style={{ height: "450px", objectFit: "cover" }}
                />
                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold font-lora mt-2 mb-1">
                      JooHyeng Lee
                    </h3>
                    <h3 className="text-lg font-normal italic font-lora pt-2 mt-0 mb-2">
                      Executive Director
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 font-lora mt-0">
                    joohlee89@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Our Team Section */}

      <ConnectWithUs />
    </div>
  );
}

export default AboutPage;
