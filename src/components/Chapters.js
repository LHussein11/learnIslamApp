import React from 'react'
import {v4 as uuidv4 } from 'uuid'

import Styles from '../componentsStyle/Chapters.module.css'

function Chapters({ chaptersData }) {

    if(chaptersData === undefined) {
        return null
    }
    
    let chapterMarkUp = chaptersData.map(chapter => (
        <div key={uuidv4()} className={Styles.cardContainer}>
            <h3>{chapter.chapterNr}</h3>
            <div className={Styles.progressWrapper}>
                <progress className={Styles.progressBar} max="100" value="50"></progress>
                <h3>70%</h3>
            </div>
        </div>
    ))

     
    return (
        <div className={Styles.container}>
            <h4 className={Styles.ab}>Chapters</h4>
            {chapterMarkUp}
        </div>
    )
}

export default Chapters