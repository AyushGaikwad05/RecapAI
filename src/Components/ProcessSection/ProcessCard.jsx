import React from "react";
import "./../ProcessSection/ProcessCard.css";

const ProcessCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card-container">
      <div className="card">
        <Icon className="process-icon" />
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;