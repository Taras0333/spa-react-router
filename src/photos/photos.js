import React from "react";
import "./photos.css";
import Photo1 from "../images/photo1.jpeg";
import Photo2 from "../images/photo2.jpeg";
import Photo3 from "../images/photo3.jpeg";
import Photo4 from "../images/photo5.jpeg";

const Photos = () => (
  <div className="photos-wrap">
    <div className="photos-row">
      <img className="photo-row" src={Photo1} />
      <img className="photo-row" src={Photo2} />
      <img className="photo-row" src={Photo3} />
      <img className="photo-row" src={Photo4} />
    </div>
  </div>
);

export default Photos;
