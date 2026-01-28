import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import Header from "../../../component/Header";
import Sidebar from "../../../component/Sidebar";
import HomeIcon from "../../../../Icon/HomeIcon";
import KitchenIcon from "../../../../Icon/KitchenIcon";
import ElectricityIcon from "../../../../Icon/ElectricityIcon";
import BedRoomIcon from "../../../../Icon/BedroomIcon";
import DashboardIcon from "../../../../Icon/DashboardIcon";
import CustomerIcon from "../../../../Icon/CustomerIcon";
import FencingIcon from "../../../../Icon/FencingIcon";
import BathroomIcon from "../../../../Icon/BathroomIcon";
import BoxIcon from "../../../../Icon/BoxIcon";
import PlumbingIcon from "../../../../Icon/PlumbingIcon";
import InsulationIcon from "../../../../Icon/InsulationIcon";
import CarIcon from "../../../../Icon/CarIcon";

const projectOptions = [
    { id: 1, name: "Bathroom Remodel", icon: <HomeIcon /> },
    { id: 2, name: "Home Addition", icon: <DashboardIcon /> },
    { id: 3, name: "Kitchen Remodel", icon: <KitchenIcon /> },
    { id: 4, name: "Plumbing Repair", icon: <PlumbingIcon /> },
    { id: 5, name: "Electrical Repair", icon: <ElectricityIcon /> },
    { id: 6, name: "Insulation", icon: <InsulationIcon /> },
    { id: 7, name: "Bathroom Remodel", icon: <BathroomIcon /> },
    { id: 8, name: "Excavation", icon: <BoxIcon /> },
    { id: 9, name: "Handyman Service", icon: <CustomerIcon /> },
    { id: 10, name: "Bedroom Remodel", icon: <BedRoomIcon /> },
    { id: 11, name: "Garage/Bran Build", icon: <CarIcon /> },
    { id: 12, name: "Septic", icon: <FencingIcon /> },
];

const CreateProject = () => {
    // Store selected IDs as an array
    const [selectedIds, setSelectedIds] = useState([]);

    const handleSelect = (id) => {
        if (selectedIds.includes(id)) {
            // If already selected, remove it
            setSelectedIds(selectedIds.filter((item) => item !== id));
        } else {
            // Otherwise, add it
            setSelectedIds([...selectedIds, id]);
        }
    };

    return (
        <Container className="p-4">
            <h4 className="mb-2 text-start fw-bold">Create Project</h4>
            <p className="text-start fw-normal">What are you looking to do?</p>
            <Card className="p-4 shadow-sm border-0 rounded-4">
                <div className="d-flex flex-wrap justify-content-start gap-3">
                    {projectOptions.map((option) => {
                        const isActive = selectedIds.includes(option.id);
                        return (
                            <div
                                key={option.id}
                                className="d-flex flex-column align-items-center"
                                style={{ width: "180px" }}
                            >
                                <Button
                                    variant="light"
                                    onClick={() => handleSelect(option.id)}
                                    className={`d-flex flex-column align-items-center justify-content-center py-3 rounded-4 Service_Icon border
                                                ${isActive ? "border-warning bg-warning-subtle"
                                            : "border-secondary bg-white"}`}>
                                    <span style={{ fontSize: "24px" }}>
                                        {React.cloneElement(option.icon, {
                                            color: isActive ? "#F4B400" : "#292D32",
                                        })}
                                    </span>
                                </Button>

                                <p className={` mt-2 text-center
                        ${isActive ? "text-warning fw-semibold" : "text-dark"}`}>
                                    {option.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Card>
            <div className="mt-4 text-start">
                <Button
                    variant="primary"
                    className="px-5 login-btn w-25"
                    disabled={selectedIds.length === 0}
                >
                    Next
                </Button>
            </div>
        </Container>
    );
};

export default CreateProject;
