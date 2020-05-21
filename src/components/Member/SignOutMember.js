
import React from "react";
import firebase from "firebase/app";
import swal from "sweetalert2";


function SignOutMember() {


  function doSignOut() {
    firebase.auth().signOut().then(
      function () {
        swal.fire(
          'Signed Out!',
        )
      }
    )
      .catch(function (error) {
        swal.fire(
          error.message,
        )
      });
  }
  return (
    <React.Fragment>
      <p> Password must be longer than 6 characters</p>
      <button className="btn" onClick={doSignOut}> SignOut</button>
    </React.Fragment>
  )
}

export default SignOutMember;
