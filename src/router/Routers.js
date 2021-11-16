import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from '../views/login/Login'
import Frontpage from '../views/main/Frontpage'
import Registration from '../views/registration/Registration'
import Profile from '../views/profile/Profile'


function Routers() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Frontpage />}/> 
                <Route path="/login" element={<Login />}/>
                <Route path="/registration" element={<Registration />}/>
                <Route path="/profile" 
                
                element={<Profile />}
                
                />
            </Routes>
        </Router>
    )
}

export default Routers
