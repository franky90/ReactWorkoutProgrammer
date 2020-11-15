import React from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import "./WorkoutCreator.css"
import {WorkoutTable} from "../WorkoutTable"


class WorkoutCreatorRegular extends React.Component{
 
  render(){
    
  return(
        <div className="workout-creator-container">
        <div className="trainings-menu-heading">
                <h1>Workout Creator</h1>
            </div>

        <div className="workout-creator-container-options">
        <div className="workout-creator-container-selectedType">
        
        <label for="muscle-group">Selected Training Type</label>
          <select name="muscle-group" id="muscle-group">
          <option value="regular"> Regular </option>
          <option value="super-sets"> Super sets </option>
          <option value="giant-sets"> Giant sets </option>
          <option value="drop-sets"> Drop sets</option>
          </select>
          <button className="add-type-button" type="button">Change</button>
        </div>

        <div className="workout-creator-container-typeDescription">
        <div className="typeDescription-heading">
        What is Super set ?
        </div>
        <div className="typeDescription-content">
        At its very core, a superset workout is simple: alternating sets of two different exercises with no rest in between. For example, doing a set of biceps curls and a set of triceps dips, alternating until you've completed all the sets.
 "It increases the intensity of the workout while reducing the time it takes to execute the program," says Tsakpoe, this making it more effective. But beyond that, there are ways to use supersets to seriously jack up your training or focus on certain goals.
        </div>
        </div>

        <div className="workout-creator-elements-container"> 
        
        {/* Type of Supersets  */}
        <div className="workout-creator-element ">
        <div className="borderLeft" /> 
        <div className="workout-creator-element-heading">
        TYPE OF SUPERSETS
        </div>
        <div className="workout-creator-element-content">
        <div className="workout-creator-element-content-radio">
        <input type="radio" id="sameMuscle" name="typeOfTraining" value="sameMuscle"/>
        <label for="typeOfTraining">Same muscle group</label>
        </div>
        <div className="workout-creator-element-content-radio">
        <input type="radio" id="oppositeMuscle" name="typeOfTraining" value="oppositeMuscle"/>
        <label for="typeOfTraining">Opposite muscle group</label>
        </div>
        </div>
       </div>

        {/* Select Your Goal */}
       <div className="workout-creator-element">
       <div className="borderLeft" /> 
        <div className="workout-creator-element-heading">
        SELECT YOUR GOAL
        </div>
        <div className="workout-creator-element-content">
        <div className="workout-creator-element-content-radio">
        <input type="radio" id="strength" name="yourGoal" value="strength"/>
        <label for="strength">Strength</label>
        </div>
        <div className="workout-creator-element-content-radio">
        <input type="radio" id="endurance" name="yourGoal" value="endurance"/>
        <label for="endurance">Endurance</label>
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
        <input type="radio" id="gym" name="Equipment" value="gym"/>
        <label for="gym">Gym</label>
        </div>
        <div className="workout-creator-element-content-radio">
        <input type="radio" id="home" name="Equipment" value="home"/>
        <label for="home">Home</label>
        </div>
        </div>
       </div>
        {/* Booster Buttons */}
        <div className="workout-creator-element"> 
        <div className="workout-creator-element-heading">
        BOOST INTESITY OF TRAINING
        </div>
        <div className="workout-creator-element-content">
        <div>
        <button> BUTTON ONE</button>
        </div>
        <div>
        <button> BUTTON TWO</button>
        </div>
        </div>
       </div>

        </div>

        {/* <div className="workout-creator-element"> 
        Select Goal Select Equipment
        </div>
      Buttons with boosters
        <div className="workout-creator-element"> 
        
        </div> */}
        
        </div>
    
    <WorkoutTable />

</div>
    
    )
}
}
export default WorkoutCreatorRegular;