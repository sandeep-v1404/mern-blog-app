import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./components/Blogs/Blogs";
import Form from "./components/Form/Form";
import { getBlogs } from "./actions/blogs";
import Navigationbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth";
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
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/publish" component={Form} />
          <Route path="/" exact component={Blogs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
