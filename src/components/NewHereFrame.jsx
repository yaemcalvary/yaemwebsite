import { memo } from "react";
import "./NewHereFrame.css";

const NewHereFrame = memo(() => {
  return (
    <section className="new-here">
      <div className="frame-container">
        <div className="new-here-let-us-know-wrapper">
          <h2 className="new-here-let">New here? Let us know!</h2>
        </div>
        <div className="we-are-looking-container">
          <p className="we-are-looking">
            We are looking forward to meeting you! Please fill out the
            information below so that we can prepare for your visit.
          </p>
        </div>
      </div>
      <div className="form-enter-info">
        <button className="plan-visit-button">
          <b className="plan-a-visit">PLAN A VISIT</b>
        </button>
      </div>
    </section>
  );
});

export default NewHereFrame;
