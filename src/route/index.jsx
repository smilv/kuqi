import React, { Component } from "react";
import { Route } from "react-router-dom";

import Home from "../pages/Home";
import Tab from "../pages/Tab";

class Routes extends Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/tab" component={Tab} />
            </div>
        );
    }
}

export default Routes;
