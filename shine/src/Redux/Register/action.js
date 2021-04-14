import { REGISTER_REQUEST, REGISTER_SUCCESS } from "./actiontype"
import Axios from "axios"









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
