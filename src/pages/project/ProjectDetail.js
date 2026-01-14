import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Nav,
  Tab,
  Image,
  Carousel,
  Stack,
} from "react-bootstrap";
import moment from "moment-timezone";

import Header from "../../component/Header";
import Sidebar from "../../component/Sidebar";
import UserCard from "../../component/UserCard";
import MilestoneCard from "../../component/MilestoneCard";
import PaymentCard from "../../component/PaymentCard";
import DocumentCard from "../../component/DocumentCard";

import LicenseIcon from "../../Icon/LicenseIcon";
import MilestoneIcon from "../../Icon/MilestoneIcon";
import PaymentIcon from "../../Icon/PaymentIcon";
import DescriptionIcon from "../../Icon/DescriptionIcon";
import ChatIcon from "../../Icon/ChatIcon";
import KitchenIcon from "../../Icon/KitchenIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import ElectricityIcon from "../../Icon/ElectricityIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";

const projectData = {
  title: "Full Kitchen Renovation",
  address: "Ritter Street, Huntsville",
  rating: 4.6,
  createdAt: "2025-01-10T10:00:00Z",
  description:
    "Complete kitchen renovation featuring new flooring, modern cabinetry, upgraded lighting, and professional electrical work to deliver a fresh, functional, and aesthetically pleasing kitchen space",

  files: [
    { uri: "https://picsum.photos/800/400?1" },
    { uri: "https://picsum.photos/800/400?2" },
    { uri: "https://picsum.photos/800/400?3" },
  ],

  services: [
    {
      service_name: "Kitchen",
      service_icon: <KitchenIcon/>,
    },
    {
      service_name: "Flooring",
      service_icon: <FlooringIcon/>,
    },
    {
      service_name: "Electricity",
      service_icon: <ElectricityIcon/>,
    },
    {
      service_name: "BedRoom",
      service_icon: <BedRoomIcon/>,
    },
  ],

  customer: {
    name: "Duane Dean",
    email: "TradieCustomer@gmail.com",
    profile_url: "https://randomuser.me/api/portraits/women/44.jpg",
  },

  contractor: {
    name: "John Dukes",
    email: "john@tradie.com",
    profile_url: "https://randomuser.me/api/portraits/men/32.jpg",
    milestones: [
      {
        milestone_name: "Initial Setup",
        milestone_amount: 200,
        milestone_description: "Site inspection & planning",
        milestone_start_date: "2025-01-01",
        milestone_end_date: "2025-01-05",
        status: "completed",
      },
      {
        milestone_name: "Main Renovation",
        milestone_amount: 400,
        milestone_description: "Execution of renovation work",
        milestone_start_date: "2025-01-06",
        milestone_end_date: "2025-01-20",
        status: "inProgress",
      },
    ],
  },

  documents: [
    {
      document_name: "License Document",
      document_url: "https://example.com/license.pdf",
    },
    {
      document_name: "Agreement Document",
      document_url: "https://example.com/agreement.pdf",
    },
  ],
};


const payments = [
  {
    date: "01 JAN 2025",
    title: "Milestone 01 - #4389830",
    transactionId: "#HS92948193",
    amount: 200,
    status: "pending",
    showPayButton: true,
  },
  {
    date: "01 FEB 2025",
    title: "Milestone 02 - #4389830",
    transactionId: "#HS92948194",
    amount: 200,
    status: "notStarted",
  },
  {
    date: "01 MAR 2025",
    title: "Milestone 03 - #4389830",
    transactionId: "#HS92948195",
    amount: 200,
    status: "notStarted",
  },
];


const ProjectDetail = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="d-flex min-vh-100">
      <Sidebar />

      <div className="flex-grow-1 p-2">
        <div className="right-side-color">
          <Header />

          <Container className="p-4">
            <h4 className="fw-bold mb-4 text-start">Project Detail</h4>
            <Row className="g-4">
              <Col lg={5}>
                <Card className="border-0 rounded-4 overflow-hidden position-relative">
                  <Carousel
                    indicators={false}
                    activeIndex={activeIndex}
                    onSelect={setActiveIndex}
                  >
                    {projectData.files.map((img, index) => (
                      <Carousel.Item key={index}>
                        <Image
                          src={img.uri}
                          className="w-100"
                          style={{ height: 320, objectFit: "cover" }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>

                  <Badge className="position-absolute bottom-0 start-0 m-3 bg-warning">
                    {activeIndex + 1} / {projectData.files.length}
                  </Badge>
                </Card>
              </Col>

              <Col lg={7}>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <h3 className="fw-bold">{projectData.title}</h3>
                    <h4 className="text-muted text-start fw-normal">{projectData.address}</h4>
                  </div>

                  <div className="text-end">
                    ⭐ {projectData.rating}
                    <div className="text-muted small">
                      {moment(projectData.createdAt).format("MMM D, YYYY")}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <Row className="g-2 mb-3">
                  {projectData.services.map((s, i) => (
                    <Col sm={6} key={i}>
                      <Card className="border-0 rounded-4 p-3" style={{
                        background: '#F9EDD2'
                      }}>
                        <Stack direction="horizontal" gap={2}>
                          {s.service_icon}
                          <h6 className="fw-semibold">{s.service_name}</h6>
                        </Stack>
                      </Card>
                    </Col>
                  ))}
                </Row>



                <Row className="g-3">
                  <Col sm={6}>
                    <UserCard
                      name={projectData.customer.name}
                      email={projectData.customer.email}
                      role="Customer"
                      avatar={projectData.customer.profile_url}
                      color="warning"
                    />
                  </Col>

                  <Col sm={6}>
                    <UserCard
                      name={projectData.contractor.name}
                      email={projectData.contractor.email}
                      role="Contractor"
                      avatar={projectData.contractor.profile_url}
                      color="primary"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
              <Nav
                variant="pills"
                className="mt-5 p-2 rounded-pill gap-5"
                style={{ background: "#F6E9C8" }}
              >
                <Nav.Link eventKey="description">
                  <DescriptionIcon active={activeTab === "description"} />
                  <span className="ms-2">Description</span>
                </Nav.Link>

                <Nav.Link eventKey="milestone">
                  <MilestoneIcon active={activeTab === "milestone"} />
                  <span className="ms-2">Milestone</span>
                </Nav.Link>

                <Nav.Link eventKey="chat">
                  <ChatIcon active={activeTab === "chat"} />
                  <span className="ms-2">Chat</span>
                </Nav.Link>

                <Nav.Link eventKey="payment">
                  <PaymentIcon active={activeTab === "payment"} />
                  <span className="ms-2">Payment</span>
                </Nav.Link>

                <Nav.Link eventKey="documents">
                  <LicenseIcon active={activeTab === "documents"} />
                  <span className="ms-2">Documents</span>
                </Nav.Link>

              </Nav>

              <Tab.Content className="mt-4">
                <Tab.Pane eventKey="description">
                  <Card className="border-0 rounded-4 p-4">
                    <p className="text-muted mb-0 text-start">
                      {projectData.description}
                    </p>
                  </Card>
                </Tab.Pane>

                <Tab.Pane eventKey="milestone">
                  <Row className="g-4">
                    {projectData.contractor.milestones.map((m, i) => (
                      <Col md={6} lg={4} key={i}>
                        <MilestoneCard />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="payment">
                  <Row className="g-4">
                    {payments.map((p, i) => (
                      <Col md={6} lg={4} key={i}>
                        <PaymentCard {...p} />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="documents">
                  <Row className="g-4">
                    {projectData.documents.map((d, i) => (
                      <Col md={4} key={i}>
                        <DocumentCard
                          title={d.document_name}
                          onClick={() =>
                            window.open(d.document_url, "_blank")
                          }
                        />
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
