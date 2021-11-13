import React, { useState, useEffect } from 'react'

import styles from '../../views/main/Frontpage.module.css'
import Header from '../../components/Header'
import bookImage from '../../assets/images/Front Page/logo.png'
import { Link } from 'react-router-dom'


function Frontpage() {

    const [matches, setMatches] = useState(window.matchMedia("(max-width: 600px)").matches);

    useEffect(() => {
        const handler = (e) => setMatches(e.matches);
        window.matchMedia("(max-width: 600px)").addEventListener('change',handler)
    }, []);

    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={bookImage} alt="bookandmoon" />
                </div>
                <div className={styles.textWrapper}>
                    <h1 className={styles.mainHeading}>Learn about Islam in a<br/> funny, and effective way.</h1>
                    <div className="paraWrapper">
                        <p className={styles.mainParagraph}>Discover Islam and its culture through quick lessons, educative podcasts and simple games. The App is available in English for all kids in age group from 7-16 years old.
                        </p>
                    </div>
                        {matches && [<Link to="/registration">{<button className={styles.startBtn}>GET STARTED</button>}</Link>, <Link to="/login">{<button className={styles.loginButton}>LOG IN</button>}</Link> ]}
                        {!matches && <Link to="/registration">{<button className={styles.startBtn}>GET STARTED</button>}</Link>}
                </div>
            </div>
        </div>
    )
}

export default Frontpage


