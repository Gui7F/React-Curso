import styles from "./postdetail.module.css";

import { Link } from "react-router-dom";

import React from "react";

const PostDetail = ({post}) => {
  return (
    <div className={styles.container_post}>
      <img src={post.image} alt={post.title} />
      <h2>Game: {post.title}</h2>
      <p>Criado por: {post.createdBy}</p>
      <div className={styles.tag_container}>
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
