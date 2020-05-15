import React from "react";

function ClimbInfo(props) {
  const { climb } = props;
  return (
    <React.Fragment>
      <h1>Selected Climb is {climb.title} </h1>
      <p> Display this</p>
    </React.Fragment>
  )
}

export default ClimbInfo;