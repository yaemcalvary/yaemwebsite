import Events from "./Events";
import Resources from "./Resources";
import "./EventsResourcesConnect.css";

const EventsResourcesConnect = () => {
  return (
    <section className="links-container-wrapper">
      <div className="links-container">
        <div className="events-group">
          <div className="events3">
            <Events image1="/image-1@2x.png" events="Events" />
          </div>
          <div className="frame-wrapper3">
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
          <div className="connect-with-us-group">
            <h2 className="connect-with-us2">Connect with us!</h2>
            <h2 className="connect-with-us3">Connect with us!</h2>
          </div>
          <div className="we-would-love1">
            We would love to get to know you! Join our email list and keep
            up-to-date with everything happening at Calvary.
          </div>
          <button className="button">
            <b className="enter-info1">{`enter info `}</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsResourcesConnect;
