import NavBar from "../components/NavBar";
import GetToKnow from "../components/GetToKnow";
import NewHere from "../components/NewHere";
import FooterLinks from "../components/FooterLinks";
import BottomBar from "../components/BottomBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <section className="hero">
        <div className="hero-section">
          <img
            className="unsplashnsn5labyy-m-icon"
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
          <button className="service">
            <div className="service-info">Service info</div>
          </button>
        </div>
      </section>
      <GetToKnow />
      <NewHere />
      <FooterLinks />
      <BottomBar />
    </div>
  );
};

export default Home;
