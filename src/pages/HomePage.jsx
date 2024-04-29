import NavBar from "../components/NavBar";
import GetToKnowUsFrame from "../components/GetToKnowUsFrame";
import NewHereFrame from "../components/NewHereFrame";
import ERCFrame from "../components/ERCFrame";
import BottomBar from "../components/BottomBar";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <section className="hero-wrapper">
        <div className="hero">
          <img
            className="church-image-icon"
            loading="lazy"
            alt=""
            src="/church-image.png"
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
      <GetToKnowUsFrame />
      <NewHereFrame />
      <ERCFrame />
      <BottomBar />
    </div>
  );
};

export default HomePage;
