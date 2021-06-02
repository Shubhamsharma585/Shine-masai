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
import { AfterLoginNav } from "../Components/Navbar/AfterLoginNav";
import { useSelector } from "react-redux";
import AdvancedComponent from "../Components/Home/AdvancedComponent";
import PageNotFound from "../Components/Home/PageNotFound";
import { TransitionsModal } from "../Components/Modal/Modal";
import RecruiterLogin from "../Components/RecruiterLogin/RecruiterLogin"
import LoginFail from "../Components/Popouts/LoginFail";
import {PrivateRoute} from "./PrivateRoutes"

function Routes()
{
   const isAuth = useSelector((state) => state.logi.isauth)

   return(
      <div>
         {isAuth? <AfterLoginNav /> : <NavBar />}
         {console.log(isAuth)}
         <Switch>
            <Route path="/" exact>
               <Home/>
            </Route>
            <Route path="/myshine/login" >
               <Login/>
            </Route>
            <Route path="/jobalert" >
               <JobAlert />
            </Route>
            <Route path="/registration" >
               <Register/>
            </Route>
            <Route path="/jobdescription" exact>
               <JobSearch/>
            </Route>
            <Route path="/jobdescription/jobsearch/:location" >
               <JobDescriptionSidebar/>
            </Route>
            <Route path="/advancesearch"  >
               <AdvancedComponent/>
            </Route>
            <PrivateRoute path="/jobpost">
               <JobPost/>
            </PrivateRoute>
            <PrivateRoute path="/recruiter/dashboard" exact>
               <RecruiterDashboard />
            </PrivateRoute>
            <Route path="/modal">
               <TransitionsModal />
            </Route>
            <Route path="/loginfail">
               <LoginFail/>
            </Route> 
            <Route path="/recruiter/login" exact>
              <RecruiterLogin/>
            </Route>  
            <Route>
               <PageNotFound/>
            </Route>
         </Switch>
      </div>
   )

}

export default Routes;