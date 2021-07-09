import React from 'react'
import Chatbox from "./Chatbox.png"
import Styles from "./ChatBot.module.css"
// import JobAlert from '../CreateJobAlert/JobAlert'
function ChatBot() {
    const [status, setStatus]=React.useState(true)
    const [hide, setHide]=React.useState("")
    const [chat, setChat]= React.useState([])
    const [reply, setReply]=React.useState(false)
    
    const handleBtn=()=>{
        setChat([...chat,hide]);
        setReply(true);
        setHide("")
    }
    return (
        <div>
            <div className={!status ? Styles.conv:Styles.conv2}>
                <div className={Styles.chatbothead}>
                   <p>Alisha</p> <button onClick={()=>{setReply(!reply);setChat([])}}>X</button>
                </div>
                <div style={{fontSize:'12px' }}>
                    <h3 style={{ padding:"2px", backgroundColor:"whitesmoke", margin:'8px'}}>Hi, I am Alisha, Welcome aboard!</h3>
                    <h3 style={{ padding:"2px", backgroundColor:"whitesmoke", margin:'8px'}}>How can i help you today?</h3>
                </div>
                <div style={{textAlign:"end"}}>{chat.map(el=><p>{el}</p>)
                    }
                </div>
                <p  className={reply? Styles.rply:Styles.conv2}>
                    We are happy to Help you, Kindly contact our Customer Care number 080-47105555 
                </p>
               <div>
                   <input style={{height:'3vh',margin:'20px', marginTop:'0px'}} placeholder="Questions here" value={hide} onChange={(e)=>setHide(e.target.value)} type="text"/>
                   <button onClick={()=>handleBtn()} style={{height:'5vh'}}>send</button>
               </div>

            </div>
            <div>
            <div onClick={()=>setStatus(!status)} className={Styles.chatbotbutton}><img className={Styles.chatbotimg} src={Chatbox} alt=""/></div>
            </div>
        </div>

      
    )
}

export default ChatBot
