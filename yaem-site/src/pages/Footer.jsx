import NavBar1 from "../components/NavBar1";
import FrameComponent21 from "../components/FrameComponent21";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent3 from "../components/FrameComponent3";
import TopBar from "../components/TopBar";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <NavBar1 />
      <section className="hero-section-wrapper">
        <div className="hero-section1">
          <img
            className="unsplashnsn5labyy-m-icon1"
            loading="lazy"
            alt=""
            src="/unsplashnsn5labyym@2x.png"
          />
          <h1 className="welcome-to-calvary2">Welcome to Calvary YAEM!</h1>
          <div className="we-love-god-container2">
            <p className="we-love-god2">
              We love God by growing in our knowledge of Him and living in
              obedience to His Word. We recall His love so that we are driven to
              love those who are around us.
            </p>
          </div>
          <button className="service-info-container">
            <b className="service-info2">Service info</b>
          </button>
        </div>
      </section>
      <FrameComponent21 />
      <FrameComponent11 />
      <FrameComponent3 />
      <TopBar />
    </div>
  );
};

export default Footer;
