import React from 'react'
import styles from "./home.module.css";

function AdvanceSearch({setIsAuth}) {
    return (
 
            <div>
                <h1 className={styles.ah1 }>Growth on your mind? <button  style={{float:"right"}} onClick={()=>{setIsAuth(false);}} >X <img src="" alt=""/></button></h1>

                
                <div style={{display:'flex',marginTop:"25px"}}>
                    <div className={styles.searchInput}><label></label><input type="text" placeholder="Job title,skills" /><div style={{width:"50px",padding:"5px",textAlign:"center",fontSize:"10px",color:"#fff",backgroundColor:"#fa7185",borderRadius:"4px",marginTop:"-45px",marginLeft:"252px"}}>Required</div></div>
                    <div className={styles.searchInput} style={{marginLeft:"15px"}}><label></label><input type="text" placeholder="Location" /></div>
                    <div className={styles.searchInput} style={{marginLeft:"15px"}}><label></label><input type="text" placeholder="Experience(Years)" /></div>
                    <div  style={{width:"109px",fontSize:"10px",color:"#fff",marginLeft:"15px", textAlign:"center"}}><button  className={styles.searchInput} style={{marginBottom:"10px",width:"109px",textAlign:"center",backgroundColor:"#f7a400",color:"#fff"}} >Submit</button> Advanced search</div>

                </div>
               

            </div>
            
     
    )
}

export default AdvanceSearch
