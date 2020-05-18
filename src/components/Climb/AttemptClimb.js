import React from "react";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";



function AttemptClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();



  function attemptClimbToFirestore(event) {
    event.preventDefault();
    const propertiesToUpdateAttempt =
    {
      attempts: climb.attempts + 1
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateAttempt)
  }

  return (
    <React.Fragment>
      <button onClick={attemptClimbToFirestore}>Attempt this Climb</button>
    </React.Fragment >
  )
}

export default AttemptClimb;