import React from 'react'
import styles from "./home.module.css";

function Premium() {
    return (
        <div className={styles.Premium}>
            <div style={{float:"left"}}>
                <div>
                    <div className={styles.crown}><div></div></div>
                    <div style={{color:"#ffb56a",fontSize:"30px",fontWeight:"600",lineHeight:"60px",float:"left"}}>Shine Premium</div>
                </div>
                <div style={{clear:"both"}}></div>
               
                <div style={{fontSize:"28px",fontWeight:"600",padding:"10px 0 20px 0"}}>Fastrack your jon search with our premium services</div>
                <div style={{clear:"both"}}></div>
                <div>
                    <div><div></div>Enhanced Profile</div>
                    <div><div></div>10x higher visibility to recruters</div>
                    <div><div></div>Insights on other applicants</div>
                    <div><div></div>Interview Ready</div>
                </div>
                <div></div>
                <div>
                    <button>Get Shine Premium</button>
                </div>

            </div>
            
            <div className={styles.PremiumRight}></div>
            
        </div>
    )
}

export default Premium
