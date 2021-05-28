import React, { useState } from "react"
import styles from "../LogIn/Login.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import ChatBot from "../ChatBot/ChatBot"
import {logingin} from "../../Redux/RecLogin/action"

function RecruiterLogin() {
    
  const dispatch = useDispatch()
  const recAuth = useSelector(state => state.RecLogin.recAuth)
 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if(email === "recruiter@shine.com" && pass === "shine123"){
      dispatch(logingin())
    }
    else{
      alert("Incorrect Email or Password")
    }
  }

  if(recAuth){
    return <Redirect to="/recruiter/dashboard" push />
  }
  
  return(
    <div style={{display:'flex'}}>
      <div className={styles.recruiterloginimg}></div>
      <div className={styles.contrecruiter}>
        <div className={styles.cont1loginrecruiter}>
          <h2>Recruiter Login</h2>
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <input type="password" value={pass}  placeholder="Password" onChange={(e) => setPass(e.target.value)}/><br/><br/>
          <div onClick={handleLogin} className={styles.login}>Login</div>
          <p style={{fontSize:"10px", color:"rgb(112, 82, 82)"}}>By syncing your social media account, you agree to shine <span style={{color:"blue"}}>terms and conditions</span></p>
        </div>
      </div>
      <ChatBot/>
    </div>   
  )
}

export default RecruiterLogin
