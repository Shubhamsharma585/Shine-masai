import React from 'react'
import Styles from "./JobAlert.module.css"

function JobAlertFAQ() {
    const [ptag1, setPtag1]=React.useState(true)
    const [ptag2, setPtag2]=React.useState(false)
    const [ptag3, setPtag3]=React.useState(false)
    return (
        <div className={Styles.sub2}>
            <div className={Styles.sub_div1}>
            <p style={{fontSize:"20px"}}>Not Registered on Shine?</p>
            <p>Register now and get discovered by over 14,000 recruiters!</p>
            <button>Sign in</button>
        </div>
        <div  className={Styles.sub_div2}>
            <div style={{width:"90%",textAlign:"center",fontSize:"25px", borderBottom:"1px solid black", margin:'auto'}}>
                FAQs
            </div>
            <div style={{width:'90%', height:'auto'}}>
                <button onClick={()=>{setPtag1(true); setPtag2(false);setPtag3(false)}}>Why set up a free job alert?</button><br/>
                <p className={!ptag1?Styles.p_tag:Styles.p_tag2}>Our free job alert service helps you to get notified for jobs suiting your career goals and makes it easier for you to respond to job openings directly from your inbox. Besides, it helps you to stay updated with the current job market and career opportunities, along with information about salary trends. It is highly beneficial for active as well as passive job seekers. By opting for free job alert service, we make sure you do not miss any openings based on your highly targeted and specific job matches.</p><br/>
                <button onClick={()=>{setPtag2(true);setPtag1(false);setPtag3(false)}}>How do I get a job alert on my email ID?</button><br/>
                <p className={!ptag2?Styles.p_tag:Styles.p_tag2}>To get job notifications on your inbox, you need to sign in to shine.com or register with us. You will find a new tab ‘Create Job Alert’ on the top right side of the website. Fill out the details based on your profile and work area. You will start receiving job alerts when a recruiter will start posting vacancies on our job portal. You can create as many job alerts you wish to.</p><br/>
                <button onClick={()=>{setPtag3(true);setPtag2(false); setPtag1(false)}}>How to get the best out of free job alert?</button><br/>
                <p className={!ptag3?Styles.p_tag:Styles.p_tag2}>You can fetch some of the best job opportunities by providing targeted and detailed information. The system is an automated mechanism which operates and generates matched jobs based on the details you provide. To narrow your feeds, you must provide specific keywords, salary details, experience, location, department and industry. If you do not fill out information for these fields, you will receive job notifications for all job openings. We highly recommend providing specific details while creating a free job alert.</p>
            </div>
        </div>
        </div>
    )
}

export default JobAlertFAQ
