import React from 'react'
import styles from "./home.module.css";

function Home() {
    return (
        <div className={styles.home }>
            <div className={styles.a1background }>
                <div>
                    <h1 className={styles.ah1 }>Growth on your mind?</h1>
                    <h2 className={styles.ah2 }>Explore 300,000+ jobs</h2>
                    <button className={styles.searchButton}>Job title,skills <img src="" alt="search"/></button>

                </div>
                <div className={styles.a2background}>
                    <button className={styles.regButton}>Register for free</button>
                    <div className={styles.signinp}><img src="" alt=""/><p>Sign in</p></div>

                </div>
                
            </div>

            
        </div>
    )
}

export default Home
