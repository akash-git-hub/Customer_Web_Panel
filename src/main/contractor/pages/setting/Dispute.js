
import { Card, Row, Col, Image, } from "react-bootstrap";
import AddUserIcon from "../../../../Icon/AddUserIcon";
import BackArrowIcon from "../../../../Icon/BackArrowIcon";
import { useNavigate } from "react-router-dom";
import ShieldIcon from "../../../../Icon/ShieldIcon";
import MilestoneIcon from "../../../../Icon/MilestoneIcon";
import RightArrowIcon from "../../../../Icon/RightArrowIcon";
import AddDispute from "./AddDispute";

const Dispute = () => {

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

    const options = [
        {
            label: "Services",
            icon: <MilestoneIcon />,
            path: "/services",
        },
        {
            label: "Add Dispute",
            icon: <ShieldIcon />,
            path: "/add_dispute",
        },
        {
            label: "Change Password",
            icon: <ShieldIcon />,
            path: "/change-password",
        },
    ];



    return (
        <div className="p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <h4 className="fw-semibold mb-4 text-start"><span onClick={() => navigate("/myprofile")}><BackArrowIcon /></span>Settings</h4>
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
                    <AddDispute/>
                </Col>
            </Row>

        </div>
    );
};

export default Dispute;
