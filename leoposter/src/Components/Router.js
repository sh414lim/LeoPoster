import React from "react";
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from "../Pages/home";
import Login from "../Pages/login/loginUI";
import Signup from "../Pages/singup";
import Header from "./header";

export default ()=>{
    return(
        <>
        <Router>
        <Header/>
        <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/login" component={Login}/>
        <Route path ="/signup" component={Signup}/>
        <Redirect from="*" to="/"/>
        </Switch>
        </Router>
        </>
    )
}