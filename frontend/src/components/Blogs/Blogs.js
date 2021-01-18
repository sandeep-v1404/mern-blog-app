import React from "react";
import { useSelector } from "react-redux";
import "./Blogs.css";
import Blog from "./Blog/Blog";
import { Spinner } from "react-bootstrap";
export default function Blogs() {
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  return !blogs.length ? (
    <div className="spinnerCenter">
      <Spinner animation="grow" />
    </div>
  ) : (
    <div>
      {blogs.map((blogInfo) => (
        <Blog key={blogInfo._id} blog={blogInfo} />
      ))}
    </div>
  );
}
