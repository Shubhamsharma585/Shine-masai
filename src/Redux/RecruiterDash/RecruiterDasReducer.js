import {
    RECRUITER_DASH_REQUEST, 
    RECRUITER_DASH_SUCCESS, 
    RECRUITER_DASH_FAILURE,
    DASHBOARD_CANDIDATE_REQUEST,
    DASHBOARD_CANDIDATE_SUCCESS,
    DASHBOARD_CANDIDATE_FAILURE,
} from "./actionType"

const initState = {
    data: [],
    CandiData: {
        userName: "",
        call: false,
        interview_status: "Not_Submitted",
        gender: "",
        dob: "",
        email: "",
        phone: "",
        applied_company: "",
        applied_position: "",
        location: "",
        experience: "",
        qualification: "",
        skills: [],
        comments: [],
        id: ""
    },
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
                CandiData: {
                    userName: action.payload.name,
                    call: action.payload.call,
                    interview_status: action.payload.interview_status,
                    gender: action.payload.gender,
                    dob: action.payload.dob,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    applied_company: action.payload.applied_company,
                    applied_position: action.payload.applied_position,
                    location: action.payload.location,
                    experience: action.payload.experience,
                    qualification: action.payload.qualification,
                    skills: action.payload.skills,
                    comments: action.payload.comments,
                    id: action.payload.id
                },
                // remark: action.payload.comments,
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