import React from "react";
import "./WorkoutCreator.css";



const WorkoutItem = ({ title, imageUrl }) => (
  <div className="training-item-wc">
    <div className="background-image centered flexWrapper" style={{ backgroundImage: `url(${imageUrl})`}}>
      <div className="content-wc">
        <h1 className="title uppercase">{title}</h1>
      </div>
    </div>
  </div>
);
export default WorkoutItem;
