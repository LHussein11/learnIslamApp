import React from 'react'

import From from '../../components/Form'
import styles from '../../views/registration/Registration.module.css'

import smallLogo from '../../assets/images/Login Page/logo-small.png'
import bigImage from '../../assets/images/Sign Up Page/camel-picture.png'

function Registration() {
    return (
        <div className={styles.container}>
            <div className={styles.sectionOne}>
                <div className={styles.smallLogo}>
                    <img src={smallLogo} alt="smallBookandLogo"/>
                </div>
                <div className={styles.bigImage}>
                    <img src={bigImage} alt="mosque-camel"/>
                </div>
            </div>
            <div className={styles.sectionTwo}>
                <From />
            </div>
        </div>
    )
}

export default Registration
