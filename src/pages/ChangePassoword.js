import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { InputField } from "../component/InputField";
import ShieldIcon from "../Icon/ShieldIcon";
import EyeIcon from "../Icon/EyeIcon";
import EyeSlashIcon from "../Icon/EyeSlashIcon";


const ChangePassword = () => {
    const [show, setShow] = useState({ old: false, new: false, confirm: false });
    const [inData, setInData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const toggle = (key) => {
        setShow({ ...show, [key]: !show[key] });
    };

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInData({ ...inData, [name]: value });
    };

    const getPasswordStrength = (password = "") => {
        let score = 0;
        if (password.length >= 8) score++;
        if (/[A-Z]/.test(password)) score++;
        if (/[0-9]/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;
        return score; // 0–4
    };

    return (
        <Container fluid className="p-0 vh-100">
            <Row className="g-0 h-100">
                <Col lg={6} className="d-none d-lg-flex login-image-section">
                    <div className="login-image-overlay">
                    </div>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center p-5">
                    <div className="login-form-wrapper ">
                        <div className="text-center mb-4">
                            <img
                                src="/assets/Images/Tradie_Logo.png"
                                alt="logo"
                                className="login-logo mb-3"
                            />
                            <h3 className="mt-3">Change Password</h3>
                        </div>
                        <InputField
                            className="mb-1 custom-input"
                            FormLabel="Old Password"
                            FormType={show.old ? "text" : "password"}
                            name="oldPassword"
                            value={inData.oldPassword}
                            FormPlaceHolder="Old Password"
                            onChange={inputHandler}
                            startIcon={<ShieldIcon />}
                            endIcon={
                                show.old ? (
                                    <EyeIcon className="cursor-pointer" onClick={() => toggle("old")} />
                                ) : (
                                    <EyeSlashIcon className="cursor-pointer" onClick={() => toggle("old")} />
                                )
                            }
                        />

                        <InputField
                            FormLabel="New Password"
                            FormType={show.new ? "text" : "password"}
                            name="newPassword"
                            value={inData.newPassword}
                            FormPlaceHolder="New Password"
                            onChange={inputHandler}
                            startIcon={<ShieldIcon />}
                            endIcon={
                                show.new ? (
                                    <EyeIcon className="cursor-pointer" onClick={() => toggle("new")} />
                                ) : (
                                    <EyeSlashIcon className="cursor-pointer" onClick={() => toggle("new")} />
                                )
                            }
                        />

                        <div className="d-flex align-items-center gap-2">
                            {[1, 2, 3, 4].map((i) => (
                                <span
                                    key={i}
                                    className={`flex-fill rounded ${getPasswordStrength(inData.newPassword) >= i
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
                            FormType={show.confirm ? "text" : "password"}
                            name="confirmPassword"
                            value={inData.confirmPassword}
                            FormPlaceHolder="Confirm Password"
                            onChange={inputHandler}
                            startIcon={<ShieldIcon />}
                            endIcon={
                                show.confirm ? (
                                    <EyeIcon className="cursor-pointer" onClick={() => toggle("confirm")} />
                                ) : (
                                    <EyeSlashIcon className="cursor-pointer" onClick={() => toggle("confirm")} />
                                )
                            }
                        />
                        <div className="d-flex align-items-center gap-2">
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
                        <Button className="login-btn w-100 mt-4">Save</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ChangePassword;
