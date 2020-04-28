import React from 'react';
import './App.scss';
import {Home} from "./components/Page/Home/Home";
import {Router} from "@reach/router";
import {Profile} from "./components/Page/Profile/Profile";
import 'antd/dist/antd.css';
import {Login} from "./components/Page/Login/Login";
import enableRequestInterceptor from "./shared/interceptors/requestInterceptor";

const App: React.FunctionComponent = () => {

    enableRequestInterceptor();

    return (
        <div className="App">
            <Router>
                <Home path="/"/>
                <Profile path="/profile"/>
                <Login path="/login"/>
            </Router>
        </div>
    );
}

export default App;
