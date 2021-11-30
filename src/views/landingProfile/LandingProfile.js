import React, { useEffect, useState } from 'react'

import Styles from './LandingProfile.module.css'
import LandingProfileHeader from '../../components/LandingProfileHeader'
import Chapters from '../../components/Chapters'
import Lessons from '../../components/Lessons'
import Test from '../../components/Test'

import axios from 'axios'

function LandingProfile() {
    const [data, setData] = useState();
    const [showLesson, setShowLesson] = useState();

    const chaptersData = async () => {
        await axios.get(`http://localhost:8000/chapters`)
        .then(response => response.data)
        .then(data => setData(data))
        .catch(error => console.log(error))
    }

    useEffect(() => {
        chaptersData();
    }, [])

    if(data === undefined){
        return null;
    }


    let choosenChapter = () => {
        data.map(dataEl => {
            
            return dataEl.Lessons?.map(lessonsEl => {
                console.log(lessonsEl);
                let lessonsComp = 
                <div>
                    <h2>{lessonsEl.LessonNr}</h2>
                    <p>{lessonsEl.LessonData}</p>
                </div>;
                return lessonOpened(lessonsComp)
            })
        })
    }

    let lessonOpened = (a) => {
        return setShowLesson(a);
    }

    return (
        <div className={Styles.container}>
            <LandingProfileHeader />
            <div className={Styles.mainContent}>
                <h1 className={Styles.profileSettingsHeader}>Profile Settings</h1>
                <div className={Styles.componentsWrapper}>
                    <Chapters choosenChapter={() => choosenChapter()} chaptersData={data} />
                    <Lessons lessonOpened={showLesson} chaptersData={data}/>
                    <Test />
                </div>
            </div>
        </div>
    )
}

export default LandingProfile


/*
        data.map((dataEl, index) => {
            return dataEl.Lessons?.map((lessonsEl, index) => {
                if(lessonsEl.LessonNr === undefined) {
                    return null
                }
                let lessonsComp = 
                <div>
                    <h2>{lessonsEl.LessonNr}</h2>
                    <p>{lessonsEl.LessonData}</p>
                </div>;
                return lessonOpened(lessonsComp)
            })
        })
*/