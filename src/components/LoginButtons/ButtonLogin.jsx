import React from 'react'
import "./Button.css"
import {Link} from "react-router-dom"


export default function ButtonLogin(){
    return(
        <Link className="btn-list" to="/log-in">
            <input type="button" className="btn" value="LOGIN"/>
        </Link>
    )

}