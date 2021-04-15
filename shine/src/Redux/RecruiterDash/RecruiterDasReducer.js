import {
    RECRUITER_DASH_REQUEST, 
    RECRUITER_DASH_SUCCESS, 
    RECRUITER_DASH_FAILURE,
    DASHBOARD_CANDIDATE_REQUEST,
    DASHBOARD_CANDIDATE_SUCCESS,
    DASHBOARD_CANDIDATE_FAILURE
} from "./actionType"

const initState = {
    data: [],
    CandiData: [],
    isLoading: false,
    isError: false, 
}

export const RecruiterDashReducer = (state=initState, action) => {
    switch(action.type){
        case RECRUITER_DASH_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false, 
            }
        }

        case RECRUITER_DASH_SUCCESS:{
            return{
                ...state,
                data: action.payload,
                isLoading: false,
            }
        }

        case RECRUITER_DASH_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true, 
            }
        }

        case DASHBOARD_CANDIDATE_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false, 
            }
        }

        case DASHBOARD_CANDIDATE_SUCCESS:{
            return{
                ...state,
                CandiData: action.payload,
                isLoading: false,
            }
        }

        case DASHBOARD_CANDIDATE_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true, 
            }
        }

        default: return state
    }
}