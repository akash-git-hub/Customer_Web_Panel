import PostCard from "../../../../component/PostCard";
import { useEffect, useState } from "react";
import { Loader } from "../../../../component/Loader";
import { fetchFeeds } from "../../../../services/NetworkCall";

const CustomerHome = () => {
    
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
            setHasMore(res?.pagination?.total_pages > pageNo ? true : false);
            setPage(pageNo);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadFeeds(1);
    }, []);

    const handleLoadMore = () => {
        if (!hasMore || loading) return;

        const nextPage = page + 1;
        setPage(nextPage);
        loadFeeds(nextPage);
    };

    return (
        <div className="container mt-4">
            <Loader show={loading} />
            <div className="row">
                {feeds.map((post) => (
                    <div className="col-md-3" key={`${post.id}_${post.post_type}`}>
                        <PostCard post={post} />
                    </div>
                ))}
            </div>
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

export default CustomerHome;