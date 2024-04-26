import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="know-wrapper">
      <div className="know">
        <div className="link-element-learn-more-wrapper">
          <div className="link-element-learn-more">
            <div className="frame-group">
              <div className="get-to-know-us-wrapper">
                <h2 className="get-to-know">Get to know us!</h2>
              </div>
              <div className="learn-about-our">
                Learn about our mission, our beliefs, and the hope we have in
                Jesus.
              </div>
            </div>
            <div className="learn-button-wrapper">
              <button className="learn-button">
                <b className="learn-more">Learn More</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="know-iamge-icon"
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent2;
