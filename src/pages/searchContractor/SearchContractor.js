import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import ContractorCard from "../../component/ContractorCard";
import SearchIcon from "../../Icon/SearchIcon";
import FencingIcon from "../../Icon/FencingIcon";
import PlumbingIcon from "../../Icon/PlumbingIcon";
import FlooringIcon from "../../Icon/FlooringIcon";
import MilestoneIcon from "../../Icon/MilestoneIcon";
import BedRoomIcon from "../../Icon/BedroomIcon";
import KitchenIcon from "../../Icon/KitchenIcon";
import BoxIcon from "../../Icon/BoxIcon";

const SearchContractor = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [radius, setRadius] = useState(5);


    const contractorsData = [
        {
            id: 1,
            name: "Autumn Phillips",
            email: "autumn@phillips.com",
            skills: ["Kitchen", "Plumbing", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=12",
        },
        {
            id: 2,
            name: "Stephanie Nicol",
            email: "stephanie@nicol.com",
            skills: ["Kitchen", "Plumbing", "Bedroom"],
            rating: 5,
            image: "https://i.pravatar.cc/300?img=11",
        },
        {
            id: 3,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=13",
        },
        {
            id: 4,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=14",
        },
        {
            id: 5,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=15",
        },
        {
            id: 6,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=16",
        },
        {
            id: 7,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=17",
        },
        {
            id: 8,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=18",
        },
        {
            id: 9,
            name: "John Dukes",
            email: "john@dukes.com",
            skills: ["Kitchen", "Bedroom"],
            rating: 4,
            image: "https://i.pravatar.cc/300?img=19",
        },
    ];

    const filters = [
        { label: "All", icon: BoxIcon },
        { label: "Kitchen", icon: KitchenIcon },
        { label: "Bedroom", icon: BedRoomIcon },
        { label: "Plumbing", icon: MilestoneIcon },
        { label: "Flooring", icon: FlooringIcon },
        { label: "Carpentry", icon: PlumbingIcon },
        { label: "Fencing", icon: FencingIcon },
    ];


    const filteredContractors = contractorsData.filter((c) => {
        const matchSkill =
            activeFilter === "All" || c.skills.includes(activeFilter);

        const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());

        return matchSkill && matchSearch;
    });

    return (
        <div className="d-flex">
            <Sidebar />

            <div className="flex-grow-1">
                <div className="right-side-color p-2">
                    <Header buttonText={'Create Project'}/>
                    <Container fluid className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <h4 className="fw-semibold mb-4 text-start">Search Contractor</h4>
                            <div className="d-flex align-items-center gap-3">
                                <span className="fw-medium">Radius ({radius}-Miles)</span>
                                <Form.Range
                                    min={1}
                                    max={50}
                                    value={radius}
                                    onChange={(e) => setRadius(e.target.value)}
                                    className="radius-slider"
                                />
                            </div>
                        </div>


                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <div className="d-flex gap-1 flex-wrap justify-content-between">
                                {filters.map((filter) => {
                                    const isActive = activeFilter === filter.label;
                                    const Icon = filter.icon;

                                    return (
                                        <button
                                            key={filter.label}
                                            onClick={() => setActiveFilter(filter.label)}
                                            className={`filter-pill d-flex align-items-center gap-2 ${isActive ? "active" : ""
                                                }`}
                                        >
                                            <Icon color={isActive ? "#fff" : "#7a7a7a"} />
                                            <span>{filter.label}</span>
                                        </button>
                                    );
                                })}
                                <div className="search-wrapper">
                                    <SearchIcon />
                                    <Form.Control
                                        type="text"
                                        placeholder="Search contractor..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="search-input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="contractor-grid mt-4">
                            {filteredContractors.map((contractor) => (
                                <ContractorCard
                                    key={contractor.id}
                                    contractor={contractor}
                                    isActive={contractor.name === "Stephanie Nicol"}
                                />
                            ))}
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default SearchContractor;
