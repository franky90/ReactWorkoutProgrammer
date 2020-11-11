import React from "react";
import "./TrainingItem.css";

const TrainingItem = ({ title, imageUrl }) => (
  <div className="training-item">
    <div className="background-image centered flexWrapper" style={{ backgroundImage: `url(${imageUrl})`}}>
      <div className="content">
        <h1 className="title uppercase">{title}</h1>
      </div>
    </div>
  </div>
);
export default TrainingItem;
