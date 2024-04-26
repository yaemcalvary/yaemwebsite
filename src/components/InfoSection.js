import React from 'react';
import './InfoSection.css'; // Make sure to create a corresponding CSS file

function InfoSection({ title, description, buttonText }) {
  return (
    <section className="info-section">
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    </section>
  );
}

export default InfoSection;
