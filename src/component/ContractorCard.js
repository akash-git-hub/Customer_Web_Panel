import React from "react";
import { useNavigate } from "react-router-dom";

const ContractorCard = ({ contractor, isActive }) => {
    const navigate = useNavigate();

    const servicesText = contractor.services
        ?.map(service => service.display_name)
        .join(", ");

    return (
        <div
            className={`contractor-card text-start ${isActive ? "active" : ""}`}
            onClick={() => navigate("/contractor-profile")}
            style={{ cursor: "pointer" }}>
            <img
                src={contractor.user_profile}
                alt={contractor.user_name}
                className="contractor-avatar"
            />

            <div className="flex-grow-1">
                <h6 className="mb-1">{contractor.user_name}</h6>
                <p className="text-muted mb-1">{contractor.user_email}</p>
                <p className="small mb-1">
                    {servicesText}
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
