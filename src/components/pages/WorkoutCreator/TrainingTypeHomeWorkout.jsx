import React from 'react'



   const TrainingTypeHomeWorkout = () => {
return(
<div className="workout-creator-element ">
<div className="borderLeft" />
            <div className="workout-creator-element-heading">
              TRAINING TYPE FOR NO EQUIPMENT WORKOUT
            </div>
            <div className="workout-creator-element-content">
              <div className="workout-creator-element-content-radio">
                <label for="gym">Regular</label>
                <input type="radio" id="regular" name="homeTrainingType" value="regular" />
              </div>
              <div className="workout-creator-element-content-radio">
                <label for="home">Supersets</label>
                <input type="radio" id="supersets" name="homeTrainingType" value="supersets" />
              </div>
              <div className="workout-creator-element-content-radio">
                <label for="home">Giantsets</label>
                <input type="radio" id="giantsets" name="homeTrainingType" value="giantsets" />
              </div>
            </div>
       </div>

)
}

export default TrainingTypeHomeWorkout;