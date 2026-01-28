import { useState } from "react";
import { Card, Row, Col, Button, Form } from "react-bootstrap";

const AddDispute = () => {
  const [showAddDispute, setShowAddDispute] = useState(false);

  const disputes = [
    { id: "#456367", title: "Dispute Title", project: "Project Name", date: "20/09/2025", status: "Open" },
    { id: "#456368", title: "Dispute Title", project: "Project Name", date: "20/09/2025", status: "Open" },
    { id: "#456369", title: "Dispute Title", project: "Project Name", date: "20/09/2025", status: "Open" },
    { id: "#456370", title: "Dispute Title", project: "Project Name", date: "20/09/2025", status: "Open" },
  ];

  return (

      <Card className="border-0 rounded-4 p-4 h-100">
        {/* ================= LIST VIEW ================= */}
        {!showAddDispute && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h6 className="fw-semibold mb-0">Dispute List</h6>

              <Button
                variant="link"
                className="text-warning fw-semibold p-0"
                onClick={() => setShowAddDispute(true)}
              >
                Add Dispute
              </Button>
            </div>

            <Row className="g-3">
              {disputes.map((item, index) => (
                <Col md={6} key={index}>
                  <Card className="border rounded-4 p-3 dispute-card">
                    <div className="d-flex justify-content-between">
                      <strong>{item.id}</strong>
                      <small className="text-muted">{item.date}</small>
                    </div>

                    <div className="mt-2">{item.title}</div>
                    <small className="text-muted">{item.project}</small>

                    <div className="text-success small mt-1">{item.status}</div>
                  </Card>
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* ================= ADD DISPUTE FORM ================= */}
        {showAddDispute && (
          <>
            <div className="d-flex align-items-center gap-2 mb-4">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => setShowAddDispute(false)}
              >
                ←
              </span>
              <h6 className="fw-semibold mb-0">Add Dispute</h6>
            </div>

            {/* Upload section */}
            <div className="d-flex gap-3 mb-4">
              <div className="upload-box active">+</div>
              <div className="upload-box" />
              <div className="upload-box" />
            </div>

            <Form>
              <Row className="g-3">
                <Col md={6} className="text-start">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control placeholder={"Duane Dane"}/>
                </Col>

                <Col md={6} className="text-start">
                  <Form.Label>Dispute Title</Form.Label>
                  <Form.Control placeholder={"Dispute Title"}/>
                </Col>

                <Col md={6} className="text-start">
                  <Form.Label>Date</Form.Label>
                  <Form.Control placeholder={"date"}/>
                </Col>

                <Col md={6} className="text-start">
                  <Form.Label>Status</Form.Label>
                  <Form.Control placeholder="Open" />
                </Col>
              </Row>

              <Button className="w-100 mt-4 btn-warning text-white rounded-pill">
                Submit
              </Button>
            </Form>
          </>
        )}

      </Card>
  );
};

export default AddDispute;
