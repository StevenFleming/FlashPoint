import React from "react";
import AttemptClimb from './AttemptClimb';
import ReviewClimb from "./ReviewClimb";
import SendClimb from "./SendClimb";
import swal from "sweetalert2";


function ClimbCard(props) {
  const { climb, editClimb, handleClimbingInfo, handleClickToDeleteClimb, member } = props;

  if (climb !== null)
    return (
      <React.Fragment>

        <div>
          <h2>{climb.title}</h2>
          <p>{climb.grade}</p>
          <p>Set by: {climb.setter}</p>
          <ReviewClimb member={member} climb={climb} />
        </div>
        <hr />
        <AttemptClimb member={member} climb={climb} />
        <SendClimb member={member} climb={climb} />
        <div>
          <hr />
          <button class="btn" onClick={() => editClimb(climb.id)}>Edit this Climb</button>
          <button class="btn" onClick={() => handleClimbingInfo(climb.id)}>See Info on this Climb</button>
          <button class="btn" onClick={() => handleClickToDeleteClimb(climb.id)} > Delete Climb from FiresStore</button>
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