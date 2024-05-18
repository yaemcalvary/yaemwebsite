import LearnMore from "../components/LearnMore";
import Events from "../components/Events";
import Resources from "../components/Resources";
import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <header className="nav-bar">
        <div className="screenshot-2024-04-23-at-359-parent">
          <img
            className="screenshot-2024-04-23-at-359"
            loading="lazy"
            alt=""
            src="/screenshot-20240423-at-359-11@2x.png"
          />
          <div className="calvary-yaem-wrapper">
            <h2 className="calvary-yaem">Calvary YAEM</h2>
          </div>
        </div>
        <nav className="nav-bar1">
          <nav className="home-parent">
            <button className="home1">Home</button>
            <button className="about">About</button>
            <button className="community">Community</button>
            <button className="resources">Resources</button>
            <button className="give">Give</button>
          </nav>
        </nav>
      </header>
      <section className="church-image">
        <div className="hero-section1">
          <img
            className="unsplashnsn5labyy-m-icon1"
            loading="lazy"
            alt=""
            src="/unsplashnsn5labyym@2x.png"
          />
          <h1 className="welcome-to-calvary1">Welcome to Calvary YAEM!</h1>
          <div className="we-love-god-container1">
            <p className="we-love-god1">
              We love God by growing in our knowledge of Him and living in
              obedience to His Word. We recall His love so that we are driven to
              love those who are around us.
            </p>
          </div>
          <button className="service-info-wrapper">
            <b className="service-info1">Service info</b>
          </button>
        </div>
      </section>
      <LearnMore />
      <section className="fill-in-form-parent">
        <div className="fill-in-form">
          <div className="new-here-let-us-know-wrapper">
            <h2 className="new-here-let">New here? Let us know!</h2>
          </div>
          <div className="we-are-looking-container">
            <p className="we-are-looking">
              We are looking forward to meeting you! Please fill out the
              information below so that we can prepare for your visit.
            </p>
          </div>
        </div>
        <div className="input-field">
          <button className="plan-visit">
            <b className="plan-a-visit">PLAN A VISIT</b>
          </button>
        </div>
      </section>
      <section className="links-container-wrapper">
        <div className="links-container">
          <div className="events-parent">
            <div className="events">
              <Events image1="/image-1@2x.png" events="Events" />
            </div>
            <div className="frame-wrapper">
              <Resources unsplashGpCodheuWn0="/unsplashgpcodheuwn0@2x.png" />
            </div>
          </div>
          <div className="image-2-parent">
            <img
              className="image-2-icon"
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <div className="connect-with-us-parent">
              <h2 className="connect-with-us">Connect with us!</h2>
              <h2 className="connect-with-us1">Connect with us!</h2>
            </div>
            <div className="we-would-love">
              We would love to get to know you! Join our email list and keep
              up-to-date with everything happening at Calvary.
            </div>
            <button className="button">
              <b className="enter-info">{`enter info `}</b>
            </button>
          </div>
        </div>
      </section>
      <footer className="bottom-bar">
        <div className="frame-parent">
          <div className="screenshot-2024-04-23-at-359-group">
            <img
              className="screenshot-2024-04-23-at-3591"
              alt=""
              src="/screenshot-20240423-at-359-11@2x.png"
            />
            <div className="calvary-yaem-container">
              <h2 className="calvary-yaem1">Calvary YAEM</h2>
            </div>
          </div>
          <div className="map-link">
            <div className="visit-us-parent">
              <div className="visit-us">Visit us!</div>
              <div className="sundays-1pm-daniel-container">
                <p className="sundays-1pm">Sundays 1pm @Daniel Chapel</p>
                <p className="ryders-lane-east">
                  572 Ryders Lane, East Brunswick, NJ 08816
                </p>
              </div>
            </div>
          </div>
          <div className="twitter-link">
            <div className="instagram-link">
              <div className="linked-in-link">
                <div className="stay-connected">Stay connected!</div>
              </div>
              <div className="sign-up-button-parent">
                <div className="sign-up-button">
                  <div className="yaemcalvarygmailcom">
                    yaemcalvary@gmail.com
                  </div>
                </div>
                <div className="social-media-icon-container-parent">
                  <div className="social-media-icon-container">
                    <img
                      className="raphaelfacebook-icon"
                      loading="lazy"
                      alt=""
                      src="/raphaelfacebook.svg"
                    />
                  </div>
                  <img
                    className="uilinstagram-alt-icon"
                    loading="lazy"
                    alt=""
                    src="/uilinstagramalt.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="instagram-icon">
          <div className="calvary-yaem-all">
            @ 2024 Calvary YAEM. All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Desktop1;
