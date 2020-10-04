import React, { Component } from "react";
import { Link } from "react-router-dom";

const Cont = (props) => (
  <Link to={`/info/${props.id}`} className="link">
    <div className="contacts-cont">
      <div className="wrap">
        <span className="item">{props.firstName}</span>
        <span className="item">{props.lastName}</span>
        <span className="item phone">{props.phone}</span>
        <img className="gender-icon" src={props.gender} alt="gender-img" />
      </div>
    </div>
  </Link>
);
export default Cont;
