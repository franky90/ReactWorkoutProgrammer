import React from "react";
import "./Info.css"

function Information(){
    return(
        <div id="info-container">
    <div id="welcome-information">
<h1>Welcome !!!</h1>
<p>
By using this app you will create your own Full Body training routine.
To do this - please<span> Select Your Goal</span> , <span>Choose Intensity </span> and use buttons below to generate your favourite exercises.
</p>
<p>
Also you can use Ready To Go workouts which was tailored by our trusted trainers.
From the menu below select which routine you are interested in.
</p>
<p>
To save your training please click <span>Copy Workout</span> button below table with exercises.
Now you can paste it to your google sheets or send it via messager/email.
</p>
<p>
Buttons <span>Extra Pump</span> and <span>Extra Endurance</span> adding additional exercises to your workout    
</p>
<p>
If you are willing to check more details about an exercise just click at it's name.    
</p>
    </div>
    </div>
    )
};

export default Information;