import React from 'react'
import styles from "./home.module.css";

function GetJob() {
    return (
        <div>
            <h2 style={{fontSize:"1.9rem",color:"#303E4B",fontWeight:"700"}}>Get instant job alerts from top companies</h2>
            <p style={{fontSize:"15px",color:"505E6B"}}>Be the first one to apply to jobs</p>

            <div>
                <div className={styles.GetJob1}></div>
                <div style={{float:"right",width:"700px",height:"306px",marginRight:"95px"}} >
                    <div style={{float:"left"}}>
                        <div className={styles.Mobile}>91<input type="text"placeholder="Mobile"/></div>
                        <div style={{float:"left",marginLeft:"15px"}}><button>Get App</button></div>
                        <div style={{clear:"both"}}></div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <div>
                            <div><button><div></div></button></div>
                            <div><button><div></div>App Store</button></div>
                        </div>

                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default GetJob
