import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";


const VerificationCode = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const [timeLeft, setTimeLeft] = useState(90);

    useEffect(() => {
        if (timeLeft === 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < otp.length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }
    };

    // const formatTime = () => {
    //     const min = Math.floor(timeLeft / 60);
    //     const sec = timeLeft % 60;
    //     return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    // };

    return (
        <Row className="min-vh-100">
            <Col lg={6} className="d-none d-lg-flex login-image-section">
                <div className="login-image-overlay">
                </div>
            </Col>
            <Col md={6} className="d-flex align-items-center justify-content-center">
                <div style={{ maxWidth: 420, width: "100%" }} className="text-center px-4">

                    <img
                        src="/assets/Images/Tradie_Logo.png"
                        alt="logo"
                        className="login-logo mb-3"
                    />

                    <h4 className="fw-semibold mb-4">Verification Code</h4>
                    <div className="d-flex justify-content-between mb-3">
                        {otp.map((digit, index) => (
                            <Form.Control
                                key={index}
                                id={`otp-${index}`}
                                value={digit}
                                maxLength={1}
                                onChange={(e) => handleChange(e.target.value, index)}
                                className="text-center fs-4"
                                style={{
                                    width: 55,
                                    height: 55,
                                    borderRadius: 12,
                                }}
                            />
                        ))}
                    </div>

                    <div className="fw-semibold mb-2">
                        {/* {formatTime()} */}
                        1:20
                        </div>
                    <div
                        className="text-muted mb-4 cursor-pointer"
                        onClick={() => setTimeLeft(90)}
                        style={{ fontSize: 14 }}
                    >
                        Resend Code
                    </div>
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

export default VerificationCode;
