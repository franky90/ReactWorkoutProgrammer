import React, {useState} from 'react'
import {Button} from "./Button"
import {Link} from "react-router-dom"
import "./Navbar.css"
import Dropdown from "./Dropdown"
import DropdownFB from "./DropdownFB"



function Navbar() {
  
  const [click, setClick] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

// const onMouseEnter = () => {
//   if(window.innerWidth < 960){
//     setDropdown(false)
//   }else{
//     setDropdown(true)
//   }
// }

// const onMouseLeave = () => {
//   if(window.innerWidth < 960){
//     setDropdown(false)
//   }else{
//     setDropdown(false)
//   }
// }











  return(
    <>
<nav className="navbar">
  
  <Link to="/" className="navbar-logo">
CWP <i className="fas fa-dumbbell"/>
</Link>

  <div className="menu-icon" onClick={handleClick}> 
  <i className={click ? "fas fa-times" : "fas fa-bars"}/>
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
    <li className="nav-item">
      <Link to="/sign-up" className="nav-links-mobile" 
      onClick={closeMobileMenu}>
        Sign Up
      </Link>
    </li>
    
  </ul>
  <Button />
</nav>
    </>
  )
}

export default Navbar;


