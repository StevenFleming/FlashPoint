import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import ClimbCard from "./ClimbCard";
import PropTypes from "prop-types";

function ClimbList(props) {
  useFirestoreConnect([
    { collection: 'climbs' }
  ])


  const climbs = useSelector(state => state.firestore.ordered.climbs)

  if (isLoaded(climbs)) {
    return (
      <React.Fragment>
        <br />
        <br />
        <h1><b> Seattle Bouldering Project's Climbs</b></h1>
        {climbs.map((climb) => {
          return <ClimbCard
            member={props.member}
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
  onClimbSelection: PropTypes.func,
  member: PropTypes.obj,
  handleEditClimb: PropTypes.func,
  handleClimbingInfo: PropTypes.func
}

export default ClimbList;
