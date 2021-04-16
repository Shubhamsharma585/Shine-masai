import {
    RECRUITER_DASH_REQUEST, 
    RECRUITER_DASH_SUCCESS, 
    RECRUITER_DASH_FAILURE,
    DASHBOARD_CANDIDATE_REQUEST,
    DASHBOARD_CANDIDATE_SUCCESS,
    DASHBOARD_CANDIDATE_FAILURE
} from "./actionType"
import axios from "axios"

const getUserData = () => (dispatch) => {
    const dashRequest = recruiter_dash_request()
    dispatch(dashRequest)

    return axios.get("https://fathomless-plains-83957.herokuapp.com/posts")
    .then(resp => {
        // const dashSuccess = recruiter_dash_success(resp.data)
        // console.log(resp.data[0].payload)

        // dispatch(dashSuccess)
    })
    .catch(err => {
        const dashFailure = recruiter_dash_failure()
        dispatch(dashFailure)
    })
}

const singleUserData = (id) => (dispatch) => {
    const singleRequest = dashboard_candidate_request()
    dispatch(singleRequest)
    return axios.get(`https://fathomless-plains-83957.herokuapp.com/posts/${id}`)
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