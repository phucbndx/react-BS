import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "./style.css";
import avatar from "../Pest/avatar.jpg";
import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import {
    BsListUl,
    BsFillHouseDoorFill,
    BsFillPencilFill,
    BsXLg,
} from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "reactstrap";

function Pest(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="App">
            <container-fluid>
                <Row className="mx-1">
                    <Col
                        lg="2"
                        xxl="4"
                        className="nav-left col-lg-2 border border-secondary "
                    >
                        <div className="">
                            <Navbar color="faded" light>
                                <NavbarBrand href="#" className="p-auto">
                                    <span className="fw-bold "> MY HUBT</span>
                                </NavbarBrand>
                                <NavbarToggler
                                    onClick={toggleNavbar}
                                    className="mr-2"
                                />
                                <Collapse isOpen={!collapsed} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                            <NavLink href="#">
                                                <span className="fw-bold ms-2">
                                                    {/* <BsFillHouseDoorFill className=" mb-1 me-2 fs-5 fw-bold" /> */}
                                                    Trang chủ
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink href="#">
                                                <span className="fw-bold ms-2">
                                                    {/* <BsListUl className=" mb-1 me-2 fs-5 fw-bold" /> */}
                                                    Danh sách
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </Collapse>
                            </Navbar>
                        </div>
                    </Col>

                    <Col lg="10" xxl="8" className=" border border-secondary">
                        <div className=" border border-secondary bg-success  d-flex ">
                            <div className="col ">
                                <nav aria-label="breadcrumb ">
                                    <ol className="breadcrumb text-dark d-flex mt-3 ms-3">
                                        <li className="breadcrumb-item text-light ">
                                            <a
                                                className="text-decoration-none"
                                                href="#"
                                            >
                                                <span className="text-dark fs-6 ">
                                                    Trang chủ
                                                </span>
                                            </a>
                                        </li>
                                        <li
                                            className="breadcrumb-item fs-6"
                                            aria-current="page"
                                        >
                                            Sửa bài thi
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            <div className=" ">
                                <div className="d-flex justify-content-end my-2 align-items-center">
                                    <span className=" me-3 fs-5 d-none d-sm-block ">
                                        Nguyễn Thành Đạt
                                    </span>
                                    {/* <img class=" avata rounded-pill align-items-center" src="/images/avatar.jpg" alt=""> */}
                                    <img
                                        className="rounded-circle avatar me-2"
                                        src={avatar}
                                    />
                                </div>
                            </div>
                        </div>

                        <Row className=" mt-3">
                            <Col lg="9" className="">
                                <div className="border border-secondary rounded mb-2">
                                    <div className="d-flex">
                                        <div>
                                            <label className="text-nowrap mt-3 ms-2">
                                                Tên bài thi :
                                            </label>
                                        </div>
                                        <div className="m-2 name border border-secondary rounded w-100">
                                            <input
                                                className=" rounded py-1"
                                                type="text"
                                            />
                                        </div>
                                    </div>

                                    <div className="d-flex">
                                        <label className="text-nowrap mt-3 ms-2 me-4">
                                            Mô tả :
                                        </label>
                                        <div className="m-2 w-100">
                                            <textarea className="text  rounded  w-100"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div className="row border border-secondary rounded mt-3 m-0 ">
                                    <div className="col mt-4 mb-2">
                                        <span className="fw-bold">
                                            Câu 1: Khái niệm dữ liệu là gì?
                                        </span>
                                    </div>
                                    <div className="col d-flex justify-content-around">
                                        <div className="mt-4 ">
                                            <button
                                                type="button"
                                                className="btn btn-dark rounded-pill  text-light px-2"
                                            >
                                                <BsFillPencilFill className="me-2 mb-1" />
                                                Sửa
                                            </button>
                                        </div>
                                        <div className="mt-4 ">
                                            <button
                                                type="button"
                                                className="btn btn-dark rounded-pill text-light px-2"
                                            >
                                                <BsXLg className="me-2 mb-1" />
                                                Xoá
                                            </button>
                                        </div>
                                    </div>
                                    <div className="row mt-4 border border-secondary m-0  ">
                                        <span className="mt-5">
                                            <span className="fw-bold">A:</span>{" "}
                                            Dữ liệu là đối tượng mang thông tin.
                                        </span>
                                        <span className="mt-4">
                                            <span className="fw-bold">B:</span>{" "}
                                            là các tín hiệu vật lý như sóng điện
                                            từ, ánh sáng, âm thanh.
                                        </span>
                                        <span className="mt-4">
                                            <span className="fw-bold">C:</span>{" "}
                                            Dữ liệu là đối tượng mang thông tin.
                                        </span>
                                        <span className="mt-5 mb-4">
                                            <span className="fw-bold">D:</span>{" "}
                                            Dữ liệu là đối tượng mang thông tin.
                                        </span>
                                    </div>
                                </div>
                            </Col>

                            <Col lg="3" className="border border-secondary  ">
                                <div className="">
                                    <div className="mt-2">
                                        <span className="rounded-pill mucluc ms-2 px-2 py-1 fw-bold">
                                            Mục lục:
                                        </span>
                                    </div>
                                    <div className="mt-3 mx-1">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    Accordion Item #1
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    Accordion Item #2
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2">
                                                <Accordion.Header>
                                                    Accordion Item #3
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="border border-secondary rounded mt-4">
                            <div>
                                <div>
                                    <label className=" mx-3 mt-3">
                                        Trạng tháo đăng:{" "}
                                    </label>
                                    <select id="" name="">
                                        <option value="">
                                            Không công khai
                                        </option>
                                        <option value="">Công khai</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mt-3 ms-5">
                                <div>
                                    <label className="ms-2 mb-1">
                                        <input type="radio" /> Tự dộng lưu
                                    </label>
                                </div>
                            </div>
                            <div className="my-4 ms-5">
                                <button className="bg-secondary px-3 py-1 rounded">
                                    Lưu đề
                                </button>
                                <button className=" ms-5 bg-secondary px-3 py-1 rounded">
                                    Gửi admin review
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </container-fluid>
            {/* <container-fluid>
                <Row>
                    <Col
                        xs="2"
                        className="border border-secondary menu ps-4 pt-2 d-none d-sm-block"
                    >
                        <div className="fw-bold fs-4">
                            <p>My HUBT</p>
                        </div>
                        <div className="">
                            <div className="d-flex align-items-center mb-3">
                                <BsFillHouseDoorFill size="20" />
                                <span className="ms-2">Trang chủ</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <BsListUl size="20" />
                                <span className="ms-2">Danh Sách</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs="10" className="border border-secondary menu p-0 ">
                        <div className="d-flex justify-content-between border border-secondary align-items-center ">
                            <div>
                                <Breadcrumb className="ms-2">
                                    <BreadcrumbItem className="">
                                        <span className="mt-2">Trang chủ</span>
                                    </BreadcrumbItem>
                                    <BreadcrumbItem active>
                                        Sửa bài thi
                                    </BreadcrumbItem>
                                </Breadcrumb>
                            </div>
                            <div>
                                <div className="d-flex avatar me-3">
                                    <div className="d-flex mt-1 me-3">
                                        <span>Nguyễn Thành Đạt</span>
                                    </div>
                                    <div>
                                        <img
                                            className="rounded-circle"
                                            src={avatar}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Row className=" mt-3">
                            <Col xs="8" className="p-0 ms-3  ">
                                <div className="border border-secondary rounded">
                                    <div className="m-2 d-flex  justify-content-center">
                                        <label>Tên bài thi: </label>
                                        <input
                                            className=" ms-3 name rounded p-0"
                                            type="text"
                                        />
                                    </div>

                                    <div className="my-2 d-flex justify-content-center">
                                        <label>Mô tả</label>
                                        <textarea className="text ms-5 rounded"></textarea>
                                    </div>
                                </div>
                                <div className="border border-secondary rounded mt-3  py-5">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="fw-bold ms-3">
                                                Câu 1: khái niệm dữ liệu là gì ?
                                            </span>
                                        </div>
                                        <div className="d-flex  change border rounded ms-5 ">
                                            <button>
                                                <BsFillPencilFill />
                                                <span className="ms-2 fw-bold">
                                                    {" "}
                                                    Sửa
                                                </span>
                                            </button>
                                        </div>
                                        <div className="d-flex change border rounded me-2">
                                            <button>
                                                <BsXLg />
                                                <span className="ms-2 fw-bold">
                                                    Xoá
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border border-secondary rounded mt-5 mx-2">
                                        <div className=" ms-3">
                                            <p className=" mt-3">
                                                A. Dữ liệu là đối tượng mang
                                                thông tin
                                            </p>
                                            <p>
                                                B. Dữ liệu là đối tượng mang
                                                thông tin
                                            </p>
                                            <p>
                                                C. Dữ liệu là đối tượng mang
                                                thông tin
                                            </p>
                                            <p className="mb-5">
                                                D. Dữ liệu là đối tượng mang
                                                thông tin
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col
                                xs="3"
                                className="p-0 ms-3 border border-secondary"
                            >
                                <div>
                                    <div className="mt-2">
                                        <span className="rounded-pill mucluc ms-2 px-2 py-1 fw-bold">
                                            Mục lục:
                                        </span>
                                    </div>
                                    <div className="mt-3 mx-1">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>
                                                    Accordion Item #1
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>
                                                    Accordion Item #2
                                                </Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    laborum.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="border border-secondary rounded mt-5">
                                    <div>
                                        <div>
                                            <label className=" mx-3 mt-3">
                                                Trạng tháo đăng:{" "}
                                            </label>
                                            <select id="" name="">
                                                <option value="">
                                                    Không công khai
                                                </option>
                                                <option value="">
                                                    Công khai
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-3 ms-5">
                                        <div>
                                            <label className="ms-2 mb-1">
                                                <input type="radio" /> Tự dộng
                                                lưu
                                            </label>
                                        </div>
                                    </div>
                                    <div className="my-4 ms-5">
                                        <button className="bg-secondary px-3 py-1 rounded">
                                            Lưu đề
                                        </button>
                                        <button className=" ms-5 bg-secondary px-3 py-1 rounded">
                                            Gửi admin review
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </container-fluid> */}
        </div>
    );
}

export default Pest;
