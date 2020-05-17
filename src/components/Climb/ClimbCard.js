import React from "react";
import { useFirestoreConnect, isLoaded, isEmpty, reactReduxFirebase } from "react-redux-firebase";
import ClimbInfo from "./ClimbInfo"


function ClimbCard(props) {
  const { climb, onClimbClicked, editClimb } = props;

  if (climb !== null)
    return (
      <React.Fragment>
        <div>
          <button onClick={() => onClimbClicked(climb.id)}>Select this Climb</button>
          <button onClick={() => editClimb()}>Should set state editClimb to true</button>
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