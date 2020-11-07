import React, {useState} from 'react'
import { MenuItemsFB } from "./MenuItemsFB"
import {Link} from "react-router-dom"
import "./Dropdown.css"

function DropdownFB(){
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)
    
    return(<>
    <ul onClick={handleClick} className={click ? "dropdown-menu-clicked-fb" : "dropdown-menu-fb"}>
        {MenuItemsFB.map((item, index) => {
            return(
                <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={()=> setClick(false)}>
                        {item.title}
                    </Link>
                </li>
            )
        })}
    </ul>
    </>
    )
}

export default DropdownFB;