import React, {useState} from 'react'
import {Button} from "./Button"
import {Link} from "react-router-dom"
import "./Navbar.css"
import Dropdown from "./Dropdown"
import DropdownFB from "./DropdownFB"



function Navbar() {
  
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownFB, setDropdownFB] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
  if(window.innerWidth < 960){
    setDropdown(false)
  }else{
    setDropdown(true)
  }
}

const onMouseLeave = () => {
  if(window.innerWidth < 960){
    setDropdown(false)
  }else{
    setDropdown(false)
  }
}

const onMouseEnterFB = () => {
  if(window.innerWidth < 960){
    setDropdownFB(false)
  }else{
    setDropdownFB(true)
  }
}

const onMouseLeaveFB = () => {
  if(window.innerWidth < 960){
    setDropdownFB(false)
  }else{
    setDropdownFB(false)
  }
}

const extendTreatments = () =>{
  dropdownFB ? setDropdownFB(false) : setDropdownFB(true);
  dropdownFB && closeMobileMenu();
}

const extendSplit = () =>{
  dropdown ? setDropdown(false) : setDropdown(true);
  dropdown && closeMobileMenu();
}







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
    <li className="nav-item"
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={extendSplit}
    >
      <Link to="/" className="nav-links" >
        Split Workouts <i className="fas fa-caret-down" />
      </Link>
      {dropdown && <Dropdown />}
    </li>
    <li className="nav-item" 
    onMouseEnter={onMouseEnterFB}
    onMouseLeave={onMouseLeaveFB}
    onClick={extendTreatments}
    >
      <Link to="/" className="nav-links" >
        Treatments <i className="fas fa-caret-down" />
      </Link>
      {dropdownFB && <DropdownFB />}
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


