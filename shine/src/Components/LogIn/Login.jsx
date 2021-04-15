import React from "react"
import "./Login.css"
import logo1 from "../../Images/logo1.png"
import man from "../../Images/man.png"
import doc from "../../Images/doc.png"
import search from "../../Images/search.png"
import google from "../../Images/google.png"
import ld from "../../Images/ld.png"
import fb from "../../Images/fb.png"

 



function Login()
{
 



    return(
        <div>

           <div className="top">
               <img src={logo1} />
           </div>

           <div className="top1">          
           </div>

           <div className="cont">
             <div className="cont1">
               <h2>Login</h2>
               <input type="text" placeholder="Email"/><br/><br/>
               <input type="text" placeholder="Password"/><br/><br/>

                <div className="login">Login</div>

           
            <p style={{display:"flex", flexDirection:"row"}}><span><hr width="185px"/></span><span style={{width:"10px"}}></span> <span style={{color:"gray"}}>or</span> <span style={{width:"10px"}}></span> <span><hr width="185px"/></span></p>    
          
            <div className="social">
              <div><img src={google} alt=""/> <p>Google</p></div>
              <div><img src={ld} alt=""/> <p>Linkedin</p></div>
              <div><img src={fb} alt=""/> <p>Facebook</p></div>

            </div>
            <p style={{fontSize:"10px", color:"rgb(112, 82, 82)"}}>By syncing your social media account, you agree to shine <span style={{color:"blue"}}>terms and conditions</span></p>

            <div className="Register">Don't have Shine account? <span>Register Now</span> </div>
           </div>






             <div className="cont2">
              <p className="jobs"> 300,000 jobs from 15,000 companies</p>
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




           <div className="btm">
             <div className="btm-left">
             <ul><li><strong>Job seekers </strong></li><li><a id="id_browsejob" target="_blank" href="/myshine/job-search/" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Browse Jobs');"> Browse Jobs</a></li><li><a id="id_jobsearchfooter" href="/myshine/job-search/" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Job Search');"> Job Search</a></li><li><a id="id_createjobalert" href="/myshine/free-job-alerts/" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Create Free Job Alert');"> Create Free Job Alert</a></li></ul>
             <ul><li><strong>Employers </strong></li><li><a id="id_recruiterindia" target="_blank" href="https://recruiter.shine.com?utm_source=shine&amp;utm_medium=footer&amp;utm_campaign=Candidate" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Recruiter India');"> Recruiter India</a></li><li><a id="id_postfreejob" target="_blank" href="https://recruiter.shine.com/online-package/personaldetail/?package_id=31&amp;utm_source=shine&amp;utm_medium=footer&amp;utm_campaign=Candidate" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Post Jobs');"> Post Jobs</a></li></ul>
             <ul><li><strong>Partner Sites </strong></li><li><a href="https://www.englishmate.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'English Mate');">English Mate</a></li><li><a href="https://www.studymateonline.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Study Mate');">Study Mate</a></li><li><a href="https://www.hindustantimes.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Hindustantimes.com');">Hindustantimes.com</a></li><li><a href="https://www.livemint.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Livemint.com');">Livemint.com</a></li><li><a href="https://www.livehindustan.com/" target="_blank" onclick="MyGA.SendEvent('cn_user_footer', 'cn_user_footer', 'cn_click_footer', 'Livehindustan.com');">Livehindustan.com</a></li><li><a href="https://www.ottplay.com/?utm_source=shine&amp;utm_medium=partner-site&amp;utm_campaign=april-21" target="_blank">OTTplay</a></li></ul>
             </div>

             <div className="btm-right">
             <div class="revamp_footer__contact-us"><div class="d-flex flex-row"><strong class="d-flex flex-row">Contact us-08047105555
             <p>
             <a id="id_contactusfooter" href="mailto:contactus@shine.com">contactus@shine.com</a>
             </p></strong>
             </div>
             <div class="follow">
               <ul>
                
               </ul>
               </div>
            </div>
                        
             </div>




           </div>   

           <div className="footer">
           <ul>
            <li><a href="javascript:void(0);" class="cls_req_feedback" name="anc_feedback">Feedback</a></li>
           <li><a target="_blank" href="/myshine/faqs/" id="id_faq">FAQs</a></li><li><a target="_blank" href="/myshine/aboutus/" id="id_aboutus">About Us</a></li>
           <li><a target="_blank" href="/myshine/contactus/" id="id_contactus">Contact Us</a></li>
           <li><a target="_blank" href="/myshine/privacypolicy/" id="id_privacypolicy">Privacy Policy</a></li>
           <li><a target="_blank" href="/myshine/securityadvice/" id="id_fraudalert">Fraud Alert</a></li>
           <li><a target="_blank" href="https://www.livemint.com/" id="id_businessnews">Business News</a></li>
           <li><a target="_blank" href="https://www.hindustantimes.com/" id="id_englishnews">English News</a></li>
           <li><a target="_blank" href="/myshine/termsandconditions/" id="id_termsandcondition">Terms &amp; Conditions</a></li>
           <li><a target="_blank" href="/myshine/disclaimer/" id="id_disclaimer">Disclaimer</a></li><li><a target="_blank" href="/myshine/contactus/?type=reportJobPosting" id="id_reportjob">Report a Job Posting</a></li>
           </ul>
             </div>      


        </div>
    )
}

export default Login;