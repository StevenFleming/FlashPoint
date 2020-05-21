import React from "react";
import { useFirestore } from "react-redux-firebase";
import swal from "sweetalert2"


function ReviewClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();

  function climbReviewed() {
    swal.fire(
      'Added Review to Climb',
    )
  }


  const climbReviews = climb.reviews
  console.log(climbReviews)

  function reviewClimbToFirestore(event) {
    event.preventDefault();
    const climbReviews = climb.reviews
    const oldReviews = [...climbReviews]
    const newReview = event.target.review.value;
    const allReviews = oldReviews.concat(newReview)
    const propertiesToUpdate =
    {
      reviews: allReviews
    }
    console.log("from ReviewClimb climb", climb)
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate).then(climbReviewed()).catch(function (error) {
      swal.fire(
        error.message,
      )
    });

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