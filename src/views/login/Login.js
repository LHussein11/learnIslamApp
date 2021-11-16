import React from 'react';
import axios from 'axios';

import styles from '../login/Login.module.css'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import bookLogo from '../../assets/images/Login Page/logo-small.png'
import fullImage from '../../assets/images/Login Page/pray-picture.png'

function Login() {
    const { register, handleSubmit, formState: { errors }} = useForm();
    let navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/api/auth/login', {
            email: data.email,
            password: data.password
        })
        .then(function (response) {
            console.log("response", response);
            alert(`You successfully logged in ${data.email}`);
            navigate('/profile');

            localStorage.setItem("login", JSON.stringify({
                userLogin: true,
                token: response.data.access_token
            }))
        })
        .catch(function (error) {
            console.log(error.response.data.message);
            alert('Wrong info');
        })
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
