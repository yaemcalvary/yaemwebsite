import NavBar from "../components/NavBar";
import GetToKnowUs from "../components/FrameComponent2";
import NewHere from "../components/FrameComponent1";
import EventsResourcesConnect from "../components/FrameComponent";
import Footer from "../components/BottomBar";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-11">
      <NavBar />
      <section className="image-placeholder">
        <div className="hero1">
          <img
            className="church-image-icon"
            loading="lazy"
            alt=""
            src="/unsplashnsn5labyym@2x.png"
          />
          <h1 className="welcome-to-calvary3">Welcome to Calvary YAEM!</h1>
          <div className="we-love-god-container3">
            <p className="we-love-god3">
              We love God by growing in our knowledge of Him and living in
              obedience to His Word. We recall His love so that we are driven to
              love those who are around us.
            </p>
          </div>
          <button className="service-button">
            <b className="service-info3">Service info</b>
          </button>
        </div>
      </section>
      <GetToKnowUs />
      <NewHere />
      <EventsResourcesConnect />
      <Footer />
    </div>
  );
};

export default Desktop;
