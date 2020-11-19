import React, { Component } from "react";
import TrainingTypeSuperset from "./TrainingTypeSupersets";
// NOTE TO PETER - DELETE THIS COMPONENT
// import WorkoutCreatorTrainingType from "./WorkoutCreatorTrainingType";
import WorkoutItem from "./WorkoutItem";
import { workoutCreatorTypeItems } from "./workoutCreatorTypeItems";
import { Link } from "react-router-dom";

class WorkoutCreatorOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarmupChecked: false
    }
  }

  warmupCheckboxHandle = () => {
    this.setState({ isWarmupChecked: !this.state.isWarmupChecked });
  };

  

  render() {
    const { 
      trainingTypeHeading, 
      trainingTypeDescription, 
      trainingTypeTitle, 
      goalTitle, 
      goalOptionOne, 
      goalOptionTwo 
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
                  <Link onClick={() => this.props.routeChanged(id)} className="workout-type-item" to={path}>
                    <WorkoutItem title={title} imageUrl={imageUrl} path={path} />
                  </Link>
                );
              })}
            </div>
            <div className="workout-creator-type-heading">
                <span className="uppercase">{trainingTypeTitle}</span>
            </div>

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
          {this.props.isSuperset ? <TrainingTypeSuperset /> : null}

          {/* Select Your Goal */}
          <div className="workout-creator-element">
            <div className="borderLeft" />
            <div className="workout-creator-element-heading">
              {goalTitle}
            </div>
            <div className="workout-creator-element-content">
              <div className="workout-creator-element-content-radio">
                <label for={goalOptionOne}>{goalOptionOne}</label>
                <input
                  type="radio"
                  id={goalOptionOne}
                  name="yourGoal"
                  value={goalOptionOne}
                />
              </div>
              <div className="workout-creator-element-content-radio">
                <label for={goalOptionTwo}>{goalOptionTwo}</label>
                <input
                  type="radio"
                  id={goalOptionTwo}
                  name="yourGoal"
                  value={goalOptionTwo}
                />
              </div>
            </div>
          </div>

          {/* Select Equipment */}
          <div className="workout-creator-element">
            <div className="borderLeft" />
            <div className="workout-creator-element-heading">
              YOUR EQUIPMENT
            </div>
            <div className="workout-creator-element-content">
              <div className="workout-creator-element-content-radio">
                <label for="gym">Gym</label>
                <input type="radio" id="gym" name="Equipment" value="gym" />
              </div>
              <div className="workout-creator-element-content-radio">
                <label for="home">Home</label>
                <input type="radio" id="home" name="Equipment" value="home" />
              </div>
            </div>
          </div>
          {/* Booster Buttons */}
          <div className="workout-creator-element">
            <div className="workout-creator-element-heading">
              BOOST INTESITY OF TRAINING
            </div>
            <div className="workout-creator-element-content">
              <div className="workout-creator-element-content-switchContainer">
                <div className="workout-creator-element-content-switchName">
                  Big Arms
                </div>
                <label class="switch">
                  <input type="checkbox" id="arms" name="arms" value="arms" />
                  <span class="slider round"></span>
                </label>
              </div>

              <div className="workout-creator-element-content-switchContainer">
                <div className="workout-creator-element-content-switchName">
                  Super Endurance
                </div>
                <label class="switch">
                  <input
                    type="checkbox"
                    id="endurance"
                    name="endurance"
                    value="endurance"
                  />
                  <span class="slider round"></span>
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
                <label class="switch">
                  <input
                    type="checkbox"
                    id="warmup"
                    name="warmup"
                    value="warmup"
                  />
                  <span
                    onClick={this.warmupCheckboxHandle}
                    class="slider round"
                  ></span>
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
