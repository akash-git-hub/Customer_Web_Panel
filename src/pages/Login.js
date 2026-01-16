import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button, Stack } from "react-bootstrap";
import MailIcon from "../Icon/MailIcon";
import ShieldIcon from "../Icon/ShieldIcon";
import EyeIcon from "../Icon/EyeIcon";
import EyeSlashIcon from "../Icon/EyeSlashIcon";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../states/AuthContext";
import { login } from "../services/NetworkCall";
import { errorAlert, successAlert } from "../component/Alert";
import { InputField } from "../component/InputField";
import { Checkbox } from "../component/Checkbox";
import { Loader } from "../component/Loader";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { setLoggedIn, setProfileData } = useContext(AuthContext);
    const [inData, setInData] = useState({
        emailOrMobile: localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}myEmailOrMobile`),
        password: localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}myPassword`),
        reminder: localStorage.getItem(`${process.env.REACT_APP_STORAGE_PREFIX}myReminder`) === "true",
    });
    const [error, setError] = useState({ emailOrMobile: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInData((pre) => ({ ...pre, [name]: value }));
        setError((pre) => ({ ...pre, [name]: "" }));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const checkHandler = (e) => {
        const { name, checked } = e.target;
        setInData((pre) => ({ ...pre, [name]: checked }));
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        let isValid = 1;

        if (!inData.emailOrMobile) {
            setError((prev) => ({ ...prev, emailOrMobile: "Required *" }));
            isValid = 2;
        }

        if (!inData.password) {
            setError((pre) => ({ ...pre, password: "Required *" }));
            isValid = 4;
        }

        if (isValid === 1) {
            setLoading(true);
            const payload = {
                emailOrMobile: inData.emailOrMobile,
                password: inData.password,
            };

            const res = await login(payload);
            localStorage.clear();
            if (res.success) {

                // These localStorage are for remember me functionality
                if (inData.reminder) {
                    localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}myReminder`, true);
                    localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}myEmailOrMobile`, inData.emailOrMobile);
                    localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}myPassword`, inData.password);
                } else {
                    localStorage.removeItem(`${process.env.REACT_APP_STORAGE_PREFIX}myReminder`);
                    localStorage.removeItem(`${process.env.REACT_APP_STORAGE_PREFIX}myEmailOrMobile`);
                    localStorage.removeItem(`${process.env.REACT_APP_STORAGE_PREFIX}myPassword`);
                }

                // Setting auth context and localStorage
                setLoggedIn(true);
                setProfileData(res.data);
                localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}loggedIn`, "true");
                localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}authToken`, `${res.data.token}`);
                localStorage.setItem(`${process.env.REACT_APP_STORAGE_PREFIX}profileData`, JSON.stringify(res.data));
                // successAlert({ message: res.message });
                navigate("/home", { replace: true });
            } else {
                errorAlert({ message: res.message });
            }
            setLoading(false);
        }
    };
    return (
        <div>
            <Loader show={loading} />

            <Container fluid className="login-wrapper">
                <Row className="min-vh-100">
                    <Col lg={6} className="d-none d-lg-flex login-image-section">
                        <div className="login-image-overlay">
                            <p className="new-user-text">New User?</p>
                            <Button className="signup-btn" onClick={() => navigate("/signup")}>Sign Up</Button>
                        </div>
                    </Col>

                    <Col xs={12} lg={6} className="d-flex align-items-center justify-content-center">
                        <div className="login-form-wrapper text-center">
                            <img src="/assets/Images/Tradie_Logo.png" alt="Tradie Logo" className="login-logo mb-3" />
                            <h2 className="login-title mb-4">LOGIN</h2>
                            <Form onSubmit={submitHandler}>
                                <InputField
                                    FormLabel="Email Address / Mobile Number"
                                    FormType="text"
                                    name="emailOrMobile"
                                    FormPlaceHolder="Enter email OR Mobile"
                                    value={inData?.emailOrMobile}
                                    onChange={inputHandler}
                                    error={error?.emailOrMobile}
                                    startIcon={<MailIcon />}
                                />

                                <InputField
                                    FormLabel="Password"
                                    FormType={showPassword ? "text" : "password"}
                                    name="password"
                                    FormPlaceHolder="Enter password"
                                    value={inData?.password}
                                    error={error?.password}
                                    onChange={inputHandler}
                                    startIcon={<ShieldIcon />}
                                    endIcon={
                                        showPassword ? (
                                            <EyeIcon
                                                className="text-secondary cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            />
                                        ) : (
                                            <EyeSlashIcon
                                                className="text-secondary cursor-pointer"
                                                onClick={togglePasswordVisibility}
                                            />
                                        )
                                    }
                                />

                                <Stack
                                    direction="horizontal"
                                    className="justify-content-between mt-3 mb-4"
                                >
                                    <Checkbox
                                        type="CheckBox"
                                        className="remember-check"
                                        checked={inData.reminder}
                                        name="reminder"
                                        label="Remember me"
                                        id="custom-check"
                                        onClick={checkHandler}
                                    />
                                    <span className="forgot-link" onClick={() => navigate("/forgot_password")}>Forgot password?</span>
                                </Stack>

                                <Button className="login-btn w-100" type="submit">
                                    Log In
                                </Button>
                            </Form>
                            {/*         
                            <div className="social-login mt-4">
                                <p>Or can continue with</p>
                                <div className="social-icons">
                                    <span className="circle">f</span>
                                    <span className="circle">G</span>
                                    <span className="circle"></span>
                                </div>
                            </div>
                            */}
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Login;
