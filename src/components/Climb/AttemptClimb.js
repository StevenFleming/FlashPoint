import React from "react";
import { useFirestore } from "react-redux-firebase";
import PropTypes from "prop-types";



function AttemptClimb(props) {
  const firestore = useFirestore();
  const { climb, member } = props;
  function attemptClimbToFirestore(event) {
    event.preventDefault();
    const propertiesToUpdateAttempt =
    {
      attempts: climb.attempts + 1
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateAttempt)
  }

  function attemptClimbToFirestoreMember(event) {
    const attempts = member.attempts
    const oldattempts = [...attempts]
    const updatedAttempts = oldattempts.concat(climb.id)
    event.preventDefault();
    const propertiesToUpdateMember =
    {
      attempts: updatedAttempts
    }
    const propertiesToUpdateAttempt =
    {
      attempts: climb.attempts + 1
    }
    return firestore.update({ collection: 'members', doc: member.id }, propertiesToUpdateMember), firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateAttempt)
  }

  if (member) {
    return (
      <React.Fragment>
        <button class="btnAttempt" onClick={attemptClimbToFirestoreMember}>Attempt this Climb</button>
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <button class="btnAttempt" onClick={attemptClimbToFirestore}>Attempt this Climb</button>
      </React.Fragment >
    )
  }
}

AttemptClimb.proptype = {
  member: PropTypes.obj,
  climb: PropTypes.obj,
}

export default AttemptClimb;