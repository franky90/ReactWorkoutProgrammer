import React from 'react'

import "./signInAndSignUp.styles.css"
import FormInput from "./FormInput"
import FormButton from "./FormButton"


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
    }


    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className="sign-in">
                <h2 className="form-title">Please Sign Up to your account </h2>

                <form onSubmit={this.handleSubmit} autocomplete="off">
                    <FormInput name="email" type="email" handleChange={this.handleChange} value={this.state.email} label="email" required />
                    <FormInput name="password" type="password" handleChange={this.handleChange} value={this.state.password} label="password" required />
                    <div className="buttons">
                        <FormButton type="submit" value="Sign In" onClick={this.handleSubmit}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;