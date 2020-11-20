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
              <div><label for="regular">Regular</label></div>
                <input type="radio" id="regular" name="homeTrainingType" value="regular" />
                <div class="checkmark"></div>
              </div>
              <div className="workout-creator-element-content-radio">
                <div><label for="supersets">Supersets</label></div>
                <input type="radio" id="supersets" name="homeTrainingType" value="supersets" />
                <div class="checkmark"></div>
              </div>
              <div className="workout-creator-element-content-radio">
                <div><label for="giantsets">Giantsets</label></div>
                <input type="radio" id="giantsets" name="homeTrainingType" value="giantsets" />
                <div class="checkmark"></div>
              </div>
            </div>
       </div>

)
}

export default TrainingTypeHomeWorkout;