import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'

import styles from '../profile/Profile.module.css'
import logoSmall from '../../assets/images/Login Page/logo-small.png'
import axios from 'axios'

function Profile() {
    const [info, setInfo] = useState(null);

    let emailLocal = JSON.parse(localStorage.getItem('login'));

    useEffect(() => {
        const profileInfo = async () => {
            await axios.get(`http://localhost:8000/users?email=${emailLocal.email}`)
            .then(res => {
                setInfo(res);
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        }
        profileInfo();
    },[emailLocal.email]);
    
    let firstLetterName, names;

    if(info !== null) {
        names = info.data[0].name;
        firstLetterName = info.data[0].name[0].toUpperCase();
    } else {
        console.log('Loading!')
        
    }

    return (
    <div className={styles.container}>
        <div>
            <img src={logoSmall} alt="small-logo"/>
        </div>
        <main className={styles.main}>
            <h1 className={styles.profileMainHeading}>Who wants to study</h1>
            <div className={styles.cardsContainer}>
                <div className={styles.profileCardWrapper}>
                    <Link to="/landingprofile">
                    <div className={`${styles.profileCard} ${styles.cards}`}>
                        {<h2>{firstLetterName}</h2>}
                    </div>
                    </Link>
                    {<p>{names}</p>}
                </div>
                <div className={styles.profileCardWrapper}>
                    <Link to="/registration">
                        <div className={`${styles.signUpCard} ${styles.cards}`}>
                            <h2>+</h2>
                        </div>
                    </Link>
                    <p>Add Profile</p>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Profile
