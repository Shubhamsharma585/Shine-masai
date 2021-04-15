import React from 'react'
import JobAlertFAQ from './JobAlertFAQ'
import JobAlertInput from './JobAlertInput'
import Styles from "./JobAlert.module.css"
import JobAlertFooter from './JobAlertFooter'

function JobAlert() {
    return (
        <div>
            <div className={Styles.main_div}>
                <div>
                    <JobAlertInput/>
               </div> 
                 <div className={Styles.main_input}>
                     <JobAlertFAQ/>
                 </div>
            </div>
            <div style={{backgroundColor:"whitesmoke"}}>
                <JobAlertFooter/>
            </div>
    </div>
    )
}

export default JobAlert
