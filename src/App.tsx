import React from 'react';
import './App.scss';
import {Home} from "./components/Page/Home/Home";
import {Router} from "@reach/router";
import {Contact} from "./components/Page/Contact/Contact";
import {Shop} from "./components/Page/Shop/Shop";
import {Login} from "./components/Page/Login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Home path="/"/>
                <Contact path="/contact"/>
                <Shop path="/shop"/>
                <Login path="/login"/>
            </Router>
        </div>
    );
}

export default App;
