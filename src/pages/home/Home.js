import Sidebar from "../../component/Sidebar";
import Header from "../../component/Header";
import PostCard from "../../component/PostCard";

const Home = () => {
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
        },
        {
            id: 5,
            name: "Liva yan",
            date: "May 29",
            description: "Bathroom remodel completed",
            image: "https://plus.unsplash.com/premium_photo-1683141037836-e5a26067194d?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "https://i.pravatar.cc/60",
            likes: 36300,
            comments: [],
        },
        {
            id: 6,
            name: "Kathy Pacheco",
            date: "May 29",
            description: "Bathroom remodel completed",
            image: "https://plus.unsplash.com/premium_photo-1664301972519-506636f0245d?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            avatar: "https://i.pravatar.cc/47",
            likes: 36300,
            comments: [],
        },
    ];

    return (
        <div className="d-flex">
            <Sidebar />
            <div className="flex-grow-1 p-2">
                <div className="right-side-color">
                    <Header />
                    <div className="container mt-4">
                        <h4 className="fw-bold mb-4 text-start">Projects</h4>

                        <div className="row">
                            {posts.map((post) => (
                                <div className="col-md-3" key={post.id}>
                                    <PostCard post={post} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;