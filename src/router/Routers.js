import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../views/login/Login'
import Frontpage from '../views/main/Frontpage'
import Registration from '../views/registration/Registration'
import Profile from '../views/profile/Profile'
import ProtectedRoute from '../router/ProtectedRoute'
import LandingProfile from '../views/landingProfile/LandingProfile'


function Routers() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Frontpage}/>
                <Route path="/login" component={Login}/>
                <Route path="/registration" component={Registration}/>
                <ProtectedRoute>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/landingprofile" component={LandingProfile}/>
                </ProtectedRoute>
            </Switch>
        </Router>
    )
}

export default Routers


/*
    const [userData, setUserData] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/users")
        .then(resp => {
            setUserData(resp.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
*/