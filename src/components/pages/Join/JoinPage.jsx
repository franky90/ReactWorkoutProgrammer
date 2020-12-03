import React, { Component } from 'react'
import formImage from "../../../images/split-background.jpg"
import "./JoinPage.css"
import { Link, Redirect } from "react-router-dom"
import moment from 'moment'
import Axios from 'axios'
import { UserApi } from './../../../Service/UserApi'




class JoinPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            password: '',
            passwordConfirm: '',
            email: '',
            emailConfirm: '',
            dateOfBirth: '1988-01-01',
            dob: {
                day:    1,
                month:  0,
                year:   1988
            },
            keepSignedIn: false,
            formValidations: {
                isEmailValid: false,
                isPasswordValid: false,
                isUserValid: false
            },
            isRedirecting: false
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
        dynamicObject[name] = !(value === 'true')
        this.setState(dynamicObject)
    }

    dateChanged = eventRef => {
        const { value, valueAsDate, name } = eventRef.target
        let dynamicObject = {}
        dynamicObject[name] = value

        const dob = {
            day:    0,
            month:  0,
            year:   0
        }
        if(valueAsDate instanceof Date) {
            // this is in terms of minutes
            const minutesOffSet = valueAsDate.getTimezoneOffset()
            const _date = moment(valueAsDate)
            // https://momentjs.com/docs/#/manipulating/add/
            _date.add(minutesOffSet, 'minutes')
            const day = _date.date()
            const month = _date.month()
            const year = _date.year()
            dob.day = day
            dob.month = month
            dob.year = year
        }
        // this.setState({dynamicObject, dob})
        const newState = {...this.state, dob}
        this.setState(newState)
        this.setState(dynamicObject)
    }
 
 
    getFormValidationsState = () => {
        // valid if they are the same
        const isEmailValid = this.state.email === this.state.emailConfirm
        // valid if they are the same
        const isPasswordValid = this.state.password === this.state.passwordConfirm
        // valid if it contains only lettersNumbers characters
        const isUserValid = this.state.userName.match(/^[0-9a-zA-Z]+$/)
        return {
            isEmailValid,
            isPasswordValid,
            isUserValid
        }
    }

    submitFormHandler = formEventRef => {
        formEventRef.preventDefault()
        const formValidations = this.getFormValidationsState()
        this.setState({formValidations})
        const { isEmailValid, isPasswordValid, isUserValid } = formValidations
        if(isEmailValid && isPasswordValid && isUserValid) {
            const apiPayload = {
                userName: this.state.userName, 
                password: this.state.password, 
                email: this.state.email, 
                dob: this.state.dob
            }
            new UserApi().register(apiPayload).then((goodAxiosResponse) => {
                if(goodAxiosResponse.data.isSuccess) {
                    // need to alert this to a service that will use it
                    const jwt = goodAxiosResponse.data.jwt
                    this.setState({isRedirecting: true})
                } else {
                    console.log(goodAxiosResponse.data)
                }

            }).catch((badAxiosResponse) => {
                console.log(badAxiosResponse)
            })
        }
    }

    getValidationClassName = isInputValid => {
        return (isInputValid ? '' : 'invalidInput') + " noOutline"
    }


    render() {

        if(this.state.isRedirecting && this.state.userName.length > 0) {
            return <Redirect to={`/user/${this.state.userName}`}/>
        }

        const { isEmailValid, isPasswordValid, isUserValid } = this.state.formValidations
        const passwordClassName = this.getValidationClassName(isPasswordValid)
        const emailClassName = this.getValidationClassName(isEmailValid)
        const userClassName = this.getValidationClassName(isUserValid)

        return <form onSubmit={this.submitFormHandler} autocomplete="off" className="activeInputForm logging-container">
            <div className="form-image" style={{ backgroundImage: `url(${formImage})` }} />

            <div className="form-container">

                <div className="form-container-heading">

                    <div className="form-container-heading-join">
                        <div className="form-container-heading-name joinactive">JOIN</div>
                        <div className="form-container-heading-light" />
                    </div>

                    <div className="form-container-heading-login">
                        <Link className="form-container-heading-name" to="/log-in">LOGIN</Link>
                        <div className="form-container-heading-light light-hidden" />
                    </div>

                </div>


                <div className="form-details">
                    <div className="form-inputs">
                        <label htmlFor="username" className={`${this.state.userName.length ? "shrink" : ""} form-input-label`}> Username </label>
                        <input 
                         className={userClassName} required={true} minLength="5" maxLength="15" type="text"
                         value={this.state.userName} onChange={this.textElementChanged} placeholder="" name="userName" id="username" ></input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password" className={`${this.state.password.length ? "shrink" : ""} form-input-label`}> Password </label>
                        <input className={passwordClassName}
                            required={true} minLength="8" maxLength="30" type="password" value={this.state.password} onChange={this.textElementChanged} placeholder="" name="password" id="password">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="confirm-password" className={`${this.state.passwordConfirm.length ? "shrink" : ""} form-input-label`}> Confirm password </label>
                        <input
                            className={passwordClassName}
                            required={true} minLength="8" maxLength="30" type="password" value={this.state.passwordConfirm} onChange={this.textElementChanged} placeholder="" name="passwordConfirm" id="confirm-password">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="email" className={`${this.state.email.length ? "shrink" : ""} form-input-label`}> Email </label>
                        <input
                            className={emailClassName}
                            required={true} type="email" value={this.state.email} onChange={this.textElementChanged} placeholder="" name="email" id="email">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="confirm-email" className={`${this.state.emailConfirm.length ? "shrink" : ""} form-input-label`}> Confirm Email </label>
                        <input
                            className={emailClassName}
                            required={true} type="email" value={this.state.emailConfirm} onChange={this.textElementChanged} placeholder="" name="emailConfirm" id="confirm-email">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="dob">Date of Birth</label><br></br>
                        <input className="noOutline" required={true} value={this.state.dateOfBirth} onChange={this.dateChanged} type="date" id="dob" name="dateOfBirth" max="2020-01-01" />
                    </div>
                    <div className="form-inputs-checkbox">
                        <div className="form-inputs-checkbox-checkelement">
                        <input className="noOutline" checked={this.state.keepSignedIn} value={this.state.keepSignedIn} onChange={this.checkboxClick} type="checkbox" id="checkbox" name="keepSignedIn"></input>
                        <label htmlFor="checkbox">KEEP ME SIGN IN</label>
                        </div>
                        <div className="form-inputs-accountstatus"><Link className="form-inputs-accountstatus-link" to="/log-in">I am already a memeber</Link> </div>
                    </div>
                    <button className="sign-in-button" type="submit">SIGN IN</button>
                </div>
            </div>
        </form>
    }
}

export default JoinPage