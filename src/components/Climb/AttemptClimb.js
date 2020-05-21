import React from "react";
import { useFirestore } from "react-redux-firebase";




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

    console.log("attemptClimbToFirestoreMember fired off should update member.attempts to be newString")
    return firestore.update({ collection: 'members', doc: member.id }, propertiesToUpdateMember)
  }

  if (member) {
    return (

      <React.Fragment>
        <button onClick={attemptClimbToFirestore, attemptClimbToFirestoreMember}>Attempt this Climb</button>
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={attemptClimbToFirestore}>Attempt this Climb</button>
      </React.Fragment >
    )
  }

}



export default AttemptClimb;