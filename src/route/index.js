import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import Home from "../pages/home";
import Tab from "../pages/tab";

class Routes extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <NavLink to={{ pathname: "/tab" }}>Tab</NavLink>

                <Route path="/" exact component={Home} />
                <Route path="/tab" component={Tab} />
            </div>
        );
    }
}

export default Routes;
