import { REC_LOGIN_REQUEST, REC_LOGIN_SUCCESS, REC_LOGIN_FAILURE } from "./actionType"

const initState = {
    recAuth: false,
    isLoading: false,
    isError: false,
}

export const RecLoginReducer = (state=initState, action) => {
    switch(action.type){
        case REC_LOGIN_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case REC_LOGIN_SUCCESS:{
            return{
                ...state,
                recAuth: true,
                isLoading: false,
            }
        }
        case REC_LOGIN_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        default: return state
    }
}