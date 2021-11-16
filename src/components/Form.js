import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import styles from '../componentsStyle/Form.module.css'

import { Link } from 'react-router-dom'

function Form() {
        const { register, handleSubmit, formState: { errors }} = useForm();

        const onSubmit = data => {
            console.log(data.name);

            // Send data to json database
            axios.post('http://localhost:5000/api/auth/register', {
                name: data.name,
                birthday: data.birthday,
                email: data.email,
                password: data.password
            })
            .then(function (response){
                console.log(response);
                alert('Sign up succesful!');
            })
            .catch(function (error) {
                console.log(error);
            })
        }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.nameBirthField}>
            <div className={styles.nameWrapper}>
                <label>NAME</label>
                <input 
                type="text" 
                placeholder="Your name"
                {...register('name')}
                />
            </div>
            <div className={styles.birthdayWrapper}>
                <label>BIRTHDAY</label>
                <input 
                type="date"
                {...register('birthday')}
                />
            </div>
        </div>
        <div className={styles.emailWrapper}>
            <label>EMAIL</label>
            <input 
            type="text" 
            placeholder="Your email"
            {...register('email')}
            />
        </div>
            <div className={styles.passWrapper}>
                <label>PASSWORD</label>
                <input 
                type="password" 
                placeholder="Min. 8 characters"
                {...register('password', {required: true, maxLength: 8})}
                />
                {errors.example4 && <p>This field is required</p>}
            </div>
            <div className={styles.btnForm}>
                <button>CREATE ACCOUNT</button>
            </div>
            <div className={styles.loginLink}>
                <p>Already have an account? <Link to="/login"><span>Log in here</span></Link> </p>
            </div>
    </form>
    )
}

export default Form
