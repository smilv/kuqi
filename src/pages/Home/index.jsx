import React, { Component } from "react";
import styles from "./css/index.scss";

import axios from "../../axios";

axios.userInfo({ id: 2 }, { sex: 1 }).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(error);
    }
);

class Home extends Component {
    render() {
        return <div className={styles.a}>home</div>;
    }
}

export default Home;
