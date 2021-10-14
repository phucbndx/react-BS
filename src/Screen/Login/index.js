import React, { useState } from "react";
import logo from "./logo.jpg";
import "../Login/style.css";
import {
    BsPersonFill,
    BsFillLockFill,
    BsFillEyeFill,
    BsFillEyeSlashFill,
} from "react-icons/bs";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
let Login = () => {
    const [userName, setuserName] = useState("");
    const [pass, setpass] = useState("");
    const [showpass, setshowpass] = useState(false);
    return (
        <div className="Login">
            <Container className="d-flex flex-column justify-content-center h-100">
                <Row>
                    <Col></Col>
                    <Col xs="12" sm="8" md="7" lg="6" xl="4" xxl="3">
                        <div className="d-flex justify-content-between mt-1 mb-4 fw-bold fs-5">
                            <p>Đăng nhập</p>
                            <p>MY HUBT</p>
                        </div>
                        <div className="logo d-flex justify-content-center ">
                            <img
                                src={logo}
                                className="App-logo mt-3 mb-3"
                                alt="logo"
                            />
                        </div>
                        <div className="user d-flex mt-5 py-2">
                            <BsPersonFill size="20" className="iconUser" />
                            <input
                                className=""
                                type="text"
                                placeholder="Mã sinh viên của bạn"
                                onChange={(e) => {
                                    setuserName(e.target.value);
                                    console.log(e.target.value);
                                }}
                            />
                        </div>
                        <div className="pass user d-flex mt-4 py-2">
                            <BsFillLockFill size="20" className="iconUser" />
                            <input
                                type={showpass ? "text" : "password"}
                                className=""
                                placeholder="Mật khẩu mặc định là myhubt"
                                onChange={(e) => {
                                    setpass(e.target.value);
                                    console.log(e.target.value);
                                }}
                            />
                            <button onClick={(_) => setshowpass((old) => !old)}>
                                {showpass ? (
                                    <BsFillEyeSlashFill size={20} />
                                ) : (
                                    <BsFillEyeFill size={20} />
                                )}
                            </button>
                        </div>

                        <div className="check mx-3 d-flex justify-content-between mt-5">
                            <div className="d-flex align-items-center">
                                <label className=" d-flex align-items-center">
                                    <input type="checkbox" className="me-2 " />
                                    <span className="mb-1"> Lưu mật khẩu</span>
                                </label>
                            </div>

                            <div>
                                <button
                                // onClick={(e) => {
                                //     let a = localStorage.getItem(
                                //         "user",
                                //         userName
                                //     );
                                //     alert(a);
                                // }}
                                >
                                    <Link to="ForgotPassword" className="quen">
                                        Bạn quên mật khẩu
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <div className="login d-flex justify-content-center mt-5 py-2 mx-3">
                            <button
                                className="text-light"
                                onClick={(e) => {
                                    localStorage.setItem("user", userName);
                                }}
                            >
                                <Link to="Pest" className="quen">
                                    {" "}
                                    ĐĂNG NHẬP
                                </Link>
                            </button>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};
export default Login;
