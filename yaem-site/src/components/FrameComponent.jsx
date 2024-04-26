import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="desktop-1-inner">
      <div className="frame-container">
        <div className="events-parent">
          <div className="events">
            <div className="events-image-parent">
              <img className="events-image-icon" alt="" src="/image-1@2x.png" />
              <h2 className="events1">Events</h2>
            </div>
          </div>
          <div className="resources2">
            <div className="resources-image-parent">
              <img
                className="resources-image-icon"
                alt=""
                src="/unsplashgpcodheuwn0@2x.png"
              />
              <h2 className="resources3">Resources</h2>
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
          <div className="connect-with-us-parent">
            <h2 className="connect-with-us">Connect with us!</h2>
            <h2 className="connect-with-us1">Connect with us!</h2>
          </div>
          <div className="we-would-love">
            We would love to get to know you! Join our email list and keep
            up-to-date with everything happening at Calvary.
          </div>
          <button className="info-button">
            <b className="enter-info">{`enter info `}</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
