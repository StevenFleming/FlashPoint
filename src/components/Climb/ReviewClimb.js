import React from "react";
import { useFirestore } from "react-redux-firebase";



function ReviewClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  const climbReviews = climb.reviews
  console.log(climbReviews)

  function reviewClimbToFirestore(event) {
    event.preventDefault();
    const climbReviews = climb.reviews
    console.log(climbReviews)
    const oldReviews = [...climbReviews]
    const newReview = event.target.review.value;
    console.log("from ReviewClimb newReview", newReview)
    const allReviews = oldReviews.concat(newReview)
    console.log("from ReviewClimb allReviews", allReviews)

    const propertiesToUpdate =
    {
      reviews: allReviews
    }
    console.log("from ReviewClimb climb", climb)
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate)

  }
  return (
    <>
      <form onSubmit={reviewClimbToFirestore}>
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