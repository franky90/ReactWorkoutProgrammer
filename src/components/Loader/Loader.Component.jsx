import React from 'react'
import './Loader.css'

export const Loader = props => {
    const { isLoading, children } = props
    if(isLoading === false) {
        return <>{children}</>
    }

    return <>
        <div className="centered centered flexWrapper fullDim loader_container">
            <div className="bar-container centered2 flexWrapper">
                <div className="bar"/>
                <div className="bar"/>
                <div className="bar"/>
                <div className="bar"/>
                <div className="bar"/>
            </div>
        </div>
        <div className="blurred">
            {children}
        </div>
    </>
}
