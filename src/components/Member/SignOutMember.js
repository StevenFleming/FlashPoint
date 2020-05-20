
import React from "react";
import firebase from "firebase/app";


function SignOutMember() {
  const auth = firebase.auth();
  function doSignOut() {
    firebase.auth().signOut().then(function () {
      console.log("Successfully signed out!");
      console.log("coming from SignOutMember", auth.currentUser)
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <button className="btn" onClick={doSignOut}> SignOut</button>
      <p>{auth.currentUser}</p>
    </React.Fragment>
  )
}

export default SignOutMember;
