import React, { useState } from 'react'
import AdvanceSearch from './AdvanceSearch';
import styles from "./home.module.css";

function Home() {
    const [isAuth,setIsAuth] = useState(false);
    return (
        <div className={styles.home }>
            <div className={styles.a1background }>
                {isAuth?(<AdvanceSearch setIsAuth={setIsAuth}/>):(<><div>
                    <h1 className={styles.ah1 }>Growth on your mind?</h1>
                    <h2 className={styles.ah2 }>Explore 300,000+ jobs</h2>
                    <button onClick={()=>{setIsAuth(true);}} className={styles.searchButton}>Job title,skills <img style={{marginLeft:"500px"}} src="" alt="search"/></button>

                </div>
                <div className={styles.a2background}>
                    <button className={styles.regButton}>Register for free</button>
                    <div className={styles.signinp}><img src="" alt=""/><p>Sign in</p></div>

                </div></>)}
                
            </div>

            
        </div>
    )
}

export default Home
