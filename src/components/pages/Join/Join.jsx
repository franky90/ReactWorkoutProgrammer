import React, { Component } from 'react'
import formImage from "../../../images/split-background.jpg"
import "./Join.css"





class JoinPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            passwordConfirm: '',
            email: '',
            emailConfirm: '',
            dateOfBirth: '1990-01-01',
            keepSignedIn: true,
            formValidations: {
                isEmailValid: true,
                isPasswordValid: true
            }
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


    getFormValidationsState = () => {
        // valid if they are the same
        const isEmailValid = this.state.email === this.state.emailConfirm
        // valid if they are the same
        const isPasswordValid = this.state.password === this.state.passwordConfirm
        return {
            isEmailValid,
            isPasswordValid
        }
    }

    submitFormHandler = formEventRef => {
        formEventRef.preventDefault()
        this.setState({formValidations: this.getFormValidationsState()})
    }

    getValidationClassName = isValidInput => {
        return isValidInput ? '' : 'invalidInput'
    }


    render() 
    {
        const { isEmailValid, isPasswordValid } = this.state.formValidations
        const passwordClassName = this.getValidationClassName(isPasswordValid)
        const emailClassName = this.getValidationClassName(isEmailValid)

        return <form onSubmit={this.submitFormHandler} className="logging-container">
            <div className="form-image" style={{ backgroundImage: `url(${formImage})` }} />
            <div className="form-container">
                <div className="heading">JOIN US</div>
                <div className="form-details">
                    <div className="form-inputs">
                        <label htmlFor="username"> Username </label><br></br>
                        <input required={true} minlength="5" maxlength="15" type="text"
                         value={this.state.userName} onChange={this.textElementChanged} placeholder="Pick a username" name="userName" id="username" ></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password"> Password </label><br></br>
                        <input className={passwordClassName}
                            required={true} minlength="8" maxlength="30" type="password" value={this.state.password} onChange={this.textElementChanged} placeholder="Add a password" name="password" id="password">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="confirm-password"> Confirm password </label><br></br>
                        <input 
                            className={passwordClassName}
                            required={true} minlength="8" maxlength="30" type="password" value={this.state.passwordConfirm} onChange={this.textElementChanged} placeholder="Confirm password" name="passwordConfirm" id="confirm-password">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email"> Email </label><br></br>
                        <input 
                            className={emailClassName}
                            required={true} type="email" value={this.state.email} onChange={this.textElementChanged} placeholder="Add your email" name="email" id="email">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="confirm-email"> Confirm Email </label><br></br>
                        <input 
                            className={emailClassName}
                            required={true} type="email" value={this.state.emailConfirm} onChange={this.textElementChanged} placeholder="Confirm email" name="emailConfirm" id="confirm-email">
                        </input>
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