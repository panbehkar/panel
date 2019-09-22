import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "../components/dashboard";
import Login from "../components/login/login";
import NotFound from '../components/notFound';

import Home from "../components/home/home";
import List from "../components/list/list";
import Form from "../components/form/form";

export const MainRoutes = () => {
    return (
        <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect from="/" exact to="/dashboard" />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export const ContentRoutes = () => {
    return (
        <Switch>
            <Route exact path="/dashboard" component={Home} />
            <Route path="/dashboard/list" component={List} />
            <Route path="/dashboard/form" component={Form} />
        </Switch>
    );
};