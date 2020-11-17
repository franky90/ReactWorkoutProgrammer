import React, {Component} from 'react'
import TrainingTypeSuperset from "./TrainingTypeSupersets"

 class WorkoutCreatorOptions extends Component{
    constructor(props){
        super(props)

        this.state = {
          isWarmupChecked: false,
          isTypeSuperset: this.props.isSuperset
          };
    }

    warmupCheckboxHandle = () =>{
      this.setState({
        isWarmupChecked: !this.isWarmupChecked
        })
    }

    

    
    render(){
      
      
      const {trainingTypeHeading, trainingTypeDescription} = this.props
      

        return(

            <div className="workout-creator-container-options">
        <div className="workout-creator-container-selectedType">
        
        <label for="muscle-group">Selected Training Type</label>
          <select name="muscle-group" id="muscle-group">
          <option value="regular"> Regular </option>
          <option value="super-sets"> Super sets </option>
          <option value="giant-sets"> Giant sets </option>
          <option value="drop-sets"> Drop sets</option>
          </select>
          <button className="add-type-button" type="button">RESET</button>
        </div>

        <div className="workout-creator-container-typeDescription">
        <div className="typeDescription-heading">
        
        {trainingTypeHeading}
        </div>
        <div className="typeDescription-content">
        {trainingTypeDescription}
  
        </div>
        </div>

        <div className="workout-creator-elements-container"> 
        
        {/* Type of Supersets  */}
        {this.state.isTypeSuperset ? <TrainingTypeSuperset />: null}
       
        {/* Select Your Goal */}
       <div className="workout-creator-element">
       <div className="borderLeft" /> 
        <div className="workout-creator-element-heading">
        SELECT YOUR GOAL
        </div>
        <div className="workout-creator-element-content">
        <div className="workout-creator-element-content-radio">
        <label for="strength">Strength</label>
        <input type="radio" id="strength" name="yourGoal" value="strength"/>
        
        </div>
        <div className="workout-creator-element-content-radio">
        <label for="endurance">Endurance</label>
        <input type="radio" id="endurance" name="yourGoal" value="endurance"/>
        
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
        <input type="radio" id="gym" name="Equipment" value="gym"/>
        
        </div>
        <div className="workout-creator-element-content-radio">
        <label for="home">Home</label>
        <input type="radio" id="home" name="Equipment" value="home"/>
        
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
        <div className="workout-creator-element-content-switchName">Big Arms</div>
        <label class="switch"> 
        <input type="checkbox" id="arms" name="arms" value="arms"/>
        <span class="slider round"></span>
        </label>
        </div>

        <div className="workout-creator-element-content-switchContainer"> 
        <div className="workout-creator-element-content-switchName">Super Endurance</div>
        <label class="switch"> 
        <input type="checkbox" id="endurance" name="endurance" value="endurance"/>
        <span class="slider round"></span>
        </label>
        </div>

        </div>
       </div>
        {/* Add Warm up */}
       <div className="workout-creator-element"> 
        <div className="workout-creator-element-heading">
        ADD WARMUP
        </div>
        <div className="workout-creator-element-content">
       
        <div className="workout-creator-element-content-switchContainer"> 
        <div className="workout-creator-element-content-switchName">{this.state.isWarmupChecked? "Yes" : "No"}</div>
        <label class="switch"> 
        <input type="checkbox" id="warmup" name="warmup" value="warmup"/>
        <span onClick={this.warmupCheckboxHandle} class="slider round"></span>
        </label>
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

        )
    }
}

export default WorkoutCreatorOptions