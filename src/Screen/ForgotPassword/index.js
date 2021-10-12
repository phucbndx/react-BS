import React, { useState } from "react";
import logo from "./logo.jpg";
import { Container, Row, Col } from "reactstrap";
import "./style.css";

let NhapUsername = ({ onBtnClick }) => {
    const [userName, setuserName] = useState("");
    return (
        <div>
            <div className="mx-2  mt-5">
                <p className="fw-bold fs-5">Quên mật khẩu</p>
                <p className="mb-0"> Nhập MSV, username hoặc email để tìm <br /> tài khoản của bạn</p>
            </div>
            <div className="user d-flex mt-4 py-2">
                <input className="ms-2" type="text" placeholder="MSV hoặc UserName" onChange={e => setuserName(e.target.value)} />
            </div>
            <div className="d-flex justify-content-end mx-2 mt-5">
                <button className="cancel me-5 px-3 py-1">Huỷ</button>
                <button className="continue px-4 py-1"
                    onClick={_ => onBtnClick(true)}
                >
                    Tiếp tục
                </button>
            </div>
        </div>
    );
};

let ConfirmMail = ({ onBtnClick }) => {
    const [userName, setuserName] = useState("");
    return (
        <div>
            <div className="mx-2 mt-5">
                <p className="fw-bold fs-5 ">Quên mật khẩu</p>
                <p>
                    My hubt sẽ gửi cho bạn 1 email reset <br />
                    mật khẩu về email này của bạn
                </p>
            </div>
            <div className="user mail d-flex mt-4 py-2">
                <input className="ms-2 pe-5" disabled onChange={e => setuserName(e.target.value)} />
            </div>
            <div className="d-flex justify-content-end mx-2 mt-5">
                <button className="cancel me-5 px-3 py-1"
                    onClick={_ => onBtnClick(false)}
                >
                    Huỷ
                </button>
                <button className="continue px-4 py-1" onClick={_ => alert(" đã gửi mail ")}>Xác nhận</button>
            </div>
        </div>
    );
};

let ForgotPassword = () => {
    const [isconfirm, setisconfirm] = useState(false);
    return (
        <div className="ForgotPassword">
            <Container className="d-flex flex-column justify-content-center h-100">
                <Row>
                    <Col></Col>
                    <Col xs="12" sm="8" md="7" lg="6" xl="4" xxl="3">
                        <div className="d-flex justify-content-between mt-1 mb-4 fw-bold fs-5">
                            <p>My HUBT</p>
                            <p>Quên Mật Khẩu</p>
                        </div>
                        <div className="logo d-flex justify-content-center ">
                            <img src={logo} className="App-logo mt-5 mb-3" alt="logo" />
                        </div>
                        <div>
                            {isconfirm ? <ConfirmMail onBtnClick={_ => setisconfirm(_)} /> : <NhapUsername onBtnClick={_ => setisconfirm(_)} />}
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default ForgotPassword;
