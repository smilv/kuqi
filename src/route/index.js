import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import AsyncComponent from "../components/AsyncComponent";

const Example = AsyncComponent(() => import("../views/example"));

class Routes extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Example</NavLink>
                <Route path="/" exact component={Example} />
            </div>
        );
    }
}

export default Routes;
