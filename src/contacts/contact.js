import React, { Component } from "react";

const Cont = (props) => (
  <div className="contacts-cont">
    <div className="wrap">
      <span className="item">{props.firstName}</span>
      <span className="item">{props.lastName}</span>
      <span className="item phone">{props.phone}</span>
      <img className="gender-icon" src={props.gender} alt="gender-img" />
    </div>
  </div>
);
export default Cont;
