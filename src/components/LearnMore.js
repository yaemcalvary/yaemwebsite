import "./LearnMore.css";

const LearnMore = () => {
  return (
    <section className="desktop-1-inner">
      <div className="frame-group">
        <div className="frame-container">
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="get-to-know-us-wrapper">
                <h2 className="get-to-know2">Get to know us!</h2>
              </div>
              <div className="learn-about-our1">
                Learn about our mission, our beliefs, and the hope we have in
                Jesus.
              </div>
            </div>
            <div className="frame-wrapper1">
              <button className="learn-more-wrapper">
                <b className="learn-more1">Learn More</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="image-3-icon1"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </section>
  );
};

export default LearnMore;
