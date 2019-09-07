import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import List from "../pages/List";
import Form from "../pages/Form";

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