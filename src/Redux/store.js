import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import loginreducer from "./Login/loginreducer"
import regireducer from  "./Register/regireducer"
import {RecruiterDashReducer} from "./RecruiterDash/RecruiterDasReducer"
import {RecLoginReducer} from "./RecLogin/RecLoginReducer"

const rootreducer = combineReducers({
    regi: regireducer,
    RecruiterDash: RecruiterDashReducer,
    logi: loginreducer,
    RecLogin: RecLoginReducer,
})


const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))


    console.log(store.getState())

export default store;