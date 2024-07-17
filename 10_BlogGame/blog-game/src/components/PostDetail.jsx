import styles from "./postdetail.module.css";

import { Link } from "react-router-dom";

import React from "react";

const PostDetail = ({ post }) => {
  return (
    <>
   <div className={styles.container_todopost}>
    <div className={styles.image_container}>
    <img src={post.image} alt={post.title} />
    </div>
    <div className={styles.container_post}>        
          <h2> {post.title}</h2>
          <p>Criado por: {post.createdBy}</p>
          <div className={styles.tag_container}>
            {post.tagArray.map((tag) => (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
          <Link to={`/posts/${post.id}`} className={styles.ler_post}>
            Ver Post
          </Link>
      </div>
      </div>
    </>
  );
};

export default PostDetail;
