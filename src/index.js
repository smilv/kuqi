import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

//只在开发环境引入Mock
process.env.NODE_ENV === "development" && require("./mock");

ReactDOM.render(<App />, document.getElementById("root"));
