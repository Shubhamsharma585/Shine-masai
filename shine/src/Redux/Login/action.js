import { LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontype"
import Axios from "axios"





export const logingin = (payload) => dispatch => {
    console.log("loging")
    console.log(payload)
   
    dispatch(loginrequest())
    Axios.get("https://json-heroku-shubham.herokuapp.com/applicant",{
       params:{
         email: payload
       }
   
    }

    )
    .then((res) => {
        console.log(res.data)
        dispatch(loginsuccess(res.data))
    })

}  



const loginrequest = (payload) => {
    return {
        type: LOGIN_REQUEST,
        payload
    }
}

const loginsuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}
