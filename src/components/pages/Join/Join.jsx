import React from 'react'
import formImage from "../../../images/split-background.jpg"
import "./Join.css"

export default function Join(){
    return(
        <>
        <div className="logging-container">
        <div className="form-image" style={{backgroundImage: `url(${formImage})`}} />
        
        <div className="form-container">
        <div className="heading">  
        JOIN US
        </div>
        <div className="form-details">
        <div className="form-inputs">


        <label for="username"> Username </label><br></br>
        <input type="text" placeholder="Pick a username" name="username" id="username" value=""></input>
        
         </div>
     
         <div className="form-inputs">
         <label for="password"> Password </label><br></br>
        <input type="password" placeholder="Choose a password" name="password" id="password" value=""></input>
    
        </div>

        <div className="form-inputs">

        <label for="email"> Email </label><br></br>
        <input type="email" placeholder="Add your email" name="email" id="email" value=""></input>

        </div>

        <div className="form-inputs">
        <label for="confirm-email"> Confirm Email </label><br></br>
        <input type="email" placeholder="Confirm email" name="confirm-email" id="confirm-email" value=""></input>
       
        </div>
        
        <div className="form-inputs">
        <label for="cars">Date of Birth</label><br></br>
        <input type="date" id="start" name="trip-start"
        value="1900-01-01"
        min="1900-01-01" max="2020-01-01" />
        </div>
        <div className="form-inputs">
        <input type="checkbox" id="vehicle1" name="checkbox" value="Yes"></input>
        <label for="checkbox">KEEP ME SIGN IN</label>
        
        
        </div>   
        <button type="button"> SIGN IN </button>
        </div>

        </div>
         </div>
        </>
    )
}