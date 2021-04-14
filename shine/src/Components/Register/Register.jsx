import React from "react"
import "./Register.css"
import logo1 from "../../Images/logo1.png"
import google from "../../Images/google.png"
import ld from "../../Images/ld.png"
import fb from "../../Images/fb.png"
import regi from "../../Images/regi.png"




function Register()
{
 



    return(
        <div>

           <div className="top">
               <img src={logo1} />
               <div className="login">Login</div>

           </div>

          
           <div className="cont">

   <div className="mid">
               <div className="cont-img">
                  <img src={regi} alt=""/>
               </div>

             <div className="cont1">
                 <br/>
               <h2></h2>
               <input type="text" placeholder="Name"/><br/><br/>
               <input type="text" placeholder="Email"/><br/><br/>
               <input type="text" placeholder="Mobile Number"/><br/><br/>
               <input type="text" placeholder="Password"/><br/><br/>

                <div className="conti">
                         Continue →  
                     </div>

           
            <p style={{display:"flex", flexDirection:"row"}}><span><hr width="185px"/></span><span style={{width:"10px"}}></span> <span style={{color:"gray"}}>or</span> <span style={{width:"10px"}}></span> <span><hr width="185px"/></span></p>    
          
            <div className="social">
              <div><img src={google} alt=""/> <p>Google</p></div>
              <div><img src={ld} alt=""/> <p>Linkedin</p></div>
              <div><img src={fb} alt=""/> <p>Facebook</p></div>

            </div>
            <p style={{fontSize:"10px", color:"rgb(112, 82, 82)"}}>By syncing your social media account, you agree to shine <span style={{color:"blue"}}>terms and conditions</span></p>

        
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

export default Register;