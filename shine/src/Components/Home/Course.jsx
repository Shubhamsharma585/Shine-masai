import React from 'react'
import styles from "./home.module.css";

function Course() {
    return (
        <div className={styles.course}>
            <div className={styles.courselearning}></div>
            <h2>Want to make your career future ready?</h2>
            <h3>Upgrade your skills, give your career a boost</h3>

            <button>Explore courses</button>
            
        </div>
    )
}

export default Course
