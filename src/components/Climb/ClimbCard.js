import React from "react";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import ClimbInfo from "./ClimbInfo"


function ClimbCard(props) {
  const { climb, onClimbClicked } = props;

  return (
    <React.Fragment>
      <div onClick={() => onClimbClicked(climb.id)}>
        <h2>{climb.title}</h2>
        <hr />
      </div>
    </React.Fragment>
  )
}

export default ClimbCard