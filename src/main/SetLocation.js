import React, { useState } from "react";
import { Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SearchLocationIcon from "../Icon/SearchLocationIcon";

const SetLocation = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState(
        "2900 Ritter Street, Huntsville, AL 35802"
    );

    return (
        <Row className="min-vh-100 g-0">
            <Col lg={6} className="d-none d-lg-flex login-image-section">
                <div className="login-image-overlay">
                </div>
            </Col>

            <Col
                md={6}
                className="d-flex align-items-center justify-content-center"
            >
                <div className="text-start login-form-wrapper">

                    <div className="text-start">
                        <img
                            src="/assets/Images/Tradie_Logo.png"
                            alt="logo"
                            className="login-logo"
                        />
                    </div>

                    <h4 className="fw-semibold mb-4">Set Your Location</h4>
                    <div className="text-start mb-2 fw-medium">
                        Search Location
                    </div>
                    <InputGroup className="mb-4">
                        <InputGroup.Text className="border-0">
                            <SearchLocationIcon />
                        </InputGroup.Text>

                        <Form.Control
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={{
                                height: 52,
                                borderRadius: "0 12px 12px 0",
                            }}
                        />
                    </InputGroup>
                    <Button
                        className="w-100 py-3 fw-semibold"
                        style={{
                            background: "#E6B437",
                            border: "none",
                            borderRadius: 30,
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </Col>
        </Row>
    );
};

export default SetLocation;
