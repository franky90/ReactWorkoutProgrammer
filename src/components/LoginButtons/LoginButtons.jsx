import React from 'react'
import NavRegisterButton from "./NavRegisterButton"



export default function LoginButtons(){
    return(
        <>
        <NavRegisterButton
        buttonPath="/sign-page"
        buttonLinkClass="btn-list"
        buttonClass="btn"
        >
        MY ACCOUNT  
        </NavRegisterButton>
        {/* <NavRegisterButton
        buttonPath="/sign-page"
        buttonLinkClass="btn-list"
        buttonClass="btn">
        LOGIN
        </NavRegisterButton> */}
        </>
       )
    }