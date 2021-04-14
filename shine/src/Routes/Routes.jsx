import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "../Components/LogIn/Login"
import Register from "../Components/Register/Register";




function Routes()
{






    return(
        <div>
      
     <Switch>
            <Route path="/myshine/login" exact>
               <Login/>
            </Route>

            <Route path="/registration/parser/" exact>
               <Register/>
            </Route>

       </Switch>


        </div>
    )
}

export default Routes;