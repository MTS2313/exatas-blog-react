import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom"

import Home from "./pages/Home";
import Login from "./pages/Login";
import CodeCheckead from "./pages/LoginForgot/CodeCheckead";
import LoginForgot from "./pages/LoginForgot/EmailS";
import ResertPassw from "./pages/LoginForgot/ResertPassw";
import Blog from "./pages/Blog"
import Post from "./pages/Post";
import RegisterMain from "./pages/Register";


function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot_email" component={LoginForgot}/>
            <Route path="/forgot_code" component={CodeCheckead}/>
            <Route path="/resert-pass" component={ResertPassw}/>
            <Route path="/blog" component={Blog}/>
            <Route exact path="/post" component={Post}/>
            <Route path="/register" component={RegisterMain} />
        </Switch>
        </BrowserRouter>
    );
}
export default Routes