import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../Containers/Dashboard";
import Login  from "../Containers/Login";
import SignUp from "../Containers/SignUp";
import MainLayout from "./MainLayout";
import PublicLayout from "./PublicLayout";

export default class Routers extends Component {
  render() {
    return (
      <Switch>
        <MainLayout 
          exact
          path="/dashboard"
          render={matchprops => (
           <Dashboard {...matchprops} />
         )}
        />
        <PublicLayout 
          exact
          path="/login"
          render={matchprops => (
           <Login {...matchprops} />
         )}
        />
        <PublicLayout 
          exact
          path="/signup"
          render={matchprops => (
           <SignUp {...matchprops} />
         )}
        />
      </Switch>
    );
  }
}
