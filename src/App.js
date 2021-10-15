import React, { useState } from "react";

import Pest from "./Screen/Pest";
import Login from "./Screen/Login";
import ForgotPassword from "./Screen/ForgotPassword";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
    return (
        // <div className="App">
        //     {/* <Login /> */}
        //     {/* <ForgotPassword /> */}
        //     {/* <Pest /> */}
        // </div>
        <Router>
            <Route path="/Pest" component={Pest} />
            <Route path="/Login" component={Login} />
            <Route path="/ForgotPassword" component={ForgotPassword} />
        </Router>
    );
}

export default App;
