import React from "react";
import "./home.css";
import photo from "../images/code.jpeg";

const Home = () => (
  <div className="home-cont">
    <img className="home-photo" src={photo} alt="code image" />
    <p className="home-disc">"Are you ready?? Let`s get started)))"</p>
  </div>
);

export default Home;
