import firebase from "firebase/app";
import React, { useState } from "react";


function SignInMember(props) {
  let auth = (firebase.auth().currentUser)



  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
      console.log("Successfully signed in!");
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <p>{auth}</p>
      <p> Password must be longer than 6 characters</p>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='signinEmail'
          placeholder='email' />
        <input
          type='password'
          name='signinPassword'
          placeholder='Password' />
        <button className="btn" type='submit'>Sign in</button>
      </form>
    </React.Fragment>
  )
}

export default SignInMember;