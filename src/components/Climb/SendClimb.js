import React from "react";
import { useFirestore } from "react-redux-firebase";

function SendClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

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
      <button onClick={sendClimbToFireStore}>Send Climb</button>

    </React.Fragment >
  )
}

export default SendClimb;