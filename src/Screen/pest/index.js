import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../pest/style.css";
import avatar from "../pest/avatar.jpg";
import {
    BsListUl,
    BsFillHouseDoorFill,
    BsFillPencilFill,
    BsXLg,
} from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "reactstrap";

function Pest() {
    return (
        <div className="App">
            <container-fluid>
                <Row>
                    <Col
                        xs="2"
                        className="border border-secondary menu ps-4 pt-2 "
                    >
                        {/* xs="12" sm="8" md="7" lg="6" xl="4" xxl="3" */}
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
                                <div className="border border-secondary rounded mt-3  py-3">
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
                                            <p className="mb-3">
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
                                <div className="border border-secondary rounded">
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
                                        <button>Lưu đề</button>
                                        <button className=" ms-5">
                                            Gửi admin review
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </container-fluid>
        </div>
    );
}

export default Pest;
