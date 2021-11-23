import React from 'react'

import Styles from './LandingProfile.module.css'
import LandingProfileHeader from '../../components/LandingProfileHeader'

function LandingProfile() {
    return (
        <div className={Styles.container}>
            <LandingProfileHeader />
            <h1>Landing Profile</h1>
        </div>
    )
}

export default LandingProfile
