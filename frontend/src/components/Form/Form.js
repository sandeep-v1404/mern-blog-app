import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createBlog } from "../../actions/blogs";
import "./Form.css";

export default function FormComponent() {
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    creator: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createBlog(blogData));
    console.log(blogData);
  };
  const clearBlogData = (e) => {
    e.preventDefault();
    setBlogData({
      title: "",
      description: "",
      creator: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <div className="container">
      <div id="formContainer">
        <div className="row">
          <div className="col">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              id="navbarMenu"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <h5 className="active nav-link">Publish a Blog</h5>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          <Form>
            <Form.Group controlId="creator">
              <Form.Label>Creator</Form.Label>
              <Form.Control
                type="text"
                className="input"
                placeholder="Creator Name"
                onChange={(e) =>
                  setBlogData({ ...blogData, creator: e.target.value })
                }
                value={blogData.creator}
              />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Title"
                className="input"
                onChange={(e) =>
                  setBlogData({ ...blogData, title: e.target.value })
                }
                value={blogData.title}
              />
            </Form.Group>
            <div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setBlogData({ ...blogData, selectedFile: base64 })
                }
              />
            </div>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                className="inputText"
                rows={5}
                onChange={(e) =>
                  setBlogData({ ...blogData, description: e.target.value })
                }
                value={blogData.description}
              />
            </Form.Group>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                className="input"
                placeholder="Tags"
                onChange={(e) =>
                  setBlogData({ ...blogData, tags: e.target.value })
                }
                value={blogData.tags}
              />
            </Form.Group>
            <Button id="button" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              style={{ marginLeft: "1rem" }}
              id="button"
              type="submit"
              onClick={clearBlogData}
            >
              Clear
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
