import React, { Component } from 'react'
import formImage from "../../../images/split-background.jpg"
import "./Join.css"

class JoinPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            email: '',
            emailConfirm: '',
            dateOfBirth: '',
            keepSignedIn: true
        }
    }

    textElementChanged = eventRef => {
        const { name, value } = eventRef.target
        let dynamicObject = {}
        dynamicObject[name] = value
        this.setState(dynamicObject)
    }

    checkboxClick = eventRef => {
        const { name, value } = eventRef.target
        let dynamicObject = {}
        dynamicObject[name] = !(value==='true')
        this.setState(dynamicObject)
    }

    render() 
    {
        return <div className="logging-container">
            <div className="form-image" style={{ backgroundImage: `url(${formImage})` }} />
            <div className="form-container">
                <div className="heading">JOIN US</div>
                <div className="form-details">
                    <div className="form-inputs">
                        <label for="username"> Username </label><br></br>
                        <input type="text" value={this.state.userName} onChange={this.textElementChanged} placeholder="Pick a username" name="userName" id="username" ></input>
                    </div>
                    <div className="form-inputs">
                        <label for="password"> Password </label><br></br>
                        <input type="password" value={this.state.password} onChange={this.textElementChanged} placeholder="Choose a password" name="password" id="password"></input>
                    </div>
                    <div className="form-inputs">
                        <label for="email"> Email </label><br></br>
                        <input type="email" value={this.state.email} onChange={this.textElementChanged} placeholder="Add your email" name="email" id="email"></input>
                    </div>
                    <div className="form-inputs">
                        <label for="confirm-email"> Confirm Email </label><br></br>
                        <input type="email" value={this.state.emailConfirm} onChange={this.textElementChanged} placeholder="Confirm email" name="emailConfirm" id="confirm-email"></input>
                    </div>
                    <div className="form-inputs">
                        <label for="cars">Date of Birth</label><br></br>
                        <input type="date" id="start" name="trip-start" value="1990-01-01" min="1900-01-01" max="2020-01-01" />
                    </div>
                    <div className="form-inputs-checkbox">
                        <input checked={this.state.keepSignedIn} value={this.state.keepSignedIn} onChange={this.checkboxClick} type="checkbox" id="checkbox" name="keepSignedIn"></input>
                        <label for="checkbox">KEEP ME SIGN IN</label>
                    </div>
                    <button className="sign-in-button" type="button">SIGN IN</button>
                </div>
            </div>
        </div>
    }

}

export default JoinPage