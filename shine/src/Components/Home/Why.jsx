import React from 'react'
import styles from "./home.module.css";

function Why() {
    return (
        <div>
            <h2>Why Shine</h2>
            <div style={{display:"flex"}}>
                <div className={styles.why}><img src="" alt=""/><div><strong>3.4 crores+</strong></div><br/>Candidates</div>
                <div className={styles.why}><img src="" alt=""/><div><strong>300,000+</strong></div><br/>Jobs</div>
                <div className={styles.why}><img src="" alt=""/><div><strong>15,000+</strong></div><br/>Companies</div>
            </div>
            
        </div>
    )
}

export default Why
