import React from "react";
import mes from "../images/134932.svg";
import share from "../images/1251845.svg";
import heart from "../images/929417.svg";
import post from "../images/454545.svg";

const PostsRender = (props) => (
  <div className="post-cont">
    <header className="post-header">
      <img
        className="post-image header-items"
        src={props.avatar}
        alt="avatar-icon"
      />
      <span className="nick header-items">{props.nick}</span>
      <div className="validation header-items">
        <div className="checked"></div>
      </div>
      <span className="date header-items">{props.date}</span>
      <div className="check-icon header-items">
        <div className="arrow"></div>
      </div>
    </header>
    <main className="post-main">
      <img className="post-photo" src={props.photo} alt="content-icon" />
      <div className="main-cont">
        {" "}
        <span className="main-item">{props.discription}</span>
      </div>
    </main>
    <footer className="post-footer">
      <div className="bot-wrap">
        <div className="bot-items">
          <img className="logo" src={heart} alt="heart-icon" />
          <span className="footer-item">887</span>
        </div>
        <div className="bot-items">
          <img className="logo" src={mes} alt="message-icon" />
          <span className="footer-item">482</span>
        </div>
        <div className="bot-items">
          <img className="logo" src={share} alt="share-icon" />
          <span className="footer-item">146</span>
        </div>
        <div className="bot-items">
          <img className="logo" src={post} alt="post-icon" />
        </div>
      </div>
    </footer>
  </div>
);
export default PostsRender;
