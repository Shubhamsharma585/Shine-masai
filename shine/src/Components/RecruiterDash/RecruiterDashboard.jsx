import React from 'react'
import styles from "../RecruiterDash/Dashboard.module.css"
import {getUserData, singleUserData} from '../../Redux/RecruiterDash/action'
import { useDispatch, useSelector } from "react-redux";

const initValue = {
    comments: "",
}

const RecruiterDashboard = () => {

    const [call, setCall] = React.useState(false)
    const [interviewColor, setInterviewColor] = React.useState("")
    const [comment, setComment] = React.useState(initValue)
    const {comments} = comment
    const dispatch = useDispatch()
    const data = useSelector((state) => state.RecruiterDash.data)
    const CandiData = useSelector((state) => state.RecruiterDash.CandiData)
    const CandiPersonal = useSelector((state) => state.RecruiterDash.CandiPersonal)
    const CandiEducation = useSelector((state) => state.RecruiterDash.education)
    const isLoading = useSelector((state) => state.RecruiterDash.isLoading)




    const handleChange = (e) => {
        const {name, value} = e.target
        setComment({
            ...comment, [name]: value
        })
    }

    const handleAdd = () => {
        console.log(CandiData)
    }

    React.useEffect(()=>{
        onloadFunction()
    }, [])

    const onloadFunction = () => {
        dispatch(getUserData())
    }

    const handleShow = (id) =>{
        dispatch(singleUserData(id))
    }

    console.log(CandiEducation)

    return (
        <div className={styles.dash_MainContainer}>
            {isLoading ? <div className={styles.dash_MainContainer_Loading}>
                <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" className={styles.img} alt="loding-gif"/>
            </div>:
            <div className={styles.mainContainer_CandidateCard_Container}>
                {data.map(el=> 
                    <div key={el.id} onClick={()=> handleShow(el.id)} className={styles.mainContainer_CandidateCard}>
                        <div className={styles.mainContainer_CandidateCard_Info}>
                            <div>{el.name}</div>
                            <div>{el.title}</div>
                            <div>{el.email}</div>
                            <div>{el.personal.location}</div>
                        </div>
                    </div>    
                )}
            </div>}
            
            <div className={styles.mainContainer_CandidateInfo_Container}>
                <div className={styles.mainContainer_Name}>  
                    <div>
                        <strong>Candidate Name: </strong>
                    </div>
                    <div>
                        <span>{CandiData.name}</span>
                    </div>
                    <div>
                        <label>
                            Call: <div style={call ? {backgroundColor: "green"} : {backgroundColor: "red"}}></div>
                        </label>
                        <label>
                            Interview-Status: <div
                                style={{backgroundColor: `${interviewColor}`}}
                            >
                                {interviewColor=="" && <span>Not_Submitted</span>}
                            </div>
                        </label>
                    </div>
                </div>

                <div className={styles.mainContainer_TwoOne}>
                    <div className={styles.mainContainer_Gender}>  
                        <div>
                            <strong>Candidate Gender: </strong>
                        </div>
                        <div>
                            <span>{CandiPersonal.gender}</span>
                        </div>
                    </div>
                    <div className={styles.mainContainer_DOB}>  
                        <div>
                            <strong>DOB: </strong>
                        </div>
                        <div>
                            <span>{CandiPersonal.dob}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.mainContainer_Email}>  
                    <div>
                        <strong>Candidate Email: </strong>
                    </div>
                    <div>
                        <span>{CandiData.email}</span>
                    </div>
                </div>

                <div className={styles.mainContainer_Phone}>  
                    <div>
                        <strong>Candidate Phone: </strong>
                    </div>
                    <div>
                        <span>{CandiData.phone}</span>
                    </div>
                </div>

                <div className={styles.mainContainer_Company}>  
                    <div>
                        <strong>Applied Company: </strong>
                    </div>
                    <div>
                        <span>{}</span>
                    </div>
                </div>

                <div className={styles.mainContainer_Position}>  
                    <div>
                        <strong>Applied Position: </strong>
                    </div>
                    <div>
                        <span>{CandiData.title}</span>
                    </div>
                </div>

                <div className={styles.mainContainer_TwoOne}>
                    <div className={styles.mainContainer_Location}>  
                        <div>
                            <strong>Location: </strong>
                        </div>
                        <div>
                            <span>{CandiPersonal.location}</span>
                        </div>
                    </div>
                    <div className={styles.mainContainer_Exp}>  
                        <div>
                            <strong>Total Experience: </strong>
                        </div>
                        <div>
                            <span>{}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.mainContainer_Education}>  
                    <div>
                        <strong>Highest Qualification: </strong>
                    </div>
                    <div>
                        {/* {CandiEducation.map(el => {
                            <p>{`${el.title}`}</p>  
                            console.log(el.title) 
                        })} */}
                    </div>
                </div>

                <div className={styles.mainContainer_Skills}>  
                    <div>
                        <strong>Skills: </strong>
                    </div>
                    <div>
                        {

                        }
                    </div>
                </div>

                <div className={styles.comments_Buttons_Container}>
                    <div className={styles.comments_Container}>
                        <div className={styles.comments_Box}>
                            <p>{}</p>
                        </div>
                        <div className={styles.input_Box}>
                            <textarea name="comments" value={comments} onChange={handleChange} rows="4.8" cols="50"></textarea>
                            <button onClick={handleAdd}>Add</button>
                        </div>
                    </div>
                    <div className={styles.buttons_Container}>
                        <button onClick={() => setCall(!call)}>Mark Call Completed</button><br/>
                        <button onClick={() => setInterviewColor("green")}>Mark Interview Status Completed</button>
                        <button onClick={() => setInterviewColor("yellow")}>Mark Interview Status Going-on</button>
                        <button onClick={() => setInterviewColor("blue")}>Mark Interview Status Scheduled</button>
                        <button onClick={() => setInterviewColor("orange")}>Mark Interview Status Submitted</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {RecruiterDashboard}
