import React from "react"
import "./Welcome.css"
import titleImage from './../images/titleimg.png'

function Welcome(){
    return(
        <div id="welcome-container">
   
   <div id="welcome-container-text">
<h1>COMPLETE</h1>
<h1>WORKOUT</h1>
<h1>PROGRAMMER</h1>
<p>Compose your own training ! or...</p>
<p>use trusted one</p>

   </div>
   <div id="welcome-container-img">
<img src={titleImage} alt="fit-couple"/>
   </div>
    </div>
    )
};

export default Welcome;