import React from 'react'
import axios from 'axios';

import styles from '../login/Login.module.css'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import bookLogo from '../../assets/images/Login Page/logo-small.png'
import fullImage from '../../assets/images/Login Page/pray-picture.png'

function Login() {
    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = data => {
        console.log(data);
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
                        {...register('email')}
                        />
                    </div>
                    <div className={styles.passwordLoginWrapper}>
                        <label>PASSWORD</label>
                        <input 
                        type="text" 
                        placeholder="Your password"
                        {...register('password')}
                        />
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
