import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../components/home/home";
import List from "../components/list/list";
import Form from "../components/form/form";

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/form" component={Form} />
            </Switch>
        );
    }
}

export default Routes;