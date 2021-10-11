import ForgotPassword from "./Screen/ForgotPasswod";
import Pest from "./Screen/pest";

import { Container, Row, Col } from "reactstrap";
import React, { useState } from "react";
import Login from "./Screen/Login";
function App() {
    return (
        <div className="App">
            {/* <Login /> */}
            <Pest />
        </div>
    );
}

export default App;
