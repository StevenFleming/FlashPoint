import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import ClimbCard from "./ClimbCard";
import PropTypes from "prop-types";

function ClimbList(props) {

  useFirestoreConnect([
    { collection: 'climbs' }
  ])


  const climbs = useSelector(state => state.firestore.ordered.climbs)

  if (isLoaded(climbs)) {
    console.log("full collection of Climbs", climbs);
    return (
      <React.Fragment>
        <br />
        <br />
        <h1><b>All Climb's</b></h1>
        <hr />
        {climbs.map((climb) => {
          return <ClimbCard
            editClimb={props.handleEditClimb}
            climb={climb}
            key={climb.id}
            handleClickToDeleteClimb={props.handleClickToDeleteClimb}
            handleClimbingInfo={props.handleClimbingInfo}
          />
        })}
      </React.Fragment>
    )
  } else {
    return <React.Fragment>
      <h4>Loading...</h4>
    </React.Fragment>
  }
}


ClimbList.proptype = {
  onClimbSelection: PropTypes.func
}

export default ClimbList;
