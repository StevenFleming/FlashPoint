import React from "react";
import { useFirestore } from "react-redux-firebase";
import PropTypes from "prop-types";

function SendClimb(props) {
  const { climb, member } = props;
  console.log("from sendClimb", member)
  const firestore = useFirestore();

  function SendClimbToFireStore(event) {
    event.preventDefault();
    const propertiesToUpdateSend =
    {
      attempts: climb.attempts + 1,
      sends: climb.sends + 1
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateSend)
  }

  function SendClimbToFirestoreMember(event) {
    const attempts = member.attempts
    const oldattempts = [...attempts]
    const updatedAttempts = oldattempts.concat(climb.id)
    const sends = member.sends
    const oldSends = [...sends]
    const newSends = oldSends.concat(climb.id)
    event.preventDefault();
    const propertiesToUpdateMember =
    {
      attempts: updatedAttempts,
      sends: newSends
    }

    const propertiesToUpdateSend =
    {
      attempts: climb.attempts + 1,
      sends: climb.sends + 1
    }
    return firestore.update({ collection: 'members', doc: member.id }, propertiesToUpdateMember), firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateSend)
  }

  if (member) {
    return (
      <React.Fragment>
        <button class="btnSend" onClick={SendClimbToFirestoreMember} >Send Climb </button>
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <button class="btnSend" onClick={SendClimbToFireStore}>Send Climb </button>
      </React.Fragment >
    )
  }
}

SendClimb.proptype = {
  climb: PropTypes.obj,
  member: PropTypes.obj
}


export default SendClimb;