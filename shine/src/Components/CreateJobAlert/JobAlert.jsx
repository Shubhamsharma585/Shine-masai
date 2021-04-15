import React from 'react'
import JobAlertFAQ from './JobAlertFAQ'
import JobAlertInput from './JobAlertInput'
import Styles from "./JobAlert.module.css"

function JobAlert() {
    return (
        <div className={Styles.main_div}>
           <div>
           <JobAlertInput/>
               </div> 
          <div className={Styles.main_input}>
          <JobAlertFAQ/>
          </div>
          
        </div>
    )
}

export default JobAlert
