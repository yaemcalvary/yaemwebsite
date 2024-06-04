import { React } from "react";
import NewHere from "./NewHere";

function SmallGroups() {
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
          <h1 className="text-3xl md:text-4xl font-semibold font-playfair">
            Small Groups
          </h1>
        </div>
      </div>
      {/* End of Hero Section */}

      {/* New Section */}
      <div className="new-section p-6">
        <h2 className="text-2xl md:text-3xl font-lora font-bold mb-4">
          Purpose of Small Groups
        </h2>
        <p className="text-md md:text-lg font-lora mb-4">
          Small groups play a crucial role in fostering a sense of community,
          facilitating spiritual growth, and empowering members to live out
          their faith in practical ways.
        </p>
        <ul className="list-disc list-inside font-lora ">
          <li className="mb-2">
            Community Building: Small groups provide an intimate setting where
            members can develop deeper relationships with one another. They
            offer a sense of belonging, support, and encouragement.
          </li>
          <li className="mb-2">
            Spiritual Growth: Small groups often focus on studying the Bible,
            discussing sermons, praying together, and supporting each other in
            their spiritual journey. This environment fosters spiritual growth
            and accountability.
          </li>
          <li className="mb-2">
            Care and Support: Small groups are a place where individuals can
            share their joys, struggles, and burdens with others who care about
            them. Members can pray for one another, offer practical help, and
            provide emotional support during challenging times.
          </li>
          <li className="mb-2">
            Outreach and Evangelism: Small groups can serve as a platform for
            outreach and evangelism, inviting friends, neighbors, and coworkers
            to join them for fellowship and spiritual discussions in a less
            intimidating setting than a large church gathering.
          </li>
          <li className="mb-2">
            Service and Mission: Small groups can engage in community service
            projects and missions, pooling their resources and talents to make a
            positive impact in their local community or beyond.
          </li>
        </ul>
      </div>
      {/* End of New Section */}

      <NewHere />

      {/* Section Template */}
      <div className="section-template p-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Small Groups</h2>
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <img
              src="taz.png"
              alt="Description of  1"
              className="w-1/2 md:w-1/3"
            />
            <img src="taz.png" alt="t" className="w-1/2 md:w-1/3" />
          </div>
        </div>
      </div>
      {/* End of Section Template */}
    </div>
  );
}

export default SmallGroups;
