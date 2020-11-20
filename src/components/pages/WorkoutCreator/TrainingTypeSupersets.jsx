import React from 'react'



const TrainingTypeSuperset = () => {
return(
<div className="workout-creator-element ">
        <div className="borderLeft" /> 
        <div className="workout-creator-element-heading">
        TYPE OF SUPERSETS
        </div>
        <div className="workout-creator-element-content">
        <div className="workout-creator-element-content-radio">
        <div><label for="sameMuscle">Same muscle group</label></div>
        <input type="radio" id="sameMuscle" name="typeOfTraining" value="sameMuscle"/>
        <div class="checkmark"></div>

        </div>
        <div className="workout-creator-element-content-radio">
        <div><label for="oppositeMuscle">Opposite muscle group</label></div>
        <input type="radio" id="oppositeMuscle" name="typeOfTraining" value="oppositeMuscle"/>
        <div class="checkmark"></div>

        </div>
        </div>
       </div>

)
}



export default TrainingTypeSuperset;