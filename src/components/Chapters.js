import React from 'react'
import {v4 as uuidv4 } from 'uuid'

import Styles from '../componentsStyle/Chapters.module.css'

function Chapters({ getChapters, chapterClicked }) {
    if(getChapters === undefined || getChapters.length === 0){
        return null;
    }

    let chapters = getChapters.map(chapter => {
        return (
        <div
        key={uuidv4()}
        className={Styles.cardContainer}
        onClick={() => chapterClicked(chapter.key2)}
        >
            <h3>{chapter.key}</h3>
            <div className={Styles.progressWrapper}>
                <progress className={Styles.progressBar} max="100" value="50"></progress>
                <h3>70%</h3>
            </div>
        </div>
        )
    })
     
    return (
        <div className={Styles.container}>
            <h4 className={Styles.ab}>Chapters</h4>
           {chapters}
        </div>
    )
}

export default Chapters


/*
    let chapterMarkUp = chaptersData.map(chapter => (
        <div 
        key={uuidv4()} 
        className={Styles.cardContainer}
        >
            <h3>{chapter.chapterNr}</h3>
            <div className={Styles.progressWrapper}>
                <progress className={Styles.progressBar} max="100" value="50"></progress>
                <h3>70%</h3>
            </div>
        </div>
    ))
*/