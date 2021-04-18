import React, { useState } from "react"
import styles from "../LogIn/Login.module.css"
import google1 from "../../Images/google1.png"
import ld from "../../Images/ld.png"
import fb from "../../Images/fb.png"
import {auth, google} from "../FireAuth/auth"  
import { useDispatch, useSelector } from "react-redux"
import { logingin } from "../../Redux/Login/action"
import { Link, Redirect } from "react-router-dom"
import Popouts from "../Popouts/LoginFail" 

function RecruiterLogin() {
    
  const dispatch = useDispatch()
  const isauth = useSelector(state => state.logi.isauth)
  console.log(isauth)

  const isfailure = useSelector(state => state.logi.isfailure)

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
  if(isfailure)
  {
     return <Popouts/>
  }
 
    return isauth?(
    
    <Redirect to={"/"} push/>
    
    
    ):(
        <div style={{display:'flex'}}>
        <div className={styles.top1}>          
           </div>

           <div className={styles.cont}>
             <div className={styles.cont1login}>
               <h2>Recruiter Login</h2>
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
           </div>
           </div>

           <div className={styles.recruiterloginimg}>

           </div>
           </div>
    )
}

export default RecruiterLogin
