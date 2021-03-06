import React, { useContext } from "react";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { AuthContext } from "../auth/AuthContext";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export const AppRouter = () => {

  const {user} = useContext(AuthContext);
  console.log(user); 

    return (
            <Router>
              <div>
                <Switch>
                  <Route exact path="/login" component={ LoginScreen } />
                  <PrivateRoute
                    path="/" 
                    component={ DashboardRoutes }
                    isAuthenticated={ user.logged }
                  />
                </Switch>
              </div>
            </Router>
    )
}
