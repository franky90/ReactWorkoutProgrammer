import React from 'react'
import { Link, Redirect } from "react-router-dom"
import "./signInAndSignUp.styles.css"

const FormHeading = ({isSignIn}) =>{
    return(
<div className="form-container-heading">

<div className="form-container-heading-join">

    <Link className={`${isSignIn ? "sign-up-active" : ""} form-container-heading-name`} to="/join">SIGN UP</Link>
    <div className={`${isSignIn ? "light-hidden" : ""} form-container-heading-light`}/>
</div>

<div className="form-container-heading-login">
    <Link className={`${isSignIn ? "" : "sign-in-active"} form-container-heading-name`} to="/log-in">SIGN IN</Link>
    <div className={`${isSignIn ? "" : "light-hidden"} form-container-heading-light`}/>
</div>

</div>
    )
}

export default FormHeading

