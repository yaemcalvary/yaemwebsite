import "./ERCFrame.css";

const ERCFrame = () => {
  return (
    <section className="desktop-inner">
      <div className="frame-div">
        <div className="events-parent">
          <div className="events">
            <div className="events-image-parent">
              <img
                className="events-image-icon"
                alt=""
                src="public\events-image.png"
              />
              <h2 className="events1">Events</h2>
            </div>
          </div>
          <div className="resources1">
            <div className="resources-image-parent">
              <img
                className="resources-image-icon"
                alt=""
                src="/resources-image.png"
              />
              <h2 className="resources2">Resources</h2>
            </div>
          </div>
        </div>
        <div className="connect">
          <img
            className="connect-image-icon"
            loading="lazy"
            alt=""
            src="/connect-image.png"
          />
          <h2 className="connect-with-us">Connect with us!</h2>
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

export default ERCFrame;
