import React from 'react'

import FormInput from "./FormInput"
import FormButton from "./FormButton"

import "./signInAndSignUp.styles.css"

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }

    handleSubmit = event => {
        debugger
        event.preventDefault();
        const { password, confirmPassword } = this.state;
        if (password != confirmPassword) {
            alert("password don't match");
            return;
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return <div className="sign-up">
                <h2 className="form-title"> Please sign up if you don't have an account yet </h2>
                <form className="sign-up-form" autocomplete="off" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="User Name" required/>
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required/>
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm password" required/>
                    <FormButton type="submit" value="Sign In" onClick={this.handleSubmit}/>
                </form>
            </div>
    }
}

export default SignUp;