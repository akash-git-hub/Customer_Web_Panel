
import { Card, Row, Col, Image, } from "react-bootstrap";
import KitchenIcon from "../../../../Icon/KitchenIcon";
import BedRoomIcon from "../../../../Icon/BedroomIcon";
import PlumbingIcon from "../../../../Icon/PlumbingIcon";
import ElectricityIcon from "../../../../Icon/ElectricityIcon";
import VideoIcon from "../../../../Icon/VideoIcon";
import MultiImageIcon from "../../../../Icon/MultiImageIcon";
import ChatIcon from "../../../../Icon/ChatIcon";

const ContractorProfile = () => {
    const contractorData = {
        profile_url: "https://i.pravatar.cc/300?img=12",
        name: "Autumn Phillips",
        email: "autumn@phillips.com",
        address: { address: "1341 Poplar Street, Chicago, IL 60606" },
        mobile_country_code: "+91",
        mobile_number: "8989786510",
        services: [
            { service_name: "Kitchen", icon: <KitchenIcon /> },
            { service_name: "Bedroom", icon: <BedRoomIcon /> },
            { service_name: "Plumbing", icon: <PlumbingIcon /> },
            { service_name: "Electricity", icon: <ElectricityIcon /> },
        ],
    };

    const galleryImages = [
        { img: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg", name: "Living Room Renovation" },
        { img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg", name: "Modular Kitchen" },
        { img: "https://images.pexels.com/photos/271815/pexels-photo-271815.jpeg", name: "Bedroom Interior" },
        { img: "https://images.pexels.com/photos/264280/pexels-photo-264280.jpeg", name: "Bathroom Renovation" },
    ];


    return (
        <div className="p-4">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <h4 className="fw-semibold mb-4 text-start">Contractor Profile</h4>
                <h5 className="text-success fw-semibold">Contractor Licence</h5>
            </div>
            <Row>
                <Col lg={6}>
                    <Card className="border-0 rounded-4 p-4">
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
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-2">
                            <h6 className="fw-bold mb-2 text-start">Services</h6>
                            <ChatIcon />
                        </div>
                        <Row className="g-2 mb-2">
                            {contractorData.services.map((service) => (
                                <Col sm={6} key={service.service_name}>
                                    <Card className="border-1 rounded-4 p-3 text-center">
                                        <div className="d-flex align-items-center gap-2 justify-content-start">
                                            {service.icon}
                                            <span>{service.service_name}</span>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>

                        <div>
                            <h6 className="fw-bold mb-2 text-start">Who we are</h6>
                            <p className="text-muted text-start mb-0">
                                Autumn Phillips is an experienced contractor specializing in kitchen, bedroom, and plumbing services.
                                Delivering high-quality renovations with a professional and timely approach.
                            </p>
                        </div>
                    </Card>
                </Col>

                <Col lg={6}>
                    <Card className="border-0 rounded-4 p-4 h-100">
                        <Row className="g-2 mt-3">
                            {galleryImages.map((item, index) => (
                                <Col xs={3} key={index}>
                                    <div className="media-wrapper rounded-3 overflow-hidden mb-1 position-relative">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="object-fit-cover"
                                        />
                                        <div className="media-icon">
                                            {item.type === "video" ? (
                                                <VideoIcon />
                                            ) : (
                                                <MultiImageIcon />
                                            )}
                                        </div>
                                    </div>

                                    <div
                                        className="small fw-medium text-truncate"
                                        title={item.name}
                                    >
                                        {item.name}
                                    </div>
                                </Col>
                            ))}
                        </Row>

                    </Card>
                </Col>
            </Row>

        </div>

    );
};

export default ContractorProfile;
