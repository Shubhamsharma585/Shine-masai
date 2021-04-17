import React from 'react'
import { Link } from 'react-router-dom'
import Dog from "./dog.jpg"

function LoginFail() {
    return (
        <div>
            <div style={{display:'flex', marginTop:'50px'}}>
            <img style={{marginLeft:"5%",width:'40%', height:"50vh", boxShadow: "5px 10px 10px #524a4a"}} src={Dog} alt=""/>
                <p style={{marginLeft:"2%",fontSize:"52px", }}>Sorry..! Something went wrong..</p>
              
            </div>
            <div>
            <p style={{marginLeft:"35%",textDecoration:"none", padding:"25px",fontSize:"22px"}}>Please <Link to="/myshine/login"> Click here</Link> to retry</p>
            </div>
            
        </div>
    )
}

export default LoginFail
