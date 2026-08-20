import React from "react";
import "./../ProcessSection/Process.css";
import ProcessCard from "./ProcessCard";
import processCardData from "./Processdata";

const Process = () => {
  return (
    <div className="process-section-container custom-container">
      <div>
        <h3>How It Works?</h3>
        <p>From Video to Everything You Need</p>
      </div>

      <div className="process-container custom-container">
        {processCardData.map((item, index) => (
          <ProcessCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;