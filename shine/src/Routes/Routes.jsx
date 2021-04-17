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

import LoginFail from "../Components/Popouts/LoginFail";







function Routes()
{
   const isAuth = useSelector((state) => state.logi.isauth)
   return(
      <div>
         {isAuth ? <AfterLoginNav /> : <NavBar />}
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
            <Route path="/jobdescription" exact>
               <JobSearch/>
            </Route>

            <Route path="/jobdescription/jobsearch/:location" >
               <JobDescriptionSidebar/>
            </Route>
            <Route path="/advancesearch"  >
               <AdvancedComponent/>
            </Route>
            <Route path="/jobpost">
               <JobPost/>
            </Route>

            <Route path="/recruiter/dashboard" exact>
               <RecruiterDashboard />
            </Route>

            <Route path="/modal">
               <TransitionsModal />
               </Route>

            <Route path="/loginfail">
               <LoginFail/>

               </Route>
            
            
            <Route>
               <PageNotFound/>
            </Route>
         </Switch>
      </div>
   )

}

export default Routes;