import React from "react";
import { useFirestore } from "react-redux-firebase";



function ReviewClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  function editClimbToFirestore(event) {

    event.preventDefault();
    const propertiesToUpdate =
    {
      reviews: event.target.review.value,
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate)
  }

  return (
    <>
      <h4>Edit {climb.title}!</h4>
      <form onSubmit={editClimbToFirestore}>
        <div className="form-group">
          <label>
            <b>Leave a Review for {climb.setter}'s route {climb.title}'
          </b>
          </label>
          <input className="form-control" type="text" name="review" placeholder="Review" />
          <br />
        </div>
        <button className="btn" type="submit">Add Review</button>
      </form>
    </>
  );
}

export default ReviewClimb;