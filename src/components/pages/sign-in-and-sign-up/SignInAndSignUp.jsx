import React from 'react'


import "./signInAndSignUp.styles.css"
import formImage from "../../../images/split-background.jpg"

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import FormHeading from "./FormHeading"

class SignInAndSignUpPage extends React.Component {
    constructor(props){
        super(props)

        this.state={
            isSignIn: false
        }
    }

    render(){

    const {isSignIn} = this.state;

    return(
        
    <div className="sign-in-and-sign-up">

<div className="form-image" style={{ backgroundImage: `url(${formImage})` }} />

<div className="form-container">


        <FormHeading 
        isSignIn={this.state.isSignIn}
         />

        <div className="form-details">
        {isSignIn? <SignIn /> : <SignUp />}
        
        
        </div>
    </div>
 </div>   
)
}
}

export default SignInAndSignUpPage;