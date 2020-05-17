import React from "react";

function ClimbInfo(props) {
  const { climb } = props;
  return (
    <React.Fragment>
      <h1>{climb.title} </h1>
      <p> Grade: {climb.grade}</p>
      <p> Incline: {climb.incline}</p>
      <p> Gym: {climb.gym}</p>
      <p> Setter: {climb.setter}</p>
    </React.Fragment>
  )
}

export default ClimbInfo;