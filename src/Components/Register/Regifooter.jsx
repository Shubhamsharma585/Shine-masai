import React from "react"
import styles from "./Register.module.css"


function Regifooter()
{



    return(
        <div>

            <div className={styles.footer}> 
             <ul>
            <li><a href="/myshine/faqs/" name="anc_feedback">Feedback</a></li>
           <li><a href="/myshine/faqs/" id="id_faq">FAQs</a></li><li><a target="_blank" href="/myshine/aboutus/" id="id_aboutus">About Us</a></li>
           <li><a href="/myshine/contactus/" id="id_contactus">Contact Us</a></li>
           <li><a href="/myshine/privacypolicy/" id="id_privacypolicy">Privacy Policy</a></li>
           <li><a href="/myshine/securityadvice/" id="id_fraudalert">Fraud Alert</a></li>
           <li><a href="https://www.livemint.com/" id="id_businessnews">Business News</a></li>
           <li><a href="https://www.hindustantimes.com/" id="id_englishnews">English News</a></li>
           <li><a href="/myshine/termsandconditions/" id="id_termsandcondition">Terms &amp; Conditions</a></li>
           <li><a href="/myshine/disclaimer/" id="id_disclaimer">Disclaimer</a></li><li><a target="_blank" href="/myshine/contactus/?type=reportJobPosting" id="id_reportjob">Report a Job Posting</a></li>
           </ul>
           </div>

        </div>
    )
}

export default Regifooter;