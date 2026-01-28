import React, { useEffect, useMemo, useState } from "react";
import { Container, Form } from "react-bootstrap";
import ContractorCard from "../../../../component/ContractorCard";
import SearchIcon from "../../../../Icon/SearchIcon";
import BoxIcon from "../../../../Icon/BoxIcon";
import { fetchService, fetchContractors } from "../../../../services/NetworkCall";

const SearchContractor = () => {
    // ---------------- SERVICES ----------------
    const [services, setServices] = useState([]);
    const [loadingServices, setLoadingServices] = useState(false);

    // ---------------- CONTRACTORS ----------------
    const [contractors, setContractors] = useState([]);
    const [loadingContractors, setLoadingContractors] = useState(false);

    // ---------------- FILTERS ----------------
    const [activeFilter, setActiveFilter] = useState("all");
    const [search, setSearch] = useState("");
    const [radius, setRadius] = useState(0);
    const [rating] = useState(""); // UI later

    // ---------------- PAGINATION ----------------
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    // ================= SERVICE LIST API (ONLY ONCE) =================
    useEffect(() => {
        const getServices = async () => {
            try {
                setLoadingServices(true);
                const res = await fetchService();
                setServices(res?.data || []);
            } catch (error) {
                console.error("Service API error", error);
            } finally {
                setLoadingServices(false);
            }
        };

        getServices();
    }, []);

    // ================= SERVICE FILTERS (ALL + API) =================
    const serviceFilters = useMemo(() => {
        return [
            {
                id: "all",
                display_name: "All",
                icon_url: null
            },
            ...services
        ];
    }, [services]);

    // ================= RESET PAGE ON FILTER CHANGE =================
    useEffect(() => {
        setPage(1);
    }, [activeFilter, search, radius]);

    // ================= CONTRACTOR API CALL =================
    useEffect(() => {
        const getContractors = async () => {
            try {
                setLoadingContractors(true);

                const params = {
                    radius,
                    order_by: "nearest",
                    service_ids: activeFilter === "all" ? "" : activeFilter,
                    search: search || "",
                    page,
                    limit,
                    all: false, // pagination needed
                    rating: rating || ""
                };

                const res = await fetchContractors(params);
                console.log(res)
                setContractors(res?.data || []);
                setTotalPages(res?.pagination?.total_pages || 1);
            } catch (error) {
                console.error("Contractor API error", error);
            } finally {
                setLoadingContractors(false);
            }
        };

        getContractors();
    }, [activeFilter, search, radius, page]);

    // ================= UI =================
    return (
        <Container className="py-4 px-4">
            {/* HEADER */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <h4 className="fw-semibold mb-4 text-start">
                    Search Contractor
                </h4>

                <div className="d-flex align-items-center gap-3">
                    <span className="fw-medium">
                        Radius ({radius}-Miles)
                    </span>
                    <Form.Range
                        min={0}
                        max={50}
                        value={radius}
                        onChange={(e) => setRadius(e.target.value)}
                        className="radius-slider"
                    />
                </div>
            </div>

            {/* FILTERS + SEARCH */}
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <div className="d-flex gap-1 flex-wrap align-items-center">
                    {loadingServices ? (
                        <span className="text-muted px-2">
                            Loading services...
                        </span>
                    ) : (
                        serviceFilters.map((service) => {
                            const isActive =
                                activeFilter === service.id;

                            return (
                                <button
                                    key={service.id}
                                    onClick={() =>
                                        setActiveFilter(service.id)
                                    }
                                    className={`filter-pill d-flex align-items-center gap-2 ${
                                        isActive ? "active" : ""
                                    }`}
                                >
                                    {service.icon_url ? (
                                        <img
                                            src={service.icon_url}
                                            alt={service.display_name}
                                            width={18}
                                            height={18}
                                        />
                                    ) : (
                                        <BoxIcon
                                            color={
                                                isActive
                                                    ? "#fff"
                                                    : "#7a7a7a"
                                            }
                                        />
                                    )}
                                    <span>
                                        {service.display_name}
                                    </span>
                                </button>
                            );
                        })
                    )}

                    {/* SEARCH */}
                    <div className="search-wrapper ms-2">
                        <SearchIcon />
                        <Form.Control
                            type="text"
                            placeholder="Search contractor..."
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            className="search-input"
                        />
                    </div>
                </div>
            </div>

            {/* CONTRACTOR LIST */}
            <div className="contractor-grid mt-4">
                {loadingContractors ? (
                    <p>Loading contractors...</p>
                ) : contractors.length === 0 ? (
                    <p className="text-muted">
                        No contractors found
                    </p>
                ) : (
                    contractors.map((contractor) => (
                        <ContractorCard
                            key={contractor.id}
                            contractor={contractor}
                        />
                    )) 
                )}
            </div>

            {/* PAGINATION */}
            <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Prev
                </button>

                <span>
                    Page {page} of {totalPages}
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </Container>
    );
};

export default SearchContractor;
