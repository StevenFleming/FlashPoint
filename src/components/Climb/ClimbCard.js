import React from "react";
import AttemptClimb from './AttemptClimb';
import ReviewClimb from "./ReviewClimb";
import SendClimb from "./SendClimb";
import PropTypes from "prop-types";

function ClimbCard(props) {
  const { climb, member, editClimb, handleClimbingInfo, handleClickToDeleteClimb } = props;

  if (climb !== null)
    return (
      <React.Fragment>
        <div class="posts">
          <h3>{climb.title} {climb.grade} </h3>
          <p>Set By : {climb.setter}</p>
          <ReviewClimb member={member} climb={climb} />
          <hr />
          <AttemptClimb member={member} climb={climb} />
          <SendClimb member={member} climb={climb} />
          <hr />
          <button class="btn" onClick={() => editClimb(climb.id)}>Edit this Climb</button>
          <button class="btn" onClick={() => handleClimbingInfo(climb.id)}>Info on this Climb</button>
          <button class="btn" onClick={() => handleClickToDeleteClimb(climb.id)} > Delete Climb </button>
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

ClimbCard.proptype = {
  member: PropTypes.obj,
  climb: PropTypes.obj,
  editClimb: PropTypes.func,
  handleClimbingInfo: PropTypes.func,
  handleClickToDeleteClimb: PropTypes.func,
}


export default ClimbCard