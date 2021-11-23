import React from 'react'
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({children, ...rest}) {
    // Authentication token
    let localTokenCheck = localStorage.getItem('login');
    let token = localTokenCheck && JSON.parse(localTokenCheck).token;

    return (
        <Route {...rest} render={({ location }) => {
            return token ? children :<Redirect to={{
                pathname: "/login",
                state: { from: location}
            }}/>
        }}/>
    )
}

export default ProtectedRoute