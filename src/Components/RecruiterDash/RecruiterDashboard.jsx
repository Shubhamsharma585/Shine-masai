import React from 'react'
import styles from "../RecruiterDash/Dashboard.module.css"
import {getUserData, singleUserData} from '../../Redux/RecruiterDash/action'
import { useDispatch, useSelector } from "react-redux";
import axios from "axios"

const RecruiterDashboard = () => {

    const [call, setCall] = React.useState(false)
    const [interviewColor, setInterviewColor] = React.useState("")
    const dispatch = useDispatch()
    const data = useSelector((state) => state.RecruiterDash.data)
    const CandiData = useSelector((state) => state.RecruiterDash.CandiData)
    const isLoading = useSelector((state) => state.RecruiterDash.isLoading)

    const commentData =  useSelector((state) => state.RecruiterDash.CandiData.comments)
    // const [comments, setComments] = React.useState([])
    const [text, setText] = React.useState("")

    const handleChange = (e) => {
        let value = e.target.value
        setText(value)
    }

    const handleAdd = (id) => {
        // setComments([...comments, text])
        commentData.push(text)
        handlePatch(id)
    }

    const handlePatch = (id) => {
        console.log(id)
        axios.patch(`https://json-heroku-shubham.herokuapp.com/applications/${id}`,{
            comments: commentData,
            call: call,
            interview_status: interviewColor
        }).then(()=>handleShow(id))
    }


    React.useEffect(()=>{
        onloadFunction()
    }, [])

    const onloadFunction = () => {
        dispatch(getUserData())
    }

    const handleShow = (id) =>{
        console.log(id)
        // dispatch(singleUserData(id))
    }
    console.log(data)
    return (
        <div className={styles.dash_MainContainer}>
            {isLoading ? <div className={styles.dash_MainContainer_Loading}>
                <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" className={styles.img} alt="loding-gif"/>
            </div>:
            <div className={styles.mainContainer_CandidateCard_Container}>
                {data?.map(el=> 
                    <div key={el.id} onClick={()=> handleShow(el.id)} className={styles.mainContainer_CandidateCard}>
                        <div className={styles.mainContainer_CandidateCard_Info}>
                            <p><strong>Name: </strong>{`${el?.name}`}</p>
                            <p><strong>Email: </strong> {`${el.email}`}</p>
                            <p><strong>Location: </strong>{`${el.location}`}</p>
                            <p><strong>Mobile: </strong>{`${el.phone}`}</p>
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
                        <span>{CandiData.userName}</span>
                    </div>
                    <div>
                        <label>
                            Call: <div style={call ? {backgroundColor: "green"} : {backgroundColor: "red"}}></div>
                        </label>
                        <label>
                            Interview-Status: <div
                                style={{backgroundColor: `${CandiData.interview_status}`}}
                            >
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
                            <span>{CandiData.gender}</span>
                        </div>
                    </div>
                    <div className={styles.mainContainer_DOB}>  
                        <div>
                            <strong>DOB: </strong>
                        </div>
                        <div>
                            <span>{CandiData.dob}</span>
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
                        <span>{CandiData.applied_company}</span>
                    </div>
                </div>

                <div className={styles.mainContainer_Position}>  
                    <div>
                        <strong>Applied Position: </strong>
                    </div>
                    <div>
                        <span>{CandiData.applied_position}</span>
                    </div>
                </div>

                <div className={styles.mainContainer_TwoOne}>
                    <div className={styles.mainContainer_Location}>  
                        <div>
                            <strong>Location: </strong>
                        </div>
                        <div>
                            <span>{CandiData.location}</span>
                        </div>
                    </div>
                    <div className={styles.mainContainer_Exp}>  
                        <div>
                            <strong>Total Experience: </strong>
                        </div>
                        <div>
                            {
                                CandiData.experience.length === 0 ? <span>0 yrs</span> : <span>{CandiData.experience} yrs</span>
                            }
                        </div>
                    </div>
                </div>

                <div className={styles.mainContainer_Education}>  
                    <div>
                        <strong>Highest Qualification: </strong>
                    </div>
                    <div>
                        {CandiData.qualification}
                    </div>
                </div>

                <div className={styles.mainContainer_Skills}>  
                    <div>
                        <strong>Skills: </strong>
                    </div>
                    <div className={styles.mainContainer_Skills_Container}>
                        {CandiData.skills.map(el => 
                            <div className={styles.mainContainer_Skills_Container_Item}>{el}</div>
                        )}
                    </div>
                </div>

                <div className={styles.comments_Buttons_Container}>
                    <div className={styles.comments_Container}>
                        {isLoading ? <p>...loading</p> :<div className={styles.comments_Box}>
                            {commentData.map(el => <p>{el}</p>)}
                        </div>}
                        <div className={styles.input_Box}>
                            <textarea value={text} onChange={handleChange} rows="4.8" cols="50"></textarea>
                            <button onClick={() => handleAdd(CandiData.id)}>Add</button>
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
