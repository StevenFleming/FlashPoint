import React from "react";
import { useFirestore } from "react-redux-firebase";



function AttemptClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  function attemptClimbToFirestore(event) {
    event.preventDefault();

    const propertiesToUpdate =
    {
      attempts: climb.attempts + 1,
    }

    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <button onClick={attemptClimbToFirestore}>AttemptClimb</button>
    </React.Fragment >
  )
}

export default AttemptClimb;