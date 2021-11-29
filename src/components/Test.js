import React from 'react'

import Styles from '../componentsStyle/Test.module.css'
import quizLogo from '../assets/images/Chapters Page/quiz-selected-icon.png'


function Test() {

    let testCard = 
    <div className={Styles.cardContainer}>
        <img src={quizLogo} alt="graduation-logo"/>
        <div className={Styles.textContainer}>
            <p>Click on a chapter to start the test</p>
        </div>
    </div>;

    return (
        <div className={Styles.container}>
            <h4>Test</h4>
            {testCard}
        </div>
    )
}

export default Test
