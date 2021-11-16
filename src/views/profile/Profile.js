import React from 'react'

import styles from '../profile/Profile.module.css'
import logoSmall from '../../assets/images/Login Page/logo-small.png'

function Profile() {
    return (
        <div className={styles.container}>
            <div>
                <img src={logoSmall} alt="small-logo"/>
            </div>
            <main className={styles.main}>
                <h1 className={styles.profileMainHeading}>PROFILE PAGE</h1>
            </main>
        </div>
    )
}

export default Profile
