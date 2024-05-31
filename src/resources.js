import { React } from "react";
import { Link } from "react-router-dom";

function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section flex items-center justify-center"
        style={{
          backgroundColor: "white",
          //   backgroundImage: `url('/servicehero.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          position: "relative",
        }}
      >
        <div className="relative text-center text-black">
          <h1 className="text-3xl md:text-6xl font-bold">Resources</h1>
        </div>
      </div>
      {/* end of section */}

      {/* Split Section */}
      <div className="flex flex-col md:flex-row py-12">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Devotional books</h2>
          <p className="text-lg mb-8">
            <li>New Morning Mercies, by Paul David Tripp</li>
            <li>Refreshment for the Soul by Richard Sibbes</li>
          </p>
          <h2 className="text-2xl font-bold mb-4">Bible Study</h2>
          <p className="text-lg">
            <li>Commentaries by R.C. Sproul</li>
            <br />
          </p>
          <h2 className="text-2xl font-bold mb-4">Courtship and Marriage</h2>
          <p className="text-lg">
            <li>The Meaning of Marriage by Tim Keller</li>
            <li>The Sacred Search</li>
          </p>
        </div>
        {/* Right half */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">Apologetics</h2>
          <p className="text-lg mb-8">
            <li>Frank Turek</li>
            <li>Cliff</li>
          </p>
          <h2 className="text-2xl font-bold mb-4">Bible Reading Plan</h2>
          <p className="text-lg">
            <li>
              Amet tempor mollit proident irure ad enim est laboris adipisicing
              dolore fugiat ex.
            </li>
            <br />
          </p>
          <h2 className="text-2xl font-bold mb-4">Maturity</h2>
          <p className="text-lg">
            <li>Maturity by Sinclair B. Ferguson</li>
          </p>
        </div>
      </div>
      {/* end of section */}
      {/* Section with Title and Embedded Videos */}
      <section className="videos-section bg-gray-300">
        <h2 className="text-3xl font-bold text-center mb-4">Sermons</h2>
        <div className="video-container grid grid-cols-3 gap-4">
          {/* Video 1 */}
          <div className="video">
            <iframe
              width="300"
              height="200"
              src="/fuji.mp4"
              frameborder="0"
              allowfullscreen
              title="fuji"
            ></iframe>
            <p>Video 1 Description</p>
          </div>
          {/* Video 2 */}
          <div className="video">
            <iframe
              width="300"
              height="200"
              src="/fuji.mp4"
              frameborder="0"
              allowfullscreen
              title="fuji"
            ></iframe>
            <p>Video 2 Description</p>
          </div>
          {/* Video 3 */}
          <div className="video">
            <iframe
              width="300"
              height="200"
              src="/fuji.mp4"
              frameborder="0"
              allowfullscreen
              title="fuji"
            ></iframe>
            <p>Video 3 Description</p>
          </div>
        </div>
        <br />
        <p>See Youtube playlist for more sermons</p>
        <br />
        <p>
          Please remember that these are supplements, not a replacement of your
          commitment to the church
        </p>
      </section>
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
            to="/resources"
            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded inline-block mt-4"
          >
            Connect
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResourcesPage;
