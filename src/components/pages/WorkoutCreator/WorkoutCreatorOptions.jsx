import React, { Component } from "react";
import TrainingTypeSuperset from "./TrainingTypeSupersets";
// NOTE TO PETER - DELETE THIS COMPONENT
// import WorkoutCreatorTrainingType from "./WorkoutCreatorTrainingType";
import WorkoutItem from "./WorkoutItem";
import { workoutCreatorTypeItems } from "./workoutCreatorTypeItems";
import { Link, NavLink } from "react-router-dom";
import TrainingTypeHomeWorkout from "./TrainingTypeHomeWorkout"

class WorkoutCreatorOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarmupChecked: false,
      
    }
  }


  warmupCheckboxHandle = () => {
    // will toggle the upstairs state of goal...
    this.props.toggleGoalProps()
  }


  handleSuperArms = (e) => {
    // e.stopPropagation()
    // e.preventDefault()
    this.props.handleSuperArms()
  }



  render() {
    const { 
      trainingTypeHeading, 
      trainingTypeDescription, 
      trainingTypeTitle, 
      goalTitle, 
      goalOptionOne, 
      goalOptionTwo,
      isSuperset,
      isTypeHomeWorkout,
    } = this.props;

    

    return (
      <div className="workout-creator-container-options">
        <div className="workout-creator-container-selectedType">
          <div className="workout-type-wrapper">
            <div className="workout-type-heading">
              <h1>Select Training Type</h1>
            </div>

            <div className="workout-type-items">
              {workoutCreatorTypeItems.map(({ title, imageUrl, path, id }) => {
                return (
                  <NavLink exact activeClassName="selected" onClick={() => this.props.routeChanged(id)} className="workout-type-item" to={path}>
                    <WorkoutItem title={title} imageUrl={imageUrl} path={path} />
                  </NavLink>
                );
              })}
            </div>

            {/* 
            <div className="workout-creator-type-heading">
                <span className="uppercase">{trainingTypeTitle}</span>
            </div>
            */}
          </div>
        </div>

        <div className="workout-creator-container-typeDescription">
          <div className="typeDescription-heading">{trainingTypeHeading}</div>
          <div className="typeDescription-content">
            {trainingTypeDescription}
          </div>
        </div>

        <div className="workout-creator-elements-container">
          {/* Type of Supersets  */}
          {isSuperset ? <TrainingTypeSuperset /> : null}

          {/* Select Your Goal */}
          <div className="workout-creator-element">
            <div className="borderLeft" />
            <div className="workout-creator-element-heading">
              {goalTitle}
            </div>
            <div className="workout-creator-element-content">
              <div className="workout-creator-element-content-radio">
                <label htmlFor={goalOptionOne}>{goalOptionOne}</label>
                <input
                  type="radio"
                  id={goalOptionOne}
                  name="intensity"
                  value={goalOptionOne}
                />
                <div className="checkmark"></div>
              </div>
              <div className="workout-creator-element-content-radio">
                <label htmlFor={goalOptionTwo}>{goalOptionTwo}</label>
                <input
                  type="radio"
                  id={goalOptionTwo}
                  name="intensity"
                  value={goalOptionTwo}
                />
                <div className="checkmark"></div>
              </div>
            </div>
          </div>

          {/* Select Equipment */}
          {isTypeHomeWorkout ? <TrainingTypeHomeWorkout /> : null}
          

          {/* Booster Buttons */}
          <div className="workout-creator-element">
            <div className="workout-creator-element-heading">
              BOOST INTESITY OF TRAINING
            </div>
            <div className="workout-creator-element-content">

              <div  className="workout-creator-element-content-switchContainer">
                <div className="workout-creator-element-content-switchName">
                  Big Arms
                </div>
                <label className="switch">
                  <input onClick={this.handleSuperArms} type="checkbox" id="arms" name="arms" value="arms" />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="workout-creator-element-content-switchContainer">
                <div className="workout-creator-element-content-switchName">
                  Super Endurance
                </div>
                <label className="switch">
                  <input type="checkbox" id="endurance" name="endurance" value="endurance"/>
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          {/* Add Warm up */}
          <div className="workout-creator-element">
            <div className="workout-creator-element-heading">ADD WARMUP</div>
            <div className="workout-creator-element-content">
              <div className="workout-creator-element-content-switchContainer">
                <div className="workout-creator-element-content-switchName">
                  {this.state.isWarmupChecked ? "Yes" : "No"}
                </div>
                <label className="switch">
                  <input type="checkbox" id="warmup" name="warmup" value="warmup"/>
                  <span onClick={this.warmupCheckboxHandle} className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutCreatorOptions;
