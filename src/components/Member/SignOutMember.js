
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
      <button className="btnSignOut" onClick={doSignOut}> SignOut</button>
    </React.Fragment>
  )
}

export default SignOutMember;
