import React from "react";
import { useFirestore } from "react-redux-firebase";




function AttemptClimb(props) {

  const { climb, member } = props;
  const firestore = useFirestore();
  console.log("--------- from attempt Climb", member)



  function attemptClimbToFirestore(event) {
    event.preventDefault();
    const propertiesToUpdateAttempt =
    {
      attempts: climb.attempts + 1
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateAttempt)
  }

  function attemptClimbToFirestoreMember(event) {

    event.preventDefault();

    const propertiesToUpdateMember =
    {
      attempts: ["newString"]
    }
    console.log("attemptClimbToFirestoreMember fired off should update member.attempts to be newString")
    return firestore.update({ collection: 'members', doc: member.id }, propertiesToUpdateMember)
  }

  return (
    <React.Fragment>
      <button onClick={attemptClimbToFirestore, attemptClimbToFirestoreMember}>Attempt this Climb</button>
    </React.Fragment >
  )
}

export default AttemptClimb;