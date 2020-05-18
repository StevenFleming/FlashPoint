import React from "react";
import { useFirestore } from "react-redux-firebase";



function AttemptClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  function attemptClimbToFirestore(event) {
    event.preventDefault();

    const propertiesToUpdateAttempt =
    {
      attempts: climb.attempts + 1,
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateAttempt)
  }

  function sendClimbToFireStore(event) {
    event.preventDefault();

    const propertiesToUpdateSend =
    {
      attempts: climb.attempts + 1,
      sends: climb.sends + 1
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateSend)
  }

  return (
    <React.Fragment>
      <button onClick={sendClimbToFireStore}>SendClimb</button>
      <button onClick={attemptClimbToFirestore}>AttemptClimb</button>
    </React.Fragment >
  )
}

export default AttemptClimb;