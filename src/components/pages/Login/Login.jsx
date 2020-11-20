import React, { Component } from "react";
import formImage from "../../../images/split-background.jpg";
import "./../Join/JoinPage.css";
import { Link, Redirect } from "react-router-dom"
import Axios from 'axios'
import { UserApi } from './../../../Service/UserApi'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      isRedirecting: false
    };
  }

  textElementChanged = (eventRef) => {
    const { name, value } = eventRef.target;
    let dynamicObject = {};
    dynamicObject[name] = value;
    this.setState(dynamicObject);
  };

  checkboxClick = (eventRef) => {
    const { name, value } = eventRef.target;
    let dynamicObject = {};
    dynamicObject[name] = !(value === "true");
    this.setState(dynamicObject);
  };

  submitFormHandler = formEventRef => {
    formEventRef.preventDefault()
    new UserApi().signIn(this.state.userName, this.state.password).then((goodAxiosRes) => {
        if(goodAxiosRes.data.isSuccess && goodAxiosRes.data.jwt.length > 0) {
            const jwt = goodAxiosRes.data.jwt
            this.setState({isRedirecting: true})
        }
        console.log(goodAxiosRes.data)
    }).catch((badAxiosResponse) => {
        console.log(badAxiosResponse)
    })
  }

  render() {
    if(this.state.isRedirecting && this.state.userName.length > 0) {
        return <Redirect to={`/user/${this.state.userName}`}/>
    }

    return (
      <form onSubmit={this.submitFormHandler} className="activeInputForm logging-container">
        <div className="form-image" style={{ backgroundImage: `url(${formImage})` }}/>
        <div className="form-container">
          <div className="form-container-heading">
            <div className="form-container-heading-join">
              <Link className="form-container-heading-name " to="/join">
                JOIN
              </Link>

              <div className="form-container-heading-light light-hidden" />
            </div>

            <div className="form-container-heading-login">
              <div className="form-container-heading-name loginactive">
                LOGIN
              </div>
              <div className="form-container-heading-light" />
            </div>
          </div>

          <div className="form-details">
            <div className="form-inputs">
              <label htmlFor="username"> Username </label>
              <br></br>
              <input
                className="noOutline"
                required={true}
                minLength="5"
                maxLength="15"
                type="text"
                value={this.state.userName}
                onChange={this.textElementChanged}
                placeholder="Pick a username"
                name="userName"
                id="username"
              ></input>
            </div>
            <div className="form-inputs">
              <label htmlFor="password"> Password </label>
              <br></br>
              <input
                required={true}
                minLength="8"
                maxLength="30"
                type="password"
                value={this.state.password}
                onChange={this.textElementChanged}
                placeholder="Add a password"
                name="password"
                id="password"
              ></input>
            </div>

            <div className="form-inputs-checkbox">
              <div className="form-inputs-checkbox-checkelement">
                <input
                  className="noOutline"
                  checked={this.state.keepSignedIn}
                  value={this.state.keepSignedIn}
                  onChange={this.checkboxClick}
                  type="checkbox"
                  id="checkbox"
                  name="keepSignedIn"
                ></input>
                <label htmlFor="checkbox">KEEP ME SIGN IN</label>
              </div>
              <div className="form-inputs-accountstatus">
                {" "}
                Don't have an account?{" "}
                <span>
                  <Link className="form-inputs-accountstatus-link" to="/join">
                    Sign up
                  </Link>{" "}
                </span>
              </div>
            </div>
            <button className="sign-in-button" type="submit">
              SIGN IN
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
