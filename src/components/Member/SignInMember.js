import firebase from "firebase/app";
import React from "react";
import swal from 'sweetalert2';

function SignInMember() {
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      function () {
        console.log("Successfully signed in!");
        swal.fire(
          'Successfully signed up!',
        )
      }).catch(function (error) {
        swal.fire(error.message,
        );
      });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
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