import React, { useState } from "react"
import styles from "../LogIn/Login.module.css"
import logo1 from "../../Images/logo1.png"
import man from "../../Images/man.png"
import doc from "../../Images/doc.png"
import search from "../../Images/search.png"
import google1 from "../../Images/google1.png"
import ld from "../../Images/ld.png"
import fb from "../../Images/fb.png"
import {auth, google} from "../FireAuth/auth"  
import { useDispatch, useSelector } from "react-redux" 
import { logingin } from "../../Redux/Login/action"
import { Link, Redirect } from "react-router-dom"
import SocialFollow from "./SocialFollow"


function Login()
{
 
  const dispatch = useDispatch()
  const isauth = useSelector(state => state.logi.isauth)
  console.log(isauth)

  const data = useSelector(state => state.logi)
  console.log(data)
  console.log(data.payload)
  console.log(data.payload.name)

 



  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");



  function handlelogin()
  {
    auth.signInWithPopup(google)
        .then(resp => 
          {return  console.log(resp),
          setEmail(resp.user.email),
          dispatch(logingin(resp.user.email))

          } )
        .catch((err) => console.log(err)); 
  }





    return isauth?(<Redirect to={"/"} push/>):(
        <div>

         




        
 
           <div className={styles.top1}>          
           </div>

           <div className={styles.cont}>
             <div className={styles.cont1login}>
               <h2>Login</h2>
               <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
               <input type="text" value={pass}  placeholder="Password" onChange={(e) => setPass(e.target.value)}/><br/><br/>

                <div className={styles.login}>Login</div>

           
            <p style={{display:"flex", flexDirection:"row"}}><span><hr width="185px"/></span><span style={{width:"10px"}}></span> <span style={{color:"gray"}}>or</span> <span style={{width:"10px"}}></span> <span><hr width="185px"/></span></p>    
          
            <div className={styles.social}>
              <div onClick={() => handlelogin()}><img src={google1} alt=""/> <p>Google</p></div>
              <div><img src={ld} alt=""/> <p>Linkedin</p></div>
              <div><img src={fb} alt=""/> <p>Facebook</p></div>

            </div>
            <p style={{fontSize:"10px", color:"rgb(112, 82, 82)"}}>By syncing your social media account, you agree to shine <span style={{color:"blue"}}>terms and conditions</span></p>

            <div className={styles.Register}>Don't have Shine account? <span><Link to={"/Registration"}>Register Now</Link></span></div>
           </div>
 





             <div className={styles.cont2}>
              <p className={styles.jobs}> 300,000 jobs from 15,000 companies</p>
             <ul >
               <li>
                 <div><img src={man} alt=""/></div>
                 <div><strong>Create your account and receive matching jobs automatically </strong><br/>
             Fill in your profile details and let our unique matching technology bring you the most relevant job
         opportunities.</div>
               </li>
               

             <li>
               <div><img src={doc} alt=""/></div>
               <div><strong>Be completely anonymous</strong><br/>
      You choose which recruiters see your personal and contact detail     </div>
             </li>

            
            <li>
              <div><img src={search} alt=""/></div>
              <div><strong>Equip yourself for a great career</strong> <br/>
    Research industries and employ our career services to be better equipped for your professional life.</div>
            </li>
    
    </ul>
             </div>
           </div>




           <div className={styles.btm}>
             <div className={styles.btm_left}>
             <ul><li><strong>Job seekers </strong></li><li><a id="id_browsejob" target="_blank" href="/myshine/job-search/" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Browse Jobs');"> Browse Jobs</a></li><li><a id="id_jobsearchfooter" href="/myshine/job-search/" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Job Search');"> Job Search</a></li><li><a id="id_createjobalert" href="/myshine/free-job-alerts/" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Create Free Job Alert');"> Create Free Job Alert</a></li></ul>
             <ul><li><strong>Employers </strong></li><li><a id="id_recruiterindia" target="_blank" href="https://recruiter.shine.com?utm_source=shine&amp;utm_medium=footer&amp;utm_campaign=Candidate" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Recruiter India');"> Recruiter India</a></li><li><a id="id_postfreejob" target="_blank" href="https://recruiter.shine.com/online-package/personaldetail/?package_id=31&amp;utm_source=shine&amp;utm_medium=footer&amp;utm_campaign=Candidate" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Post Jobs');"> Post Jobs</a></li></ul>
             <ul><li><strong>Partner Sites </strong></li><li><a href="https://www.englishmate.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'English Mate');">English Mate</a></li><li><a href="https://www.studymateonline.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Study Mate');">Study Mate</a></li><li><a href="https://www.hindustantimes.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Hindustantimes.com');">Hindustantimes.com</a></li><li><a href="https://www.livemint.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Livemint.com');">Livemint.com</a></li><li><a href="https://www.livehindustan.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Livehindustan.com');">Livehindustan.com</a></li><li><a href="https://www.ottplay.com/?utm_source=shine&amp;utm_medium=partner-site&amp;utm_campaign=april-21" target="_blank">OTTplay</a></li></ul>
             </div>

             <div className={styles.btm_right}>
                 <div>
                   <div ><strong>Contact us-08047105555
                         <p>
                      <a id="id_contactusfooter" href="mailto:contactus@shine.com">contactus@shine.com</a>
                         </p></strong>
                     </div>
                   <div>
                     <div style={{display:"flex" ,flexDirection:"row"}}>
                       <span  style={{fontWeight:"600" , marginRight:"10px"}} >Follow us </span>  <SocialFollow/>
                     </div>
            
               </div>
            </div>
                        
           </div>




           </div>   

           <div className={styles.footer}>
           <ul>
            <li><a href="javascript:void(0);"name="anc_feedback">Feedback</a></li>
           <li><a target="_blank" href="/myshine/faqs/" id="id_faq">FAQs</a></li><li><a target="_blank" href="/myshine/aboutus/" id="id_aboutus">About Us</a></li>
           <li><a target="_blank" href="/myshine/contactus/" id="id_contactus">Contact Us</a></li>
           <li><a target="_blank" href="/myshine/privacypolicy/" id="id_privacypolicy">Privacy Policy</a></li>
           <li><a target="_blank" href="/myshine/securityadvice/" id="id_fraudalert">Fraud Alert</a></li>
           <li><a target="_blank" href="https://www.livemint.com/" id="id_businessnews">Business News</a></li>
           <li><a target="_blank" href="https://www.hindustantimes.com/" id="id_englishnews">English News</a></li>
           <li><a target="_blank" href="/myshine/termsandconditions/" id="id_termsandcondition">Terms &amp; Conditions</a></li>
           <li><a target="_blank" href="/myshine/disclaimer/" id="id_disclaimer">Disclaimer</a></li><li><a target="_blank" href="/myshine/contactus/?type=reportJobPosting" id="id_reportjob">Report a Job Posting</a></li>
           </ul>
             </div>)   


        </div>
    )
}

export default Login;