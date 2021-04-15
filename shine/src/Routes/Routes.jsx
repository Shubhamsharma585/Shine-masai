import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../Components/LogIn/Login"
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home"
<<<<<<< HEAD
import NavBar from "../Components/Navbar/NavBar";
import { JobDescription } from "../Components/JobDescription/JobDescription";

=======
import { JobDescription } from "../Components/JobDescription/JobDescription";
import NavBar from "../Components/Navbar/NavBar";
import JobAlert from "../Components/CreateJobAlert/JobAlert";
>>>>>>> 52ab4eb1f6ee4e4865e9c92233ecf30138ffb846




function Routes()
{
<<<<<<< HEAD
   return(
      <div>
         <NavBar />
         <Switch>
=======





 
    return(
        <div>
      <NavBar />
     <Switch>
>>>>>>> 52ab4eb1f6ee4e4865e9c92233ecf30138ffb846
            <Route path="/" exact>
               <Home/>
            </Route>
            <Route path="/myshine/login" exact>
               <Login/>
            </Route>
<<<<<<< HEAD
=======
            <Route path="/jobalert" exact>
               <JobAlert />
            </Route>
>>>>>>> 52ab4eb1f6ee4e4865e9c92233ecf30138ffb846
            <Route path="/registration/parser/" exact>
               <Register/>
            </Route>
            <Route path="/jobdescription" exact>
               <JobDescription />
            </Route>
<<<<<<< HEAD
         </Switch>
      </div>
   )
=======
       </Switch>


        </div>
    )
>>>>>>> 52ab4eb1f6ee4e4865e9c92233ecf30138ffb846
}

export default Routes;