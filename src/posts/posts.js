import React, { Component, useReducer } from "react";
import PostsRender from "./postsRender";
import "./posts.css";
import Boy from "../images/boy.jpg";
import Girl from "../images/girl.jpg";
import Girl2 from "../images/sea.jpeg";
import Serfing from "../images/serfing.jpeg";
import Cat from "../images/cat.jpeg";
import Iland from "../images/iland.jpeg";

class Posts extends Component {
  state = {
    users: [
      {
        avatar: Boy,
        name: "Marko Polo",
        date: "26.05.2020",
        discription: "What a prity time, I had...",
        photo: Serfing,
      },
      {
        avatar: Girl,
        name: "Lora Bauer",
        date: "29.06.2020",
        discription: "My sweety... Happy birthday) Love you so mach. ",
        photo: Cat,
      },
      {
        avatar: Girl2,
        name: "Diana Tonkin",
        date: "15.07.2020",
        discription: "Wanna go back(",
        photo: Iland,
      },
    ],
  };

  render() {
    return (
      <div className="wrapper">
        {this.state.users.map((user) => (
          <PostsRender
            avatar={user.avatar}
            nick={user.name}
            date={user.date}
            photo={user.photo}
            discription={user.discription}
          />
        ))}
      </div>
    );
  }
}
export default Posts;
