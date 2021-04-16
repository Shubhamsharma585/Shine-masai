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
            <Route path="/jobdiscription" exact>
               <JobSearch/>
            </Route>
            <Route path="/jobdiscription/:location" >
               <JobDescriptionSidebar/>
            </Route>
            <Route path="/jobpost">
               <JobPost/>
            </Route>
            <Route to="/recruiterdashboard">
               <RecruiterDashboard />
            </Route>
         </Switch>
      </div>
   )
}

export default Routes;