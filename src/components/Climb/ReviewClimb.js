import React from "react";
import { useFirestore } from "react-redux-firebase";



function ReviewClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  function editClimbToFirestore(event) {
    const reviews = climb.review
    const oldReviews = [...reviews]
    event.preventDefault();
    const newReview = event.target.review.value;
    const allReviews = oldReviews.concat(newReview)
    const propertiesToUpdate =
    {
      review: allReviews
    }
    console.log(climb.review)
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate)
  }
  console.log(climb);

  return (
    <>
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