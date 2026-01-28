import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { InputField } from "../component/InputField";
import MailIcon from "../Icon/MailIcon";
import ShieldIcon from "../Icon/ShieldIcon";
import EyeIcon from "../Icon/EyeIcon";
import EyeSlashIcon from "../Icon/EyeSlashIcon";
import { Checkbox } from "../component/Checkbox";
import PhoneIcon from "../Icon/PhoneIcon";
import AddUserIcon from "../Icon/AddUserIcon";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);
    const [role, setRole] = useState("Customer");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        role: "Customer",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData((p) => ({ ...p, [name]: value }));
    };

    const [inData, setInData] = useState({
        Password: "",
        confirmPassword: "",
    });

    const getPasswordStrength = (password = "") => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score; // 0–4
    };

    return (
        <Container fluid className="login-wrapper">
            <Row className="min-vh-100">
                <Col lg={6} className="d-none d-lg-flex login-image-section">
                    <div className="login-image-overlay">
                        <p className="new-user-text fw-bold">Already have an account?</p>
                        <Button className="signup-btn w-100" onClick={() => navigate("/")}>Log In</Button>
                    </div>
                </Col>
                <Col
                    lg={6}
                    className="d-flex align-items-center justify-content-center"
                >
                    <div className="login-form-wrapper">
                        <div className="text-center">
                            <img
                                src="/assets/Images/Tradie_Logo.png"
                                alt="logo"
                                className="login-logo"
                            />
                            <h2 className="login-title mb-2">SIGNUP</h2>
                        </div>

                        <Form className="text-start d-flex flex-column gap-2">
                            <Form.Label>Role</Form.Label>
                            <InputGroup>
                                <InputGroup.Text className="Input-Group-Icon">
                                    <AddUserIcon />
                                </InputGroup.Text>

                                <Form.Select
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="custom-input rounded"
                                >
                                    <option value="Active">Customer</option>
                                    <option value="Inactive">Contractor</option>
                                </Form.Select>
                            </InputGroup>


                            <InputField
                                FormLabel="Email Address"
                                FormType="email"
                                name="email"
                                FormPlaceHolder="Enter email"
                                value={formData.email}
                                onChange={inputHandler}
                                startIcon={<MailIcon />}
                            />

                            <InputField
                                FormLabel="Contact detail"
                                FormType="text"
                                name="contact"
                                FormPlaceHolder="+91-XXXXXXXXXX"
                                value={formData.contact}
                                onChange={inputHandler}
                                startIcon={<PhoneIcon />}
                            />

                            <InputField
                                FormLabel="Password"
                                FormType={showPassword ? "text" : "password"}
                                name="password"
                                FormPlaceHolder="Enter password"
                                value={formData.password}
                                onChange={inputHandler}
                                startIcon={<ShieldIcon />}
                                endIcon={
                                    showPassword ? (
                                        <EyeIcon onClick={() => setShowPassword(false)} />
                                    ) : (
                                        <EyeSlashIcon onClick={() => setShowPassword(true)} />
                                    )
                                }
                            />
                            <div className="d-flex align-items-center gap-2 mb-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <span
                                        key={i}
                                        className={`flex-fill rounded ${getPasswordStrength(inData.Password) >= i
                                            ? "bg-success"
                                            : "bg-light"
                                            }`}
                                        style={{ height: "4px" }}
                                    />
                                ))}
                                <small className="ms-2 text-muted">Password Strength</small>
                            </div>

                            <InputField
                                FormLabel="Confirm Password"
                                FormType={showCPassword ? "text" : "password"}
                                name="confirmPassword"
                                FormPlaceHolder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={inputHandler}
                                startIcon={<ShieldIcon />}
                                endIcon={
                                    showCPassword ? (
                                        <EyeIcon onClick={() => setShowCPassword(false)} />
                                    ) : (
                                        <EyeSlashIcon onClick={() => setShowCPassword(true)} />
                                    )
                                }
                            />

                            <div className="d-flex align-items-center gap-2 mb-1">
                                {[1, 2, 3, 4].map((i) => (
                                    <span
                                        key={i}
                                        className={`flex-fill rounded ${getPasswordStrength(inData.confirmPassword) >= i
                                            ? "bg-success"
                                            : "bg-light"
                                            }`}
                                        style={{ height: "4px" }}
                                    />
                                ))}
                                <small className="ms-2 text-muted">Password Strength</small>
                            </div>

                            <Checkbox
                                className={"d-flex gap-2"}
                                label="Agree to Terms and Conditions"
                                checked={formData.agree}
                                onClick={(e) =>
                                    setFormData((p) => ({ ...p, agree: e.target.checked }))
                                }
                            />

                            <Button className="login-btn w-100">Sign Up</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Signup;
