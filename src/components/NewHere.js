import "./NewHere.css";

const NewHere = () => {
  return (
    <section className="new-here">
      <div className="new-here-content">
        <div className="new-here-wrapper-parent">
          <div className="new-here-wrapper">
            <h2 className="new-here-let1">New here? Let us know!</h2>
          </div>
          <div className="we-are-looking-container1">
            <p className="we-are-looking1">
              We are looking forward to meeting you! Please fill out the
              information below so that we can prepare for your visit.
            </p>
          </div>
        </div>
        <div className="plan-visit1">
          <button className="plan-visit-wrapper">
            <div className="plan-a-visit1">PLAN A VISIT</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewHere;
