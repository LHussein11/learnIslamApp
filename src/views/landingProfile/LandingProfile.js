import React, { useEffect, useState } from 'react'

import Styles from './LandingProfile.module.css'
import LandingProfileHeader from '../../components/LandingProfileHeader'
import Chapters from '../../components/Chapters'
import Lessons from '../../components/Lessons'
import Test from '../../components/Test'

import axios from 'axios'

function LandingProfile() {
    const [data, setData] = useState();

    const chaptersData = async () => {
        await axios.get(`http://localhost:8000/chapters`)
        .then(response => response.data)
        .then(data => setData(data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        chaptersData();
    }, [])


    return (
        <div className={Styles.container}>
            <LandingProfileHeader />
            <div className={Styles.mainContent}>
                <h1 className={Styles.profileSettingsHeader}>Profile Settings</h1>
                <div className={Styles.componentsWrapper}>
                    <Chapters chaptersData={data} />
                    <Lessons />
                    <Test />
                </div>
            </div>
        </div>
    )
}

export default LandingProfile
