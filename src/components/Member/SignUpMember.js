
import firebase from "firebase/app";
import React from 'react';
import swal from "sweetalert2";


function SignUpMember() {

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      function () {
        swal.fire(
          'Signed Up!',
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
    <>
      <p>New User, Sign Up Here</p>
      <p> Password must be longer than 6 characters</p>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button class="btn" type='submit'>Sign up</button>
      </form>
    </>
  )
}
export default SignUpMember;
