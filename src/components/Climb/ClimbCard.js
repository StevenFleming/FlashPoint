import React from "react";
import AttemptClimb from './AttemptClimb';
import ReviewClimb from "./ReviewClimb";
import SendClimb from "./SendClimb";
import swal from "sweetalert2";


function ClimbCard(props) {

  function climbDeleted() {
    swal.fire(
      'Climb Deleted',
    )
  }

  const { climb, editClimb, handleClimbingInfo, handleClickToDeleteClimb, member } = props;

  if (climb !== null)
    return (
      <React.Fragment>
        <div>
          <button onClick={() => editClimb(climb.id)}>Edit this Climb</button>
          <button onClick={() => handleClimbingInfo(climb.id)}>See Info on this Climb</button>
          <button onClick={() => handleClickToDeleteClimb(climb.id)} > Delete Climb from FiresStore</button>
          <h2>{climb.title}</h2>
          <AttemptClimb member={member} climb={climb} />
          <SendClimb member={member} climb={climb} />
          <ReviewClimb member={member} climb={climb} />
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