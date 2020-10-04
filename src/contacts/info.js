import React from "react";
import { Info } from "./contacts";

const Inf = (props) => {
  const contactItem = Info.find(
    (contact) => contact.id === +props.match.params.storyId
  );
  return (
    <div className="info-wrap">
      <div className="info-cont">
        {" "}
        <span>{`First Name: ${contactItem.firstName}`}</span>
        <span>{`Last Name: ${contactItem.lastName}`}</span>
        <span>{`Phone: ${contactItem.phone}`}</span>
        <span>{`Gender: ${contactItem.gender}`}</span>
        <span>{`Discription: ${contactItem.info}`}</span>
      </div>
    </div>
  );
};
export default Inf;
