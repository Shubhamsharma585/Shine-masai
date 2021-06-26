import {  REC_LOGIN_SUCCESS, REC_LOGIN_FAILURE } from "./actionType"
import axios from "axios"

const recauth = (email, pass) => (dispatch) =>{
    console.log(email, pass)
    axios.get(`https://json-heroku-shubham.herokuapp.com/rec_login?email=${email}&password=${pass}`)
    .then(resp => {
        if(resp.data.length === 0){
            alert("Invalid Email or Password, Pleasde try again")
            dispatch(loginfailure())
        }
        else{
            dispatch(loginsuccess())
        }
    })
}


// const logingin = (payload) => (dispatch) => {
//     const loginRec = loginrequest()
//     dispatch(loginRec)

//     const loginSuc = loginsuccess(payload)
//     dispatch(loginSuc)

//     const loginFail = loginfailure()
//     dispatch(loginFail)

// }  



const loginsuccess = () => {
    return {
        type: REC_LOGIN_SUCCESS,
    }
}

const loginfailure = () => {
    return {
        type: REC_LOGIN_FAILURE,
    }
}

export {recauth}