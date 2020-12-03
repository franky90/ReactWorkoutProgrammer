import { faToggleOff } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link, Redirect } from "react-router-dom"
import "./signInAndSignUp.styles.css"

const FormHeading = ({ isSignIn, toggle }) => {

    const clickHandler = (whoClicked) => (isSignIn && whoClicked || !isSignIn && !whoClicked) && toggle()

    return (
        <div className="form-container-heading">
            <div className="form-container-heading-join">
                {/*<Link className={`${isSignIn ? "sign-up-active" : ""} form-container-heading-name`} to="/join">SIGN UP</Link>*/}
                <div onClick={() => clickHandler(true)} className={`${isSignIn ? "sign-up-active" : ""} form-container-heading-name`} to="/join">SIGN UP</div>
                <div className={`${isSignIn ? "light-hidden" : ""} form-container-heading-light`} />
            </div>
            <div className="form-container-heading-login">
                <div onClick={() => clickHandler(false)} className={`${isSignIn ? "" : "sign-in-active"} form-container-heading-name`} to="/log-in">SIGN IN</div>
                <div className={`${isSignIn ? "" : "light-hidden"} form-container-heading-light`} />
            </div>
        </div>
    )
}

export default FormHeading

