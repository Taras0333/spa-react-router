import React, { Component } from "react";
import Cont from "./contact";
import maleLogo from "./images/male.svg";
import femaleLogo from "./images/female.svg";
import anonimus from "./images/anonimus.svg";
import "./contacts.css";
import { NavLink, Link } from "react-router-dom";

const Info = [
  {
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
    info: "hi is a young 23 years old boy",
  },
  {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
    info: "best coder in USA",
  },
  {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
    info: "unknown user",
  },
  {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
    info: "beautiful lady",
  },
  {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
    info: "came to Ukraine from Asia",
  },
  {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male",
    info: "likes to read comics",
  },
];

class Contacts extends Component {
  state = {
    contacts: [...Info],
  };

  setImg = (gender) => {
    if (gender === "male") {
      return maleLogo;
    } else if (gender === "female") {
      return femaleLogo;
    } else {
      return anonimus;
    }
  };

  find = (e) => {
    this.setState({
      contacts: [
        ...Info.filter((el) => {
          return (
            el.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
            el.phone.includes(e.target.value)
          );
        }),
      ],
    });
  };

  render() {
    return (
      <div className="wr">
        <input
          className="input"
          placeholder="find person"
          onChange={this.find}
        ></input>

        {this.state.contacts.map((contact) => (
          <Cont
            firstName={contact.firstName}
            lastName={contact.lastName}
            phone={contact.phone}
            gender={this.setImg(contact.gender)}
            info={contact.info}
            key={contact.id}
            id={contact.id}
          />
        ))}
      </div>
    );
  }
}
export { Contacts, Info };
