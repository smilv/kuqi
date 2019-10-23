import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import AsyncComponent from "../components/AsyncComponent";

const Home = AsyncComponent(() => import("../pages/home"));

class Routes extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                <Route path="/" exact component={Home} />
            </div>
        );
    }
}

export default Routes;
