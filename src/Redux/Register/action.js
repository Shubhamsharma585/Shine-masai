import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actiontype"
import Axios from "axios"





export const registering = (payload) => dispatch => {
    console.log("registering")
    console.log(payload)
    const {name, email, mobile, gender, location, degree,
        college, course, skills, title, 
        company, industry, functionalarea } = payload

    dispatch(registerrequest())
    Axios.post("https://json-heroku-shubham.herokuapp.com/applicant",{
        "name": name,
    "title": "",
    "email": email,
    "mobile": mobile,
    "resume": "",
    "personal": {
      "name": name,
      "email": email,
      "mobile": mobile,
      "dob": "",
      "location": location,
      "gender": gender
    },
    "worksummary": {
      "title": title,
      "summary": "",
      "experience": [ ],
      "largestteam": "",
      "anualsalary": "",
      "notice": ""
    },
    "employment": {
      "title": title,
      "company": company,
      "duration": "",
      "industry": industry,
      "functionalarea": functionalarea
    },
    "education": 
      {
        "title": degree,
        "branch": course,
        "college": college
      }
    ,
    "skills": skills,
    "desired": {
      "role": "",
      "location": "",
      "department": "",
      "industry": "",
      "jobtype": "",
      "shifttype": "",
      "salary": ""
    }


    })
    .then((res) => {
        console.log(res.data)
        dispatch(registersuccess(res.data))
    })

}  



const registerrequest = (payload) => {
    return {
        type: REGISTER_REQUEST,
        payload
    }
}

const registersuccess = (payload) => {
    return {
        type: REGISTER_SUCCESS,
        payload
    }
}
