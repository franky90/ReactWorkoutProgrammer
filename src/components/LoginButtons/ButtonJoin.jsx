import React from 'react'
import "./Button.css"
import {Link} from "react-router-dom"


export default function ButtonJoin(){
    return(
        <Link className="btn-list" to="/join">
            <input type="button" className="btn" value="JOIN"/>    
        </Link>
    )

}