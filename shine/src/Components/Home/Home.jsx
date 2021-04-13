import React from 'react'
import styles from "./home.module.css";

function Home() {
    return (
        <div>
            <div className={styles.background }>
                <div>
                    <h1 className={styles.ah1 }>Growth on your mind?</h1>
                    <h2 className={styles.ah2 }>Explore 300,000+ jobs</h2>
                    <button className={styles.searchButton}>Job title,skills <img src="" alt="search"/></button>

                </div>
                
            </div>

            
        </div>
    )
}

export default Home
