import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Pest from "./Screen/pest";
import Login from "./Screen/Login";
import ForgotPassword from "./Screen/ForgotPassword";
function App() {
    return (
        <div className="App">
            {/* <Login /> */}
            <ForgotPassword />
            {/* <Pest /> */}
        </div>
    );
}

export default App;
