import React from "react";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import ClimbInfo from "./ClimbInfo"


function ClimbCard(props) {
  const { climb, onClimbClicked, editClimb } = props;


  return (
    <React.Fragment>
      {/* <button onClick={editClimb()}>Edit this Climb</button> */}
      <div onClick={() => onClimbClicked(climb.id)}>
        <h2>{climb.title}</h2>
        <hr />
      </div>
    </React.Fragment>
  )
}

export default ClimbCard