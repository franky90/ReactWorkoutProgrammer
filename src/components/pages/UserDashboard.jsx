import React, { useEffect } from 'react'
import TokenService from './../../Service/TokenService'

export const UserDashboardPage = (props) => {
    const username = props.match.params.username

    useEffect(() => {},
        // Would be able to 
        // TokenService.AxiosTokenInstance.get()
    [])

    return <div><h1>
            This is the User Dashboard Page!
        </h1>
        <h3>{username}</h3>
    </div>
}

