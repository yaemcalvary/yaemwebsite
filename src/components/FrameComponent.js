import EventFrame from "./EventFrame";
import ResourcesFrame from "./ResourcesFrame";
import "./FrameComponent.css";

const EventsResourcesConnect = () => {
  return (
    <section className="desktop-1-child">
      <div className="frame-parent10">
        <div className="events-group">
          <div className="events5">
            <EventFrame />
          </div>
          <div className="resources7">
            <div className="resources-image-parent">
              <ResourcesFrame />
              <h2 className="resources8">Resources</h2>
            </div>
          </div>
        </div>
        <div className="connect">
          <img
            className="connect-image-icon"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="connect-with-us-parent1">
            <h2 className="connect-with-us6">Connect with us!</h2>
            <h2 className="connect-with-us7">Connect with us!</h2>
          </div>
          <div className="we-would-love3">
            We would love to get to know you! Join our email list and keep
            up-to-date with everything happening at Calvary.
          </div>
          <button className="info-button">
            <b className="enter-info4">{`enter info `}</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsResourcesConnect;
