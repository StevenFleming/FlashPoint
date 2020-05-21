import React from "react";
import { useFirestore } from "react-redux-firebase";

function SendClimb(props) {
  const { climb, member } = props;
  console.log("from sendClimb", member)
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




  if (member) {
    return (
      <React.Fragment>
        <button onClick={sendClimbToFireStore} >Send Climb</button>
      </React.Fragment >
    )
  } else {
    return (
      <React.Fragment>
        <button onClick={sendClimbToFireStore}>Send Climb</button>
      </React.Fragment >
    )
  }
}



export default SendClimb;