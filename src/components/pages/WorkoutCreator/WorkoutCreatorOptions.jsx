import React, { Component } from "react";
// NOTE TO PETER - DELETE THIS COMPONENT
import WorkoutItem from "./WorkoutItem";
import { workoutCreatorTypeItems } from "./workoutCreatorTypeItems";
import { NavLink } from "react-router-dom";
import TrainingTypeHomeWorkout from "./TrainingTypeHomeWorkout";

class WorkoutCreatorOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isWarmupChecked: false,
      isLeftIntensityChecked: true,
      isLeftSupersetCheckboxChecked: true,
      renderHomeWorkOutOptions: [
        {
          isSelected: true,
          value: 'Regular'
        },
        {
          isSelected: false,
          value: 'Supersets'
        },
        {
          isSelected: false,
          value: 'Giantsets'
        }
      ]
    };
  }

  warmupCheckboxHandle = () => {
    this.setState({ isWarmupChecked: !this.state.isWarmupChecked });
  }

  changeIntensityCheckbox = (newValue) => {
    if (newValue !== this.state.isLeftIntensityChecked) this.setState({ isLeftIntensityChecked: newValue });
  }

  renderIntensityCheckbox = (isLeft) => {
    const { isLeftIntensityChecked } = this.state
    let className = "innerCheckbox"
    if ((isLeft && isLeftIntensityChecked) || (!isLeft && !isLeftIntensityChecked)) className += " active"
    return <div className="checkmark flexWrapper centered clickable"><div className={className}></div></div>
  }

  changeSupersetCheckbox = newValue => {
    if (newValue !== this.state.isLeftSupersetCheckboxChecked) this.setState({ isLeftSupersetCheckboxChecked: newValue });
  }

  renderSupersetCheckbox = isLeft => {
    const { isLeftSupersetCheckboxChecked } = this.state
    let className = "innerCheckbox"
    if ((isLeft && isLeftSupersetCheckboxChecked) || (!isLeft && !isLeftSupersetCheckboxChecked)) className += " active"
    return <div className="checkmark flexWrapper centered clickable"><div className={className}></div></div>
  }

  renderSuperSetOptions = () => {
    if(this.props.isSuperset === false) return null
    return (<div className="workout-creator-element">
        <div className="borderLeft" />
        <div className="workout-creator-element-heading">TYPE OF SUPERSETS</div>
        <div className="workout-creator-element-content">
          <div onClick={() => this.changeSupersetCheckbox(true)} className="clickable workout-creator-element-content-radio">
            <label>Same muscle group</label>
            {this.renderSupersetCheckbox(true)}
          </div>
          <div onClick={() => this.changeSupersetCheckbox(false)} className="clickable workout-creator-element-content-radio">
            <label>Opposite muscle group</label>
            {this.renderSupersetCheckbox(false)}
          </div>
        </div>
      </div>
    )
  }

  renderCheckBox = isSelected => {
    let className = "innerCheckbox"
    if (isSelected) className += " active"
    return <div className="checkmark flexWrapper centered clickable"><div className={className}></div></div>
  }


  changeHomeWorkOutSelection = (newSelection) => {
    const renderHomeWorkOutOptionsCopy = this.state.renderHomeWorkOutOptions.slice()
    renderHomeWorkOutOptionsCopy.forEach(o => o.isSelected = false)
    const selection = renderHomeWorkOutOptionsCopy.find(o => o.value === newSelection.value)
    selection.isSelected = true
    this.setState({renderHomeWorkOutOptions: renderHomeWorkOutOptionsCopy})
  }
  renderHomeWorkOutOptions = () => {
    if(this.props.isTypeHomeWorkout === false) return null
    return (<div className="workout-creator-element">
        <div className="borderLeft" />
        <div className="workout-creator-element-heading">TRAINING TYPE FOR NO EQUIPMENT WORKOUT</div>
        <div className="workout-creator-element-content">
          {this.state.renderHomeWorkOutOptions.map(option => 
            <div onClick={() => this.changeHomeWorkOutSelection(option)} className="clickable workout-creator-element-content-radio">
              <label>{option.value}</label>
                {this.renderCheckBox(option.isSelected)}
            </div>)}
        </div>
      </div>
    )
  }

  render() {
    const { trainingTypeHeading, trainingTypeDescription, goalTitle, goalOptionOne, goalOptionTwo } = this.props;
    return (
      <div className="workout-creator-container-options">
        <div className="workout-creator-container-selectedType">
          <div className="workout-type-wrapper">
            <div className="workout-type-heading">
              <h1>Select Training Type</h1>
            </div>
            <div className="workout-type-items">
              {workoutCreatorTypeItems.map(({ title, imageUrl, path, id }) => <NavLink exact activeClassName="selected" onClick={() => this.props.routeChanged(id)} className="workout-type-item" to={path}><WorkoutItem title={title} imageUrl={imageUrl} path={path}/></NavLink>)}
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
          {this.renderSuperSetOptions()}

          {/* Select Your Goal */}
          <div className="workout-creator-element">
            <div className="borderLeft" />
            <div className="workout-creator-element-heading">{goalTitle}</div>
            <div className="workout-creator-element-content">
              <div onClick={() => this.changeIntensityCheckbox(true)} className="clickable workout-creator-element-content-radio">
                <label>{goalOptionOne}</label>
                {this.renderIntensityCheckbox(true)}
              </div>
              <div onClick={() => this.changeIntensityCheckbox(false)} className="clickable workout-creator-element-content-radio">
                <label>{goalOptionTwo}</label>
                {this.renderIntensityCheckbox(false)}
              </div>
            </div>
          </div>

          {/* Homeworkout */}
          {this.renderHomeWorkOutOptions()}

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
                <label className="switch">
                  <input type="checkbox" id="arms" name="arms" value="arms" />
                  <span className="slider round"></span>
                </label>
              </div>

              <div className="workout-creator-element-content-switchContainer">
                <div className="workout-creator-element-content-switchName">Super Endurance</div>
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
    )
  }
}

export default WorkoutCreatorOptions;
