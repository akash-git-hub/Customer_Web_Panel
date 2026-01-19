import React, { useRef, useState } from "react";
import { Row, Col, Form, Button, Card, Container } from "react-bootstrap";
import Sidebar from "../../../component/Sidebar";
import Header from "../../../component/Header";
import ImageIcon from "../../../Icon/ImageIcon";

const ProjectForm = () => {
  const [hasMultipleArea, setHasMultipleArea] = useState("yes");

  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  return (
    <Container className="py-4 px-4">
      <Card className="border-0 rounded-4 p-4">
        <div className="mb-4">
          <h5 className="fw-semibold text-start">← Create Project</h5>
        </div>
        <div className="mb-4">
          <h6 className="mb-3 text-start">Upload Docs</h6>
          <div className="d-flex gap-3 flex-wrap">
            <div className="upload-box" onClick={handleUploadClick}>
              <ImageIcon color="#E2AC2F" />
            </div>
            {images.map((img, index) => (
              <div key={index} className="upload-preview">
                <img src={img.preview} alt="preview" />
              </div>
            ))}
          </div>

          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            multiple
            hidden
            onChange={handleFileChange}
          />
        </div>

        <Form>
          <Row className="g-4">
            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Project Title</Form.Label>
                <Form.Control placeholder="Project Name" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Street</Form.Label>
                <Form.Control placeholder="Street" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>State</Form.Label>
                <Form.Control placeholder="State" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Zip code</Form.Label>
                <Form.Control placeholder="Zip Code" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Select Contractor</Form.Label>
                <Form.Select>
                  <option>Autumn Phillips</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Width of area (ft)</Form.Label>
                <Form.Control placeholder="Width ft" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="text-start">
                <Form.Label>Length of area (ft)</Form.Label>
                <Form.Control placeholder="height ft" />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="text-start">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Describe your project..."
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Radio Section */}
          <div className="mt-4">
            <h6 className="text-start w-25">
              {" "}
              Do you have more than one area being worked on?
            </h6>

            <div className="d-flex gap-3 mt-2">
              <Form.Check
                type="radio"
                label="Yes"
                name="area"
                checked={hasMultipleArea === "yes"}
                onChange={() => setHasMultipleArea("yes")}
                className="checkbox_Button"
              />
              <Form.Check
                type="radio"
                label="No"
                name="area"
                checked={hasMultipleArea === "no"}
                onChange={() => setHasMultipleArea("no")}
                className="checkbox_Button"
              />
            </div>
          </div>
          <div className="mt-5 text-start">
            <Button variant="primary" className="px-5 login-btn w-25">
              Next
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default ProjectForm;
