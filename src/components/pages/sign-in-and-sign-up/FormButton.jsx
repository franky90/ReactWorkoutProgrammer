import React from 'react'

import "./signInAndSignUp.styles.css"

const FormButton = ({children, ...otherProps}) =>{
   return (
    <button type="button" className="form-button" {...otherProps}> 
    {children}
    </button>
    )}

export default FormButton;