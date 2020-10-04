import React from "react";
import "./App.css";
import Home from "./home/home";
import Posts from "./posts/posts";
import { Route, Switch } from "react-router-dom";
import Manu from "./manu/manu";
import Photos from "./photos/photos";
import { Contacts, Info } from "./contacts/contacts";
import Inf from "./contacts/info";

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
        <Route exact path="/contacts">
          <Contacts />
        </Route>
        <Route path={"/info/:storyId"} exact component={Inf} />
      </Switch>
    </>
  );
}

export default App;
