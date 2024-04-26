import "./LearnMore.css";

const LearnMore = () => {
  return (
    <section className="desktop-1-child">
      <div className="frame-parent3">
        <div className="frame-wrapper1">
          <div className="frame-parent4">
            <div className="frame-parent5">
              <div className="get-to-know-us-container">
                <h2 className="get-to-know1">Get to know us!</h2>
              </div>
              <div className="learn-about-our1">
                Learn about our mission, our beliefs, and the hope we have in
                Jesus.
              </div>
            </div>
            <div className="frame-wrapper2">
              <button className="learn-more-wrapper">
                <b className="learn-more1">Learn More</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="image-3-icon"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </section>
  );
};

export default LearnMore;
