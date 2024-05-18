import "./GetToKnow.css";

const GetToKnow = () => {
  return (
    <section className="get-to-know">
      <div className="mission-container">
        <div className="mission-content">
          <div className="mission-wrapper-parent">
            <div className="mission-wrapper">
              <div className="mission-title">
                <h2 className="get-to-know1">Get to know us!</h2>
              </div>
              <div className="learn-about-our">
                Learn about our mission, our beliefs, and the hope we have in
                Jesus.
              </div>
            </div>
            <div className="learn-more-button">
              <button className="button-wrapper">
                <div className="learn-more">Learn More</div>
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

export default GetToKnow;
