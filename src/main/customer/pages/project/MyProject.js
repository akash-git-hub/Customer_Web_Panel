import PostCard from "../../../../component/PostCard";
import { useEffect, useState } from "react";
import { Loader } from "../../../../component/Loader";
import { fetchFeeds } from "../../../../services/NetworkCall";
import { Tab, Tabs } from "react-bootstrap";
import InProgressIcon from "../../../../Icon/InProgressIcon";
import UpcomingIcon from "../../../../Icon/UpcomingIcon";

const MyProject = () => {

    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(false);
    const [page, setPage] = useState(1);
    const [feeds, setFeeds] = useState([]);

    const loadFeeds = async (pageNo = 1) => {
        setLoading(true);
        const res = await fetchFeeds({ page: pageNo, limit: 12 });
        if (res.success) {
            if (pageNo === 1) {
                setFeeds(res.data);
            } else {
                setFeeds((pre) => [...pre, ...res.data]);
            }
            setHasMore(res?.pagination?.total_pages > pageNo);
            setPage(pageNo);
        }
        setLoading(false);
    };

    useEffect(() => {
        loadFeeds(1);
    }, []);

    const handleLoadMore = () => {
        if (!hasMore || loading) return;
        const nextPage = page + 1;
        loadFeeds(nextPage);
    };

    return (
        <div className="container mt-4">
            <Loader show={loading} />
            <h4 className="fw-semibold mb-4 text-start">My Project</h4>
            <Tabs
                defaultActiveKey="inprogress"
                className="custom-tabs mb-4 border-0"
            >
                <Tab
                    eventKey="inprogress"
                    title={
                        <span className="d-flex align-items-center gap-2">
                            <InProgressIcon />
                            In Progress
                        </span>
                    }
                >
                    <div className="row mt-3">
                        {feeds.map((post) => (
                            <div className="col-md-3" key={`${post.id}_${post.post_type}`}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </Tab>

                <Tab
                    eventKey="upcoming"
                    title={
                        <span className="d-flex align-items-center gap-2">
                            <UpcomingIcon />
                            Upcoming
                        </span>
                    }
                >
                    <div className="row mt-3">
                        {feeds.map((post) => (
                            <div className="col-md-3" key={`${post.id}_${post.post_type}`}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </Tab>
            </Tabs>



            {hasMore && (
                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={handleLoadMore}
                        disabled={loading}
                    >
                        Load More
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyProject;
