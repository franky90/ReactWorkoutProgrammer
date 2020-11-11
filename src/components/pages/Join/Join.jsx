import React from 'react'
import LL_Cool_J from "../../../images/split-background.jpg"
import "./Join.css"

// NOTE FOR PETER... 
// You are going to need to lookup "TWO WAY BINDING" in react to make this work, see following link from stackoverflow --> https://stackoverflow.com/questions/42217579/data-binding-in-react
// link may take you to react documentation of this ---> https://reactjs.org/docs/forms.html
// this is probably the best tutorial for a beginner I think ---> https://reactgo.com/two-way-data-binding-react/
// You are going to need to call a function when the form is clicked that will eventually call the server
// Server is going to give you a response
// I hope this helps man, cheers
export default function Join() {
    return (
            <div className="logging-container">
                <div className="form-image" style={{ backgroundImage: `url(${LL_Cool_J})` }} />
                <div className="form-container">
                    <div className="heading">
                        JOIN US
                    </div>
                    <div className="form-details">
                        <div className="form-inputs">
                            <label for="username"> Username </label><br></br>
                            <input type="text" placeholder="Pick a username" name="username" id="username" ></input>
                        </div>

                        <div className="form-inputs">
                            <label for="password"> Password </label><br></br>
                            <input type="password" placeholder="Choose a password" name="password" id="password"></input>
                        </div>

                        <div className="form-inputs">
                            <label for="email"> Email </label><br></br>
                            <input type="email" placeholder="Add your email" name="email" id="email"></input>
                        </div>

                        <div className="form-inputs">
                            <label for="confirm-email"> Confirm Email </label><br></br>
                            <input type="email" placeholder="Confirm email" name="confirm-email" id="confirm-email"></input>
                        </div>

                        <div className="form-inputs">
                            <label for="cars">Date of Birth</label><br></br>
                            <input type="date" id="start" name="trip-start" value="1990-01-01" min="1900-01-01" max="2020-01-01" />
                        </div>
                        <div className="form-inputs-checkbox">
                            <input type="checkbox" id="checkbox" name="checkbox" value="Yes"></input>
                            <label for="checkbox">KEEP ME SIGN IN</label>
                        </div>
                        <button type="button"> SIGN IN </button>
                    </div>
                </div>
            </div>
    )
}