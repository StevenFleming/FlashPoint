import React from "react";
import { useFirestore } from "react-redux-firebase";
import swal from "sweetalert2"
import PropTypes from "prop-types";


function ReviewClimb(props) {
  const { climb } = props;
  const firestore = useFirestore();


  function climbReviewed() {
    swal.fire(
      'Added Review to Climb',
    )
  }

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
          <input className="form-control" type="text" name="review" placeholder="Share some vibes with your setter" />
          <br />
        </div>
        <button class="btnReview" type="submit">Leave a Note!</button>
      </form>
    </>
  );
}

ReviewClimb.proptype = {
  climb: PropTypes.obj,
}

export default ReviewClimb;