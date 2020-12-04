import React from 'react'
import "./Button.css"
import {Link} from "react-router-dom"


export default function NavRegisterButton({buttonPath, buttonClass, buttonLinkClass, children}){
    return(
        <Link className={buttonLinkClass} to={buttonPath}>
        <div className={buttonClass}> {children} </div>
        </Link>
    )

}
