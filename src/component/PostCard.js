import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import HeartIcon from "../Icon/HeartIcon";
import FillHeartIcon from "../Icon/FillHeartIcon";
import CommentIcon from "../Icon/CommentIcon";
import ShareIcon from "../Icon/ShareIcon";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";


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
        <Card
            className="shadow-md border-0 rounded-4 mb-4"
            // onClick={() =>
            //     navigate("/project-detail")
            // }
        >
            <Card.Body>
                {/* USER */}
                <div className="d-flex align-items-center mb-1">
                    <img
                        src={post.profileImg}
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

                <p>{post.post_title}</p>
                {/* DESCRIPTION */}
                <p className="text-muted text-start mb-1 text-ellipsis">{post.text}</p>

                {/* IMAGE */}
                {Array.isArray(post.media) && post.media.length > 0 && (
                    <Carousel
                        indicators={post.media.length > 1}
                        controls={post.media.length > 1}
                        interval={null}
                        className="mb-3"
                    >
                        {post.media.map((item, index) => (
                            <Carousel.Item key={index}>
                                {item.type === "image" && (
                                    <img
                                        src={item.uri}
                                        alt={`media-${index}`}
                                        className="w-100 rounded-3"
                                        style={{
                                            height: "160px",
                                            objectFit: "cover",
                                        }}
                                    />
                                )}

                                {item.type === "video" && (
                                    <video
                                        src={item.uri}
                                        controls
                                        className="w-100 rounded-3"
                                        style={{
                                            height: "160px",
                                            objectFit: "cover",
                                        }}
                                    />
                                )}
                            </Carousel.Item>
                        ))}
                    </Carousel>
                )}

                {/* ACTIONS */}
                <div className="d-flex justify-content-between align-items-center mb-1 px-1">
                    {/* LIKE */}
                    <div
                        className="d-flex align-items-center gap-2 cursor-pointer"
                        onClick={handleLike}
                    >
                        {post.isLike ? (
                            <FillHeartIcon />
                        ) : (
                            <HeartIcon />
                        )}
                        <small className="fw-medium">{post.likes}</small>
                    </div>

                    {/* COMMENT */}
                    <div className="d-flex align-items-center gap-2 cursor-pointer">
                        <CommentIcon />
                        <small className="fw-medium">{post.comments}</small>
                    </div>

                    {/* SHARE */}
                    {/* <div className="d-flex align-items-center gap-2 cursor-pointer">
                        <ShareIcon />
                        <small className="fw-medium">Share</small>
                    </div> */}
                </div>

                {/* COMMENTS */}
                {post.comments_text.length > 0 && (
                    <div className="mb-3">
                        {post.comments_text.map((c, i) => (
                            <div key={i} className="d-flex gap-2 small mb-1">
                                <img
                                    src={c.user_profile}
                                    alt={c.user_name}
                                    className="rounded-circle mb-3"
                                    width={30}
                                    height={30}
                                />
                                <strong>{c.user_name}</strong>
                                <span className="text-muted">{c.comment}</span>
                            </div>
                        ))}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default PostCard;
