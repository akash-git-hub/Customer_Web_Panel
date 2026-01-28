import { Container, Row, Col, Card, Image, Badge, Stack } from "react-bootstrap";
import PostCard from "../../../../component/PostCard";
import BedRoomIcon from "../../../../Icon/BedroomIcon";
import FlooringIcon from "../../../../Icon/FlooringIcon";
import ChatIcon from "../../../../Icon/ChatIcon";
import PaintingIcon from "../../../../Icon/PaintingIcon";
import FencingIcon from "../../../../Icon/FencingIcon";
import GardenIcon from "../../../../Icon/GardenIcon";
import BathroomIcon from "../../../../Icon/BathroomIcon";
import RightArrowIcon from "../../../../Icon/RightArrowIcon";





const CustomerSpace = () => {

    /* ===== STATIC DATA ===== */

    const offers = [
        "https://images.unsplash.com/photo-1638886043487-72d203fa66b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1683141410787-c4dbd2220487?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];

    const services = [
        { label: "Door", icon: <ChatIcon /> },
        { label: "Flooring", icon: <FlooringIcon /> },
        { label: "Painting", icon: <PaintingIcon /> },
        { label: "Garden", icon: <GardenIcon /> },
        { label: "Fencing", icon: <FencingIcon /> },
        { label: "Bedroom", icon: <BedRoomIcon /> },
        { label: "Bathroom", icon: <BathroomIcon /> },
    ];

    const projects = [
        { title: "Project 01", img: "https://plus.unsplash.com/premium_photo-1680382578857-c331ead9ed51?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Project 02", img: "https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?q=80&w=2510&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Project 03", img: "https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?q=80&w=2510&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Project 04", img: "https://plus.unsplash.com/premium_photo-1683140941523-f1fbbabe54d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Project 05", img: "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1565&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Project 06", img: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    ];

    const posts = [
        {
            id: 1,
            name: "Dennis Callis",
            date: "May 29",
            description: "Completed a full kitchen renovation",
            image: "https://plus.unsplash.com/premium_photo-1683141263978-dda455e7d384?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "https://i.pravatar.cc/40",
            likes: 36300,
            comments: [],
        },
        {
            id: 2,
            name: "Iva Ryan",
            date: "May 29",
            description: "Bathroom remodel completed",
            image: "https://plus.unsplash.com/premium_photo-1683141037836-e5a26067194d?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "https://i.pravatar.cc/41",
            likes: 36300,
            comments: [],
        },
        {
            id: 3,
            name: "Ryan Kaeels",
            date: "May 29",
            description: "Bathroom remodel completed",
            image: "https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "https://i.pravatar.cc/42",
            likes: 36300,
            comments: [],
        },
        {
            id: 4,
            name: "Rodger Struck",
            date: "May 29",
            description: "Completed a full kitchen renovation",
            image: "https://plus.unsplash.com/premium_photo-1683141263978-dda455e7d384?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "https://i.pravatar.cc/46",
            likes: 36300,
            comments: [],
        }
    ];

    return (
        <Container fluid className="p-4">

            {/* ===== PAGE TITLE ===== */}
            <h3 className="fw-bold mb-3 text-start">Space</h3>

            {/* ===== OFFERS ===== */}
            <h6 className="fw-semibold mb-2 text-start">Offers</h6>
            <Stack direction="horizontal" gap={3} className="mb-4 overflow-auto justify-content-between">
                {offers.map((img, i) => (
                    <Image
                        key={i}
                        src={img}
                        rounded="4"
                        style={{ width: 360, height: 150, objectFit: "cover" }}
                    />
                ))}
            </Stack>

            {/* ===== POPULAR SERVICES ===== */}
            <h6 className="fw-semibold mb-2 text-start">Popular Services</h6>
            <Stack direction="horizontal" gap={3} className="mb-4 flex-wrap">
                {services.map((s, i) => (
                    <Badge
                        key={i}
                        pill
                        bg="light"
                        text="dark"
                        className="px-3 py-2 d-flex align-items-center gap-2 service-badge"
                    >
                        {s.icon}
                        {s.label}
                    </Badge>
                ))}
            </Stack>

            {/* ===== MY PROJECTS ===== */}
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-semibold text-start">My Projects</h6>
                <span className="text-muted"><RightArrowIcon /></span>
            </div>

            <Stack direction="horizontal" gap={5} className="mb-4 overflow-auto">
                {projects.map((p, i) => (
                    <div key={i} className="text-center">
                        <Image
                            src={p.img}
                            rounded="5"
                            style={{ width: 100, height: 120, objectFit: "cover" }}
                        />
                        <small className="d-block mt-2">{p.title}</small>
                    </div>
                ))}
            </Stack>

            {/* ===== SPACES / POSTS ===== */}
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h6 className="fw-semibold text-start">Space</h6>
                <span className="text-muted"><RightArrowIcon /></span>
            </div>

            <div className="row">
                {posts.map((post) => (
                    <div className="col-md-3" key={post.id}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>

        </Container>
    );
};

export default CustomerSpace;
