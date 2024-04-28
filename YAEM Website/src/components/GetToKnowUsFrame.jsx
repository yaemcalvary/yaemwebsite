import { memo } from "react";
import "./GetToKnowUsFrame.css";

const GetToKnowUsFrame = memo(() => {
  return (
    <section className="know-wrapper">
      <div className="know">
        <div className="know-inner">
          <div className="frame-parent">
            <div className="frame-group">
              <div className="get-to-know-us-wrapper">
                <h2 className="get-to-know">Get to know us!</h2>
              </div>
              <div className="learn-about-our">
                Learn about our mission, our beliefs, and the hope we have in
                Jesus.
              </div>
            </div>
            <div className="learn-more-button-wrapper">
              <button className="learn-more-button">
                <b className="learn-more">Learn More</b>
              </button>
            </div>
          </div>
        </div>
        <img
          className="know-image-icon"
          loading="lazy"
          alt=""
          src="/know-image.png"
        />
      </div>
    </section>
  );
});

export default GetToKnowUsFrame;
