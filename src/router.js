import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import CodeCheckead from "./pages/LoginForgot/CodeCheckead";
import LoginForgot from "./pages/LoginForgot/EmailS";
import ResertPassw from "./pages/LoginForgot/ResertPassw";



function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot_email" component={LoginForgot}/>
            <Route path="/forgot_code" component={CodeCheckead}/>
            <Route path="/resert-pass" component={ResertPassw}/>
        </Switch>
        </BrowserRouter>
    );
}
export default Routes