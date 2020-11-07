import React from 'react'
import "./Button.css"
import {Link} from "react-router-dom"


export function Button(){
    return(
        <Link className="btn-list" to="/sign-up">
            <input type="button" className="btn" value="Sign Up"/>
        </Link>
    )

}