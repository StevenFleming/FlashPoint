import React from "react";
import { useFirestore, isLoaded, authIsReady } from "react-redux-firebase";
import firebase from "firebase/app";



function AttemptClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();
  const user = firebase.auth().currentUser;



  function attemptClimbToFirestore(event) {
    event.preventDefault();
    console.log("from attempt climb", climb.attempts);
    let attempts = climb.attempts;
    console.log(attempts)
    attempts.push("testing string");
    console.log("from AttemptClimb 2nd", attempts);



    const propertiesToUpdateAttempt =
    {
      attempts: ["", "", ""]
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateAttempt)
  }

  function sendClimbToFireStore(event) {
    event.preventDefault();
    const propertiesToUpdateSend =
    {
      attempts: climb.attempts.push(user.email),
      sends: climb.sends.push(user.email)
    }

    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdateSend)
  }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      return (
        <React.Fragment>
          <button onClick={sendClimbToFireStore}>SendClimb</button>
          <button onClick={attemptClimbToFirestore}>AttemptClimb</button>
        </React.Fragment >
      )
    } else {
      return (
        <p>Sign in as a user to attempt the climb</p>
      )
    }
  });

  return (
    <React.Fragment>
      <button onClick={sendClimbToFireStore}>SendClimb</button>
      <button onClick={attemptClimbToFirestore}>AttemptClimb</button>
    </React.Fragment >
  )
}

export default AttemptClimb;