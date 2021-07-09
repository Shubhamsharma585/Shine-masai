import React from 'react'
import Styles from "./JobPost.module.css"
import {v4 as uuid} from "uuid"
import axios from 'axios'
// import styles from "../LogIn/Login.module.css"
// import SocialFollow from '../LogIn/SocialFollow'
import Footer from '../Home/Footer'

const payload={
    id:uuid(),
    title:"",
    salary:"any",
    qulification:"BA",
    subtitle:"",
    department: "Audit",
    location:"Bangalore",
    experience:"any",
    email:"",
    description:"",
    telephone:"",
    skills:[]
}

function JobPostInput() {
    const [data, setData]=React.useState(payload)
    const [skillData, setSkillData]= React.useState("")
    const {title,salary,subtitle,department,location,experience,email,description,telephone,qualification}=data

    const handleChange=(e)=>{
        const {value,name}=e.target;
        if(name !== 'skills'){
            setData({...data,[name]:value})
        }
    }
   
    const handlearr=(skillData)=>{
       ( data.skills).push(skillData+" ")
       setSkillData("")
    }

    const handleSubmit=()=>{
       axios({
           method:"post",
           url:"https://json-heroku-shubham.herokuapp.com/jobDetails",
           data:data
       }).then(res=>{
           console.log(res)
           alert("Data Posted")
       }).catch(err => {
           alert("Sorry... Somthing Went Wrong")
       })
    }
    return (
        <div className={Styles.outetpostdiv}>
              <div className={Styles.sub1}>
             <div style={{textAlign:"left"}}>
                <h1 style={{fontSize:"42px"}}>Create Job Post 2021</h1>
                <h2 style={{fontSize:"24px"}}>You can create job post here</h2>
            </div>
            <div className={Styles.input}>
                <h4 style={{fontSize:'20px'}}>Let us know what kind of employee you are looking for and we'll send them to your Inbox.</h4>
                <div style={{display:'flex',}}>
                <div style={{display:'flex', flexDirection:"column",justifyContent:"space-around", alignItems:"left"}}>
            <label >Job Title</label>
            <label> Company Name</label>
            <label >Salary</label>
            <label >Department</label>
            <label >Location</label>
            <label >Qualification</label>
            <label >Experience</label>
            <label>Email ID</label>
            <label>TelePhone</label>
            <label >Description</label>
            <label >Skills</label>
            </div>
            <div  style={{width:"100%",display:'flex', flexDirection:"column",justifyContent:"space-around", alignItems:"left"}}>  
            <input placeholder="Enter Title " name="title" value={title} onChange={handleChange} type="text"/>
            <input placeholder="Add Company Name" name="subtitle" value={subtitle} onChange={handleChange} type="text"/>
            <select onChange={handleChange} name='salary'value={salary}>
                <option value="any">-Any-</option>
                <option value="50000">Rs 50,000</option>
                <option value="1">Rs 1 Lakh/Yr</option>
                <option value="2">Rs 2 Lakh/Yr</option>
                <option value="3">Rs 3 Lakh/Yr</option>
                <option value="4">Rs 4 Lakh/Yr</option>
                <option value="5">Rs 5 Lakh/Yr</option>
                <option value="6">Rs 6 Lakh/Yr</option>
                <option value="7">Rs 7 Lakh/Yr</option>
                <option value="8">Rs 8 Lakh/Yr</option>
                <option value="9">Rs 9 Lakh/Yr</option>
                <option value="10">Rs 10Lakh/Yr</option>
            </select>
            
            <select name="department" id="Department" value={department} onChange={handleChange}>
             <option value="Audit">Audit</option>
             <option value="Equity Research">Equity Research</option>
             <option value="Finance/Account/Tax">Finance/Account/Tax</option>
             <option value="Investment Banking">Investment Banking</option>
             <option value="Risk/ Underwriting">Risk/ Underwriting</option>
             <option value="Securities Trading">Securities Trading</option>
             <option value="Back operation Services">Back operation Services</option>
             <option value="Customer Services">Customer Services</option>
             <option value="Operations Management">Operations Management</option>
             <option value="Technical Support">Technical Support</option>
             <option value="Application programming/Maintainance">Application programming/Maintainance</option>
             <option value="Client Server">Client Server</option>
             <option value="DBA/ Data warehouse">DBA/ Data warehouse</option>
             <option value="Mainframe">Mainframe</option>
             <option value="Middleware">Middleware</option>
             <option value="Networking">Networking</option>
             <option value="Telecom Software">Telecom Software</option>
             <option value="Pre-Sales">Pre-Sales</option>
            </select>
            
            <select name="location" id="location" onChange={handleChange} value={location}>
             <option value="Bangalore">Bangalore</option>
             <option value="Chennai">Chennai</option>
             <option value="Delhi">Delhi</option>
             <option value="Mumbai">Mumbai</option>
             <option value="Kolkatta">Kolkatta</option>
             <option value="Pune">Pune</option>
             <option value="Lucknow">Lucknow</option>
             <option value="Jharkhand">Jharkand</option>
             <option value="Ahmadabad">Ahmadabad</option>
             <option value="Kocchi">Kocchi</option>
             <option value="Chandigar">chandigarh</option>
             <option value="Mysore">Mysore</option>
             <option value="Jaipur">Jaipur</option>
             <option value="Noida">Noida</option>
             <option value="Hydrabad">Hydrabad</option>
             <option value="Sikkim">Sikkim</option>
             <option value="Assam">Assam</option>
            </select>

            <select name="quqlification" id="qualification" onChange={handleChange} value={qualification}>
             <option value="BA">BA</option>
             <option value="B.com">B.com</option>
             <option value="Bsc">Bsc</option>
             <option value="MA">MA</option>
             <option value="M.com">M.com</option>
             <option value="Msc">Kolkatta</option>
             <option value="MBA">MBA</option>
             <option value="B.E">B.E</option>
             <option value="B.Tech">B.Tech</option>
             <option value="M.Tech">M.Tech</option>
             <option value="Diploma">Diploma</option>
            </select>
            
            <select name="experience" value={experience} onChange={handleChange} >
                <option value="any">-Any-</option>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>
            <input value={email} onChange={handleChange} name="email" placeholder="Your Email Id" type="Email"/>
            <input value={telephone} onChange={handleChange} name="telephone" placeholder="Add Telephone" type="text"/>
            <input value={description} onChange={handleChange} name="description" placeholder="Descriotion about job"type="text"/>
            <div style={{display:'flex'}}>
            <input value={skillData} onChange={(e)=>setSkillData(e.target.value)} name="skills" placeholder="Skills" type="text"/> 
            <button className={Styles.addbtn} onClick={()=>handlearr(skillData)}>Add</button>

            </div>
            
            </div>
            </div>
            <div className={Styles.Register}>
                <button onClick={()=>handleSubmit()}>Create job Post</button>
            </div>
            </div> 
            </div>
            <Footer/>
           </div>
    
    )
}

export default JobPostInput
