import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType"

const initState = {
    recAuth: false,
    isLoading: false,
    isError: false,
}

export const RecLoginReducer = (state=initState, action) => {
    switch(action.type){
        case LOGIN_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                recAuth: true,
                isLoading: false,
            }
        }
        case LOGIN_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        default: return state
    }
}