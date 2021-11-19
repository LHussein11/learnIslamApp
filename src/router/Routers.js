import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../views/login/Login'
import Frontpage from '../views/main/Frontpage'
import Registration from '../views/registration/Registration'
import Profile from '../views/profile/Profile'
import ProtectedRoute from '../router/ProtectedRoute'


function Routers() {

    let data = localStorage.getItem('login');
    let token = JSON.parse(data) && JSON.parse(data).token;
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Frontpage}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <ProtectedRoute token={token}>
                    <Route token={token} path="/profile" component={Profile}/>
                </ProtectedRoute>
            </Switch>
        </Router>
    )
}

export default Routers


/*
                <ProtectedRoute token={token}>
                    <Route token={token} path="/profile" component={Profile}/>
                </ProtectedRoute>
*/