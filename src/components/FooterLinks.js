import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <section className="footer-links">
      <div className="footer-links-content">
        <div className="events-connect">
          <div className="events-resource">
            <div className="events-wrapper">
              <img className="image-1-icon" alt="" src="/image-1@2x.png" />
              <h2 className="events1">Events</h2>
            </div>
          </div>
          <div className="resources-connect">
            <div className="connect-resource">
              <img
                className="unsplashgpcodheuwn0-icon"
                alt=""
                src="/unsplashgpcodheuwn0@2x.png"
              />
              <h2 className="resources2">Resources</h2>
            </div>
          </div>
        </div>
        <div className="events-connect1">
          <img
            className="image-2-icon1"
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
          <div className="enter-info1">
            <div className="enter-info2">{`enter info `}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterLinks;
