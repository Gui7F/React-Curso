import styles from "./postdetail.module.css";

import { Link } from "react-router-dom";

import React from "react";

const PostDetail = ({post}) => {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tagArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn">
        Ler
      </Link>
    </div>
  );
};

export default PostDetail;
