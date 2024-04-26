import NavBar from "../components/NavBar";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import BottomBar from "../components/BottomBar";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop-1">
      <NavBar />
      <section className="image-placeholder">
        <div className="hero">
          <img
            className="church-image-icon"
            loading="lazy"
            alt=""
            src="/unsplashnsn5labyym@2x.png"
          />
          <h1 className="welcome-to-calvary">Welcome to Calvary YAEM!</h1>
          <div className="we-love-god-container">
            <p className="we-love-god">
              We love God by growing in our knowledge of Him and living in
              obedience to His Word. We recall His love so that we are driven to
              love those who are around us.
            </p>
          </div>
          <button className="service-button">
            <b className="service-info">Service info</b>
          </button>
        </div>
      </section>
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <BottomBar />
    </div>
  );
};

export default Desktop;
