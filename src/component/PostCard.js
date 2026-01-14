import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import HeartIcon from "../Icon/HeartIcon";
import FillHeartIcon from "../Icon/FillHeartIcon";
import CommentIcon from "../Icon/CommentIcon";
import ShareIcon from "../Icon/ShareIcon";
import { useNavigate } from "react-router-dom";


const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(post.likes || 0);
    const [comments, setComments] = useState(post.comments || []);
    const [commentText, setCommentText] = useState("");
    const navigate = useNavigate();


    const handleLike = () => {
        setLiked((prev) => !prev);
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
    };

    const handleComment = () => {
        if (!commentText.trim()) return;

        setComments([
            ...comments,
            { user: "Customer", text: commentText },
        ]);
        setCommentText("");
    };

    return (
        <Card className="shadow-md border-0 rounded-4 mb-4" onClick={() =>
            navigate("/project-detail")
        }>
            <Card.Body>
                {/* USER */}
                <div className="d-flex align-items-center mb-1">
                    <img
                        src={post.avatar}
                        alt="user"
                        className="rounded-circle me-2"
                        width={40}
                        height={40}
                    />
                    <div className="d-flex align-items-center gap-2">
                        <h6 className="mb-0 fw-bold">{post.name}</h6>
                        <small className="text-muted">{post.date}</small>
                    </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-muted text-start mb-1 text-ellipsis">{post.description}</p>

                {/* IMAGE */}
                <img
                    src={post.image}
                    alt="project"
                    className="w-100 rounded-3 mb-3"
                    style={{
                        height: '160px',
                        objectFit: 'cover'
                    }}
                />

                {/* ACTIONS */}
                <div className="d-flex justify-content-between align-items-center mb-1 px-1">
                    {/* LIKE */}
                    <div
                        className="d-flex align-items-center gap-2 cursor-pointer"
                        onClick={handleLike}
                    >
                        {liked ? (
                            <FillHeartIcon />
                        ) : (
                            <HeartIcon />
                        )}
                        <small className="fw-medium">{likes}</small>
                    </div>

                    {/* COMMENT */}
                    <div className="d-flex align-items-center gap-2 cursor-pointer">
                        <CommentIcon />
                        <small className="fw-medium">{comments.length}</small>
                    </div>

                    {/* SHARE */}
                    <div className="d-flex align-items-center gap-2 cursor-pointer">
                        <ShareIcon />
                        <small className="fw-medium">Share</small>
                    </div>
                </div>

                {/* COMMENTS */}
                {comments.length > 0 && (
                    <div className="mb-3">
                        {comments.map((c, i) => (
                            <div key={i} className="d-flex gap-2 small mb-1">
                                <strong>{c.user}</strong>
                                <span className="text-muted">{c.text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default PostCard;
