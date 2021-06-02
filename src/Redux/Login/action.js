import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actiontype"
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
        //console.log(res.data.length)
        if(res.data.length === 0)
        {
            dispatch(loginfailure(res.data))
        }
        else
        {
            const payload = res.data[0]
            dispatch(loginsuccess(payload))
        }
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

const loginfailure = (payload) => {
    return {
        type: LOGIN_FAILURE,
        payload
    }
}
