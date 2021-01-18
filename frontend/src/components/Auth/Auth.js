import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import "./Auth.css";
import Input from "../Input/Input";

export default function Auth() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const switchAuth = () => setIsSignUp((prevAuth) => !prevAuth);
  return (
    <div className="container">
      <div id="authContainer">
        <div className="row">
          <div className="col">
            <nav
              className="navbar navbar-expand-lg navbar-dark"
              id="navbarMenu"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <h5 className="active nav-link">
                    {isSignUp ? "SignUp" : "Login"}
                  </h5>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="content">
          <Button onClick={switchAuth}>
            {isSignUp ? "Already have an Account! Sign In" : "SignUp"}
          </Button>
          {isSignUp ? (
            <Form>
              <Input label="Name" placeholder="Enter Full Name" />
              <Input label="Username" placeholder="Enter Username" />
              <Input label="Email" placeholder="Enter Email" />
              <Input
                label="Password"
                placeholder="Enter Password"
                type={showPassword ? "password" : "text"}
              />
              <label htmlFor="Profile Photo">Profile Photo</label>
              <div>
                <FileBase type="file" multiple={false} />
              </div>
              <Input label="Age" placeholder="Enter Age" />
              <Button id="button" type="submit" onClick={handleSubmit}>
                SignUp
              </Button>
              <Button style={{ marginLeft: "1rem" }} id="button" type="submit">
                Clear
              </Button>
            </Form>
          ) : (
            <Form>
              <Input label="Email" placeholder="Enter Email" />
              <Input
                label="Password"
                placeholder="Enter Password"
                type="password"
              />
              <Button id="button" type="submit" onClick={handleSubmit}>
                Login
              </Button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}
