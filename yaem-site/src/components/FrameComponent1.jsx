import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="new">
      <div className="form-enter-info-parent">
        <div className="form-enter-info">
          <h2 className="new-here-let">New here? Let us know!</h2>
        </div>
        <div className="we-are-looking-container">
          <p className="we-are-looking">
            We are looking forward to meeting you! Please fill out the
            information below so that we can prepare for your visit.
          </p>
        </div>
      </div>
      <div className="plan-visit-button-wrapper">
        <button className="plan-visit-button">
          <b className="plan-a-visit">PLAN A VISIT</b>
        </button>
      </div>
    </section>
  );
};

export default FrameComponent1;
