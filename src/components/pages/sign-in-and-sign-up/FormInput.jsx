import React, { useState } from 'react'

import "./signInAndSignUp.styles.css"

const FormInput = ({ handleChange, label, ...otherProps }) => {

    const [isFocused, setIsFocused] = useState(false)
    const onFocus = () => setIsFocused(true)
    const onBlur = () => setIsFocused(false)

    return (<div className="input-group ">
        <input onFocus={onFocus} onBlur={onBlur} className="form-input" onChange={handleChange} {...otherProps} />
        {label ? <label className={`${otherProps.value.length || isFocused ? "shrink" : ""} form-input-label`}>{label}</label> : null}
    </div>)
}

export default FormInput;