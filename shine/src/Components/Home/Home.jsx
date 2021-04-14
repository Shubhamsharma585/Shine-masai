import React, { useState } from 'react'
import AdvanceSearch from './AdvanceSearch';
import CoolPlaces from './CoolPlaces';
import styles from "./home.module.css";
import TotalCompany from './TotalCompany';
import Why from './Why';

function Home() {
    const [isAuth,setIsAuth] = useState(false);
    return (
        <div className={styles.home }>
            <div className={styles.a1background }>
                {isAuth?(<AdvanceSearch setIsAuth={setIsAuth}/>):(<><div>
                    <h1 className={styles.ah1 }>Growth on your mind?</h1>
                    <h2 className={styles.ah2 }>Explore 300,000+ jobs</h2>
                    <button onClick={()=>{setIsAuth(true);}} className={styles.searchButton}>Job title,skills <img style={{marginLeft:"500px"}} src="" alt="search"/></button>

                </div>
                <div className={styles.a2background}>
                    <button className={styles.regButton}>Register for free</button>
                    <div className={styles.signinp}><img src="" alt=""/><p>Sign in</p></div>

                </div></>)}
                
            </div>
            <CoolPlaces/>
            <TotalCompany/>
            <div style={{ marginTop:"45px",marginBottom:"35px"}}><button style={{fontSize:"400",color:"#5364c4",border:"1px solid #5364c4 ", textAlign:"center",borderRadius:"4px",boxShadow:"0px 4px 4px 0px rgb(0 0 0 / 20%)",width:"235px",height:"30px",backgroundColor:"#fff",marginTop:"35px"}}>View all top Companies</button></div>
            
            <div><img style={{width:"970px",height:"250px"}} src="https://static1.shine.com/c/s1/images/candidate/new/ad_banner_new.png" alt="company banner"/></div>

            <Why/>
        </div>
    )
}

export default Home
