import React from 'react'
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({component: Component, ...rest}) {
    return (
        <Route {...rest}
        
        />
    )
}

export default ProtectedRoute
