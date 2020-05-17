
import React from "react";
import firebase from "firebase/app";

function SignOutMember() {

  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <button onClick={doSignOut} />
    </React.Fragment>
  )
}

export default SignOutMember;
