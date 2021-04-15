import React from "react"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { compose } from "redux"
import thunk from "redux-thunk"
import regireducer from  "./Register/regireducer"
import {RecruiterDashReducer} from "./RecruiterDash/RecruiterDasReducer"

const rootreducer = combineReducers({
    regi: regireducer,
    auth: "",
    RecruiterDash: RecruiterDashReducer
})


const store = createStore(rootreducer, 
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    ))


    console.log(store.getState())

export default store;