import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionType"

const logingin = (payload) => (dispatch) => {
    const loginRec = loginrequest()
    dispatch(loginRec)

    const loginSuc = loginsuccess(payload)
    dispatch(loginSuc)

    const loginFail = loginfailure()
    dispatch(loginFail)

}  



const loginrequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

const loginsuccess = () => {
    return {
        type: LOGIN_SUCCESS,
    }
}

const loginfailure = () => {
    return {
        type: LOGIN_FAILURE,
    }
}

export {logingin}