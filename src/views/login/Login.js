import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styles from '../login/Login.module.css'
import { useForm } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'

//import Profile from '../profile/Profile'
import bookLogo from '../../assets/images/Login Page/logo-small.png'
import fullImage from '../../assets/images/Login Page/pray-picture.png'

function Login() {
    
    const { register, handleSubmit, formState: { errors }} = useForm();

    const [redirectToProfile, setRedirectToProfile] = useState(false);

    const onSubmit = async (data, e) => {
        e.preventDefault();

        // POST request
        await axios.post('http://localhost:5000/api/auth/login', {
            email: data.email,
            password: data.password
        })
        .then(function (response) {
            console.log("response", response);
            console.log(data);
            console.log('Log in successful');

            localStorage.setItem("login", JSON.stringify({
                userLogin: true,
                token: response.data.access_token,
                email: data.email
            }))
        })
        .catch(function (error) {
            console.log(error.response.data.message);
            alert('Wrong info');
        })
        setRedirectToProfile(true);
    }

    if(redirectToProfile === true) {
        return <Redirect to={{
            pathname: '/profile',
        }}/>
    }

    return (
        <div className={styles.container}>
            <div className={styles.sectionOneLogin}>
                <div className={styles.smallLogo}>
                    <img src={bookLogo} alt="bookLogo"/>
                </div>
                <div className={styles.fullImage}>
                    <img src={fullImage} alt="praying-man"/>
                </div>
            </div>
            <div className={styles.sectionTwoLogin}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.emailLoginWrapper}>
                        <label>EMAIL</label>
                        <input 
                        type="text" 
                        placeholder="Your email" 
                        {...register('email', {required: true})}
                        />
                        {errors.email && <p>This field is required</p>}
                    </div>
                    <div className={styles.passwordLoginWrapper}>
                        <label>PASSWORD</label>
                        <input 
                        type="password" 
                        placeholder="Your password"
                        {...register('password', {required: true})}
                        />
                        {errors.password && <p>This field is required</p>}
                    </div>
                    <div className={styles.btnLogin}>
                        <button>LOG IN</button>
                    </div>
                    <div className={styles.registerLink}>
                        <p>Not registered yet? <Link to="/registration"><span>Create a free account</span></Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
