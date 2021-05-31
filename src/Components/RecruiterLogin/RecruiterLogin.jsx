import React, { useState } from "react"
import styles from "../LogIn/Login.module.css"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import ChatBot from "../ChatBot/ChatBot"
import {recauth} from "../../Redux/RecLogin/action"

function RecruiterLogin() {
    
  const dispatch = useDispatch()
  const recAuth = useSelector(state => state.RecLogin.recAuth)
 
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    dispatch(recauth(email, pass))
  }

  if(recAuth){
    return <Redirect to="/recruiter/dashboard" push />
  }
  
  return(
    <div className={styles.mainbox}>
      <div className={styles.recruiterloginimg}></div>
      <div className={styles.contrecruiter}>
        <div className={styles.cont1loginrecruiter}>
          <h2>Recruiter Login</h2>
          <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br/><br/>
          <input type="password" value={pass}  placeholder="Password" onChange={(e) => setPass(e.target.value)}/><br/><br/>
          <div onClick={handleLogin} className={styles.login}>Login</div>
          <p className={styles.recloginptage}>By syncing your social media account, you agree to shine <span className={styles.recloginspantage}>terms and conditions</span></p>
        </div>
      </div>
      <ChatBot/>
    </div>   
  )
}

export default RecruiterLogin
