import React from "react";


function AttemptClimb(props) {
  const { climb } = props;

  function attemptClimbToFirestore(event) {
    event.preventDefault();

    const propertiesToUpdate =
    {
      attempts: attempts + 1,
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