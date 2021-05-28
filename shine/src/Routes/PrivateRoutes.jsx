import React from 'react'
import {Redirect, Route} from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({
    children,
    path,
    redirectPath = "/recruiter/login",
    exact = false,
    push = false
}) => {

    const recAuth = useSelector(state => state.RecLogin.recAuth)

    return recAuth ? (
        <Route path={path} exact={exact}>
            {children}
        </Route>
    ):
    <Redirect to={redirectPath} push={push} />
}

export {PrivateRoute}