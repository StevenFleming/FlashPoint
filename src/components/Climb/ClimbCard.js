import React from "react";
import AttemptClimb from './AttemptClimb'


function ClimbCard(props) {
  const { climb, editClimb, handleClimbingInfo, handleClickToDeleteClimb } = props;

  if (climb !== null)
    return (
      <React.Fragment>
        <div>
          <button onClick={() => editClimb(climb.id)}>Edit this Climb</button>
          <button onClick={() => handleClimbingInfo(climb.id)}>See Info on this Climb</button>
          <button onClick={() => handleClickToDeleteClimb(climb.id)}> Delete Climb from FiresStore</button>
          <h2>{climb.title}</h2>
          <AttemptClimb climb={climb} />
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