
import { Card, Row, Col, Image, Form, Button, } from "react-bootstrap";
import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import AddUserIcon from "../../Icon/AddUserIcon";
import BackArrowIcon from "../../Icon/BackArrowIcon";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {

    const navigate = useNavigate();
    const contractorData = {
        profile_url: "https://i.pravatar.cc/300?img=12",
        name: "Autumn Phillips",
        email: "autumn@phillips.com",
        address: { address: "1341 Poplar Street, Chicago, IL 60606" },
        mobile_country_code: "+91",
        mobile_number: "8989786510",
        services: [
            { service_name: "Edit Profile", icon: <AddUserIcon /> },
        ],
    };



    return (
        <div className="d-flex min-vh-100">
            <div className="flex-grow-1 overflow-auto">
                <div className="right-side-color p-2">
                    <div className="p-4">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <h4 className="fw-semibold mb-4 text-start"><span onClick={() => navigate("/myprofile")}><BackArrowIcon /></span> Edit Profile</h4>
                        </div>
                        <Row>
                            <Col lg={4}>
                                <Card className="border-0 rounded-4 p-3 ">
                                    <div className="d-flex flex-column gap-3 mb-3 align-items-center">
                                        <Image
                                            src={contractorData.profile_url}
                                            width={150}
                                            height={150}
                                            className="rounded-5"
                                            alt="Contractor"
                                        />
                                        <div className="text-center d-flex flex-column gap-1">
                                            <h4 className="fw-bold mb-1">{contractorData.name}</h4>
                                            <strong className="mb-1 text-muted">{contractorData.email}</strong>
                                            <h6 className="mb-1 text-muted">{contractorData.address.address}</h6>
                                            <p className="mb-1 text-muted">{contractorData.mobile_country_code}-{contractorData.mobile_number}</p>
                                        </div>
                                    </div>
                                    <Row className="g-2 mb-2">
                                        {contractorData.services.map((service) => (
                                            <Col sm={12} key={service.service_name}>
                                                <Card className="border-1 rounded-4 p-3 text-center">
                                                    <div className="d-flex align-items-center gap-2 justify-content-center">
                                                        {service.icon}
                                                        <span>{service.service_name}</span>
                                                    </div>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card>
                            </Col>

                            <Col lg={8}>
                                <Card className="border-0 rounded-4 p-4 text-start form-wrapper">
                                    <Form>
                                        <Row className="g-4">
                                            {/* Username */}
                                            <Col md={6}>
                                                <Form.Label className="text-muted text-start small">
                                                    Username
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="Duane Dean"
                                                    readOnly
                                                    className="form-input"
                                                />
                                            </Col>

                                            {/* Email */}
                                            <Col md={6}>
                                                <Form.Label className="text-muted small">
                                                    Email Address
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    value="TradieCustomer@gmail.com"
                                                    readOnly
                                                    className="form-input"
                                                />
                                            </Col>

                                            {/* Address */}
                                            <Col md={6}>
                                                <Form.Label className="text-muted small">
                                                    Address
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="Ritter Street, Huntsville"
                                                    className="form-input"
                                                />
                                            </Col>

                                            {/* State */}
                                            <Col md={6}>
                                                <Form.Label className="text-muted small">
                                                    State
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="Huntsville"
                                                    className="form-input"
                                                />
                                            </Col>

                                            {/* City */}
                                            <Col md={6}>
                                                <Form.Label className="text-muted small">
                                                    City
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="AL"
                                                    className="form-input"
                                                />
                                            </Col>

                                            {/* Zip Code */}
                                            <Col md={6}>
                                                <Form.Label className="text-muted small">
                                                    Zip Code
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    value="35802"
                                                    className="form-input"
                                                />
                                            </Col>
                                        </Row>

                                        {/* Save Button */}
                                        <div className="d-grid mt-4">
                                            <Button className="save-btn rounded-5" size="lg">
                                                Save
                                            </Button>
                                        </div>
                                    </Form>
                                </Card>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default EditProfile;
