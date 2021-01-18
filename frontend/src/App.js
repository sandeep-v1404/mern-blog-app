import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./components/Blogs/Blogs";
import Form from "./components/Form/Form";
import { getBlogs } from "./actions/blogs";
import Navigationbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
    return () => {};
  }, [dispatch]);
  return (
    <Router>
      <div className="app">
        <Navigationbar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/publish" component={Form} />
          <Route path="/" exact component={Blogs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
