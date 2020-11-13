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
            dateOfBirth: '1990-01-01',
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

    dateChanged = eventRef => {
        const { value, name } = eventRef.target
        let dynamicObject = {}
        dynamicObject[name] = value
        this.setState(dynamicObject)
    }

    validateForm = () => {
        let isValidForm = false
        // write logic here that will make this true or false....


        return isValidForm
    }

    submitFormHandler = formEventRef => {

        formEventRef.preventDefault()
        if(this.validateForm()) {
            // then we are cool so send data to the server...
        } else {
            alert('You have messed up somehow...')
        }
    }

    render() 
    {
        return <form onSubmit={this.submitFormHandler} className="logging-container">
            <div className="form-image" style={{ backgroundImage: `url(${formImage})` }} />
            <div className="form-container">
                <div className="heading">JOIN US</div>
                <div className="form-details">
                    <div className="form-inputs">
                        <label htmlFor="username"> Username </label><br></br>
                        <input required={true} type="text" value={this.state.userName} onChange={this.textElementChanged} placeholder="Pick a username" name="userName" id="username" ></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password"> Password </label><br></br>
                        <input required={true} type="password" value={this.state.password} onChange={this.textElementChanged} placeholder="Choose a password" name="password" id="password"></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email"> Email </label><br></br>
                        <input required={true} type="email" value={this.state.email} onChange={this.textElementChanged} placeholder="Add your email" name="email" id="email"></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="confirm-email"> Confirm Email </label><br></br>
                        <input required={true} type="email" value={this.state.emailConfirm} onChange={this.textElementChanged} placeholder="Confirm email" name="emailConfirm" id="confirm-email"></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="cars">Date of Birth</label><br></br>
                        <input required={true} value={this.state.dateOfBirth} onChange={this.dateChanged} type="date" id="start" name="dateOfBirth" max="2020-01-01" />
                    </div>
                    <div className="form-inputs-checkbox">
                        <input checked={this.state.keepSignedIn} value={this.state.keepSignedIn} onChange={this.checkboxClick} type="checkbox" id="checkbox" name="keepSignedIn"></input>
                        <label htmlFor="checkbox">KEEP ME SIGN IN</label>
                    </div>
                    <button className="sign-in-button" type="submit">SIGN IN</button>
                </div>
            </div>
        </form>
    }

}

export default JoinPage