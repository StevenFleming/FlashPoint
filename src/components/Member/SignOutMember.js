
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
      <button className="btn" onClick={doSignOut}> SignOut</button>
    </React.Fragment>
  )
}

export default SignOutMember;
