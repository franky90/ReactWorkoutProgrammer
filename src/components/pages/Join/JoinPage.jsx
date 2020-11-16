import React, { Component } from 'react'
import formImage from "../../../images/split-background.jpg"
import "./JoinPage.css"
import { Link, Redirect } from "react-router-dom"
import moment from 'moment'
import { UserApi } from './../../../Service/UserApi'
import TokenService from './../../../Service/TokenService'



class JoinPage extends Component {
    constructor(props) {
        super(props)

        this.alphaNumericRegex = /^[0-9a-zA-Z]+$/
        this.state = {
            userName: '',
            userNameIsDirty: false,
            password: '',
            passwordConfirm: '',
            email: '',
            emailConfirm: '',
            dateOfBirth: '',
            dob: {
                day:    1,
                month:  0,
                year:   1988
            },
            keepSignedIn: false,
            formValidations: {
                isEmailValid: false,
                isPasswordValid: false,
            },
            isRedirecting: false,
            formSubmited: false
        }
    }

   
    userNameChanged = eventRef => {
        if(this.state.userNameIsDirty === false) {
            this.setState({userNameIsDirty: true})
        }
        this.textElementChanged(eventRef)        
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

    validateUserName = () => {
        const alphaNumericRegex = /^[0-9a-zA-Z]+$/
        const isUserValid = alphaNumericRegex.test(this.state.userName)
        return isUserValid
    }
 
 
    getFormValidationsState = () => {
        // valid if they are the same
        const isEmailValid = this.state.email === this.state.emailConfirm
        // valid if they are the same
        const isPasswordValid = this.state.password === this.state.passwordConfirm

        return {
            isEmailValid,
            isPasswordValid,
        }
    }

    submitFormHandler = formEventRef => {
        formEventRef.preventDefault()
        const formValidations = this.getFormValidationsState()
        this.setState({formValidations, formSubmited: true})
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
                    TokenService.saveToken(jwt, this.state.keepSignedIn)
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

        let passwordClassName = ''
        let emailClassName = ''
        if(this.state.formSubmited === true) {
            const { isEmailValid, isPasswordValid } = this.state.formValidations
            passwordClassName = this.getValidationClassName(isPasswordValid)
            emailClassName = this.getValidationClassName(isEmailValid)
        }

        let userClassName = ''
        if(this.state.userNameIsDirty === true) {
            const isUserValid = this.alphaNumericRegex.test(this.state.userName)
            userClassName = this.getValidationClassName(isUserValid)
        }



        return <form onSubmit={this.submitFormHandler} className="activeInputForm logging-container">
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
                        <label htmlFor="username"> Username </label><br></br>
                        <input 
                            className={userClassName} 
                            required={true} 
                            minLength="5" maxLength="15" type="text"
                            value={this.state.userName} onChange={this.userNameChanged} placeholder="Pick a username" name="userName" id="username" >
                         </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="password"> Password </label><br></br>
                        <input className={passwordClassName}
                            required={true} minLength="8" maxLength="30" type="password" value={this.state.password} onChange={this.textElementChanged} placeholder="Add a password" name="password" id="password">
                        </input>
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="confirm-password"> Confirm password </label><br></br>
                        <input
                            className={passwordClassName}
                            required={true} minLength="8" maxLength="30" type="password" value={this.state.passwordConfirm} onChange={this.textElementChanged} placeholder="Confirm password" name="passwordConfirm" id="confirm-password">
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