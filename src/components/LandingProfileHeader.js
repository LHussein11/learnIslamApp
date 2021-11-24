import React from 'react'

import Styles from '../componentsStyle/LandingProfileHeader.module.css'

import hatLogo from '../assets/images/Chapters Page/study-selected-icon.png'
import quizLogo from '../assets/images/Chapters Page/quiz-selected-icon.png'
import fullHeart from '../assets/images/Chapters Page/life-full-icon.png'

function LandingProfileHeader() {
    return (
        <div className={Styles.container}>
            <div className={Styles.lessonsLogosWrapper}>
                <div className={Styles.hatLogoWrapper}>
                    <img src={hatLogo} alt="graduation-logo-hat"/>
                    <p>STUDY</p>
                </div>
                <div className={Styles.quizLogoWrapper}>
                    <img src={quizLogo} alt="quiz-logo"/>
                    <p>QUIZ</p>
                </div>
            </div>
            <div className={Styles.settingsWrapper}>
                <div className={Styles.heartWrapper}>
                    <img src={fullHeart} alt="heart-icon"/>
                    <img src={fullHeart} alt="heart-icon"/>
                    <img src={fullHeart} alt="heart-icon"/>
                </div>
                <div className={Styles.profileSettings}>
                    <h2>L</h2>
                </div>
            </div>
        </div>
    )
}

export default LandingProfileHeader
