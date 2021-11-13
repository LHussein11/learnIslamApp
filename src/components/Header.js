import React from 'react'
import '../componentsStyle/Header.css'
import logo from '../assets/images/Front Page/text-logo.png'
import langIcon from '../assets/images/Front Page/language-icon.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="headerContainer">
            <div className="logo">
                <img src={logo} alt="learnIslam-logo"/>
            </div>
            <div className="loginContainer">
                <div className="langWrapper">
                    <img src={langIcon} alt="language-icon"/>
                    <p className="langName">English</p>
                </div>
                <div className="loginBtn">
                    <Link to="/login">
                        <button>LOG IN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header
