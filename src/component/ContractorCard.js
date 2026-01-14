import React from "react";
import { useNavigate } from "react-router-dom";

const ContractorCard = ({ contractor, isActive }) => {
    const navigate = useNavigate();

    return (
        <div className={`contractor-card text-start ${isActive ? "active" : ""}`} onClick={() => navigate("/contractor-profile")}
            style={{ cursor: "pointer" }}>
            <img
                src={contractor.image}
                alt={contractor.name}
                className="contractor-avatar"
            />

            <div className="flex-grow-1">
                <h6 className="mb-1">{contractor.name}</h6>
                <p className="text-muted mb-1">{contractor.email}</p>
                <p className="small mb-1">
                    {contractor.skills.join(", ")}
                </p>

                <div className="rating">
                    {"★".repeat(contractor.rating)}
                    {"☆".repeat(5 - contractor.rating)}
                </div>
            </div>
        </div>
    );
};

export default ContractorCard;
