import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../Components/LogIn/Login"
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home"

import NavBar from "../Components/Navbar/NavBar";
import JobAlert from "../Components/CreateJobAlert/JobAlert";
import { RecruiterDashboard } from "../Components/RecruiterDash/RecruiterDashboard";

import JobDescriptionSidebar from "../Components/JobDescription/JobDescriptionSidebar";
import JobSearch from "../Components/JobSearch/JobSearch";


import JobPost from "../Components/JobPost/JobPost";





function Routes()
{
   return(
      <div>
         <NavBar />
         <Switch>
            <Route path="/" exact>
               <Home/>
            </Route>
            <Route path="/myshine/login" exact>
               <Login/>
            </Route>
            <Route path="/jobalert" exact>
               <JobAlert />
            </Route>
            <Route path="/registration" exact>
               <Register/>
            </Route>
            <Route path="/jobdiscription" exact>
               <JobSearch/>
            </Route>
               <Route path="/recruiter/dashboard" exact>
               <RecruiterDashboard />
            </Route>
               <Route path="/jobdiscription/:location" >
               <JobDescriptionSidebar/>
            </Route>
            <Route path="/jobpost">
               <JobPost/>
            </Route>
         </Switch>
      </div>

}

export default Routes;