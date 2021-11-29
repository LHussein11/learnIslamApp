import React from 'react'

import Styles from '../componentsStyle/Lessons.module.css'
import gradLogo from '../assets/images/Chapters Page/study-selected-icon.png'

function Lessons({ chaptersData, lessonOpened }) {
    if(chaptersData === undefined){
        return null;
    }

    let lessonsCard = 
    <div className={Styles.cardContainer}>
        <img src={gradLogo} alt="graduation-logo"/>
        <div className={Styles.textContainer}>
            <p>Click on a chapter to start the lesson</p>
        </div>
    </div>;


    return (
        <div className={Styles.container}>
            <h4>Lessons</h4>
            {lessonOpened ? lessonOpened : lessonsCard}
            {/* {lessonsCard}
            {lessonOpened} */}
        </div>
    )
}

export default Lessons
