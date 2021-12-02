import React from 'react'

import Styles from '../componentsStyle/Lessons.module.css'
import gradLogo from '../assets/images/Chapters Page/study-selected-icon.png'
import checkmark from '../assets/images/Front Page/checkmark-icon.png'

function Lessons({ getLessonData }) {
    let lesson = getLessonData.map(getLesson => {
        return (
            <div key={Date.now() + Math.random()} className={Styles.cardContainer}>
                <div className={Styles.cardSectionWrapper}>
                    <div className={Styles.leftSection}>
                    <img src={checkmark} alt="checkmark-checked" />
                    <p key={Date.now() + Math.random()}>
                        {getLesson.LessonNr}
                    </p>
                    </div>
                    <button className={Styles.btnRead}>READ</button>
                </div>
                <div className={Styles.paraghrapWrapper}><p>Title</p></div>
            </div>
        )
    })
 
    let lessonsCard = 
    <div className={Styles.cardContainer}>
        <img src={gradLogo} alt="graduation-logo"/>
        <div className={Styles.textContainer}>
            <p>Click on a chapter to start the lesson</p>
        </div>
    </div>;

    return (
        <div className={Styles.container}>
            <h4 className={Styles.headingColor}>Lessons</h4>
            {lesson === undefined || lesson.length === 0 ? lessonsCard : lesson}
        </div>
    )
}

export default Lessons
