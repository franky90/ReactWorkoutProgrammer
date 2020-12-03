import React from 'react'

import "./signInAndSignUp.styles.css"

const FormButton = ({...submitButtonProps}) =><input type="submit" className="form-button" {...submitButtonProps}/>

export default FormButton;