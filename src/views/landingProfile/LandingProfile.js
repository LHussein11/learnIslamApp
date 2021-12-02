import React, { useEffect, useState } from 'react'

import Styles from './LandingProfile.module.css'
import LandingProfileHeader from '../../components/LandingProfileHeader'
import Chapters from '../../components/Chapters'
import Lessons from '../../components/Lessons'
import Test from '../../components/Test'

import axios from 'axios'

function LandingProfile() {
    const [getData, setGetData] = useState([]);
    const [lessonData, setLessonData] = useState([]);

    async function dataSet() {
        await axios.get('http://localhost:8000/chapters')
        .then(response => response.data)
        .then(data => {
            data.map(chapterData => {
                return chapterData.chapterData.map(dataEl => {
                    return setGetData((prevState) => [...prevState, {key: dataEl.chapter, key2: dataEl.lessons}]);
                })
            })
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        dataSet();
    }, [])

    // From child
    function chapterClicked(childInput) {
        console.log(childInput);
        setLessonData(childInput);
    }


    return (
        <div className={Styles.container}>
            <LandingProfileHeader />
            <div className={Styles.mainContent}>
                <h1 className={Styles.profileSettingsHeader}>Profile Settings</h1>
                <div className={Styles.componentsWrapper}>
                    <Chapters getChapters={getData} chapterClicked={chapterClicked}/>
                    <Lessons getLessonData={lessonData}/>
                    <Test />
                </div>
            </div>
        </div>
    )
}

export default LandingProfile