import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import MailIcon from "../Icon/MailIcon";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        <Col lg={6} className="d-none d-lg-flex login-image-section">
          <div className="login-image-overlay">
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="forgot-card text-center login-form-wrapper ">
            <img
              src="/assets/Images/Tradie_Logo.png"
              alt="logo"
              className="login-logo mb-3"
            />

            <h4 className="fw-bold mb-4">Forgot Password ?</h4>

            <Form className="text-center">
              <Form.Label className="text-start w-100">
                Email Address
              </Form.Label>

              <InputGroup className="mb-4">
                <InputGroup.Text className="Input-Group-Icon">
                  <MailIcon />
                </InputGroup.Text>

                <Form.Control
                  type="email"
                  placeholder="TradieCustomer@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="custom-input"
                />
              </InputGroup>

             <Button className="login-btn w-100">Send OTP</Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
