import React from "react";
import "./App.css";
import Home from "./home/home";
import Posts from "./posts/posts";
import { Route, Switch } from "react-router-dom";
import Manu from "./manu/manu";
import Photos from "./photos/photos";

function App() {
  return (
    <>
      <Manu />{" "}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/photos">
          <Photos />
        </Route>
      </Switch>
    </>
  );
}

export default App;
