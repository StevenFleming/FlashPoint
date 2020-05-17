import React from "react";


function ClimbCard(props) {
  const { climb, onClimbClicked, editClimb, handleClimbingInfo } = props;

  if (climb !== null)
    return (
      <React.Fragment>
        <div>
          <button onClick={() => editClimb(climb.id)}>Edit this Climb</button>
          <button onClick={() => handleClimbingInfo(climb.id)}>See Info on this Climb</button>
          <h2>{climb.title}</h2>
          <hr />
        </div>
      </React.Fragment >
    )
  else {
    return (
      <React.Fragment>
        <h1>No Climbs added yet</h1>
      </React.Fragment>
    )
  }
}

export default ClimbCard