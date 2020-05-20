import React from "react";
import firebase from 'firebase/app';
import { useSelector } from "react-redux";

import { useFirestore, useFirestoreConnect, isLoaded } from "react-redux-firebase";

function SendClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  useFirestoreConnect([{
    collection: 'members'
  }])
  const members = useSelector(state => state.firestore.ordered.members);

  if (isLoaded(members)) {
    const currentMember = members.filter((member) => member.authID === firebase.auth().currentUser.uid);
    console.log("---------------", currentMember[0].authID)

    const propertiesToUpdateMember = {
      attempts: ["testing"],
      sends: ["testing"],
    }
    firestore.update({ collection: 'members', doc: currentMember[0].authID }, propertiesToUpdateMember);

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
      <button onClick={sendClimbToFireStore}>Send Climb</button>

    </React.Fragment >
  )
}

export default SendClimb;

//    firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     return (
//       <React.Fragment>
//         <button onClick={sendClimbToFireStore}>SendClimb</button>
//       </React.Fragment >
//     )
//   } else {
//     return (
//       <p>Sign in as a user to send {climb.title}</p>
//     )
//   }
// }
//   );