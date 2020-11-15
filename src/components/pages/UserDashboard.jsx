import React from 'react'

export const UserDashboardPage = (props) => {
    debugger
    const username = props.match.params.username
    return <div><h1>
            This is the User Dashboard Page!
        </h1>
        <h3>{username}</h3>
    </div>
}

