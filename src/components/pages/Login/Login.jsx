import React, { Component } from 'react'
import formImage from "../../../images/split-background.jpg"
import "./../Join/JoinPage.css"
import {Link} from "react-router-dom"

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: ''
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

    // dateChanged = eventRef => {
    //     const { value, name } = eventRef.target
    //     let dynamicObject = {}
    //     dynamicObject[name] = value
    //     this.setState(dynamicObject)
    // }


    // getFormValidationsState = () => {
    //     // valid if they are the same
    //     const isEmailValid = this.state.email === this.state.emailConfirm
    //     // valid if they are the same
    //     const isPasswordValid = this.state.password === this.state.passwordConfirm
    //     return {
    //         isEmailValid,
    //         isPasswordValid
    //     }
    // }

    // submitFormHandler = formEventRef => {
    //     formEventRef.preventDefault()
    //     this.setState({formValidations: this.getFormValidationsState()})
    // }

    // getValidationClassName = isInputValid => {
    //     return (isInputValid ? '' : 'invalidInput' ) + " noOutline"
    // }


    render() 
    {
        // const { isEmailValid, isPasswordValid } = this.state.formValidations
        // const passwordClassName = this.getValidationClassName(isPasswordValid)
        // const emailClassName = this.getValidationClassName(isEmailValid)

        return <form onSubmit={this.submitFormHandler} className="activeInputForm logging-container">
            <div className="form-image" style={{ backgroundImage: `url(${formImage})` }} />
            
            <div className="form-container">

            <div className="form-container-heading">
            
            <div className="form-container-heading-join">
            <Link className="form-container-heading-name " to="/join">JOIN</Link>
            
            <div className="form-container-heading-light light-hidden" />
            </div>

            <div className="form-container-heading-login">
            <div className="form-container-heading-name loginactive">LOGIN</div>
            <div className="form-container-heading-light" />
            </div>

            </div>
                

                <div className="form-details">
                    <div className="form-inputs">
                        <label htmlFor="username"> Username </label><br></br>
                        <input className="noOutline" required={true} minlength="5" maxlength="15" type="text"
                         value={this.state.userName} onChange={this.textElementChanged} placeholder="Pick a username" name="userName" id="username" ></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password"> Password </label><br></br>
                        <input required={true} minlength="8" maxlength="30" type="password" value={this.state.password} onChange={this.textElementChanged} placeholder="Add a password" name="password" id="password">
                        </input>
                    </div>
                    
                    <div className="form-inputs-checkbox">
                        <input className="noOutline" checked={this.state.keepSignedIn} value={this.state.keepSignedIn} onChange={this.checkboxClick} type="checkbox" id="checkbox" name="keepSignedIn"></input>
                        <label htmlFor="checkbox">KEEP ME SIGN IN</label>
                    </div>
                    <button className="sign-in-button" type="submit">SIGN IN</button>
                </div>
            </div>
        </form>
    }
}

export default Login