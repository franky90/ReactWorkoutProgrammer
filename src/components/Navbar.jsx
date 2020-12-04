import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import LoginButtons from "./LoginButtons/LoginButtons"
import NavRegisterButton from "./LoginButtons/NavRegisterButton"

function Navbar() {

  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
      <nav className="navbar">

        <Link to="/" className="navbar-logo">
          CWP <i className="fas fa-dumbbell" />
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/workout-creator" className="nav-links" onClick={closeMobileMenu}>
              Workout Creator
            </Link>
          </li>
          <li className="nav-item" >
            <Link to="/trainings" className="nav-links" onClick={closeMobileMenu}>
              Trainings
            </Link>
          </li>
          <li className="nav-item">
              <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
                Contact Us
              </Link>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
          <NavRegisterButton buttonPath="/sign-page" buttonLinkClass="nav-links-mobile" buttonClass=""  >
          JOIN
          </NavRegisterButton>
          </li>
          <li className="nav-item" onClick={closeMobileMenu}>
          <NavRegisterButton buttonPath="/sign-page" buttonLinkClass="nav-links-mobile" buttonClass="" >
          LOGIN
          </NavRegisterButton>
          </li>
        </ul>
        <LoginButtons />
      </nav>
  )
}

export default Navbar;


