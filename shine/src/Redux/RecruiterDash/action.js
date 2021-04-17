import {
    RECRUITER_DASH_REQUEST, 
    RECRUITER_DASH_SUCCESS, 
    RECRUITER_DASH_FAILURE,
    DASHBOARD_CANDIDATE_REQUEST,
    DASHBOARD_CANDIDATE_SUCCESS,
    DASHBOARD_CANDIDATE_FAILURE,
} from "./actionType"
import axios from "axios"

const getUserData = () => (dispatch) => {
    const dashRequest = recruiter_dash_request()
    dispatch(dashRequest)

    return axios.get("https://json-heroku-shubham.herokuapp.com/applications")
    .then(resp => {
        const dashSuccess = recruiter_dash_success(resp.data)
        dispatch(dashSuccess)
    })
    .catch(err => {
        const dashFailure = recruiter_dash_failure()
        dispatch(dashFailure)
    })
}

const singleUserData = (id) => (dispatch) => {
    const singleRequest = dashboard_candidate_request()
    dispatch(singleRequest)
    return axios.get(`https://json-heroku-shubham.herokuapp.com/applications/${id}`)
    .then(resp => {
        const singleSuccess = dashboard_candidate_success(resp.data)
        dispatch(singleSuccess)
    })
    .catch(err => {
        const singleFailure = dashboard_candidate_failure()
        dispatch(singleFailure)
    })
}

const recruiter_dash_request = () => {
    return{
        type: RECRUITER_DASH_REQUEST
    }
}

const recruiter_dash_success = (payload) => {
    return{
        type: RECRUITER_DASH_SUCCESS,
        payload
    }
}

const recruiter_dash_failure = () => {
    return{
        type: RECRUITER_DASH_FAILURE
    }
}

const dashboard_candidate_request = () => {
    return{
        type: DASHBOARD_CANDIDATE_REQUEST
    }
}

const dashboard_candidate_success = (payload) => {
    return{
        type: DASHBOARD_CANDIDATE_SUCCESS,
        payload
    }
}

const dashboard_candidate_failure = () => {
    return{
        type: DASHBOARD_CANDIDATE_FAILURE
    }
}

export {getUserData, singleUserData}