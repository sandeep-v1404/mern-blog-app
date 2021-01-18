import React from "react";
import "./Blog.css";
export default function Blog({
  blog: {
    selectedFile,
    creator,
    title,
    description,
    tags,
    createdOn,
    likeCount,
  },
}) {
  const date = new Date(createdOn);
  return (
    <div className="blog">
      <div className="blog__image">
        <img src={selectedFile} alt="" />
      </div>
      <div className="blog__info">
        <div className="blog__date">
          <span>{date.getDate()}</span>
          <span>/{date.getMonth() + 1}</span>
          <span>/{date.getFullYear()}</span>
        </div>
        <h1 className="blog__title">{title}</h1>
        <p className="blog__description">{description}</p>
        <div className="blog__link">
          <a href="#"> Read More</a>
        </div>
        <p className="blog__creator">by {creator}</p>
      </div>
    </div>
  );
}
