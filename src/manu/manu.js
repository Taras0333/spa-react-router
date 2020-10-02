import React from "react";
import "./manu.css";
import { NavLink } from "react-router-dom";

const Manu = () => (
  <div className="manu-wrap">
    <NavLink to="/" activeClassName="active">
      <button className="btns">Home</button>
    </NavLink>
    <NavLink to="/posts" activeClassName="active">
      <button className="btns">Posts</button>
    </NavLink>
    <NavLink to="/photos" activeClassName="active">
      <button className="btns">Photos</button>
    </NavLink>
  </div>
);

export default Manu;
