import React from 'react'

import Styles from '../componentsStyle/Lessons.module.css'
import gradLogo from '../assets/images/Chapters Page/study-selected-icon.png'

function Lessons() {

    let lessonsCard = 
    <div className={Styles.cardContainer}>
        <img src={gradLogo} alt="graduation-logo"/>
        <div className={Styles.textContainer}>
            <p>Click on a chapter to start the lesson</p>
        </div>
    </div>;

    console.log(lessonsCard);
    
    return (
        <div className={Styles.container}>
            <h4>Lessons</h4>
            {lessonsCard}
        </div>
    )
}

export default Lessons
