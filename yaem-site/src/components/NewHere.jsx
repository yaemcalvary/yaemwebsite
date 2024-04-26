import "./NewHere.css";

const NewHere = () => {
  return (
    <section className="fill-in-form-parent">
      <div className="fill-in-form">
        <div className="new-here-let-us-know-wrapper">
          <h2 className="new-here-let1">New here? Let us know!</h2>
        </div>
        <div className="we-are-looking-container1">
          <p className="we-are-looking1">
            We are looking forward to meeting you! Please fill out the
            information below so that we can prepare for your visit.
          </p>
        </div>
      </div>
      <div className="input-field">
        <button className="plan-visit">
          <b className="plan-a-visit1">PLAN A VISIT</b>
        </button>
      </div>
    </section>
  );
};

export default NewHere;
