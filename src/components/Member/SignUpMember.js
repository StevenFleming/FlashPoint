
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
    <>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>
    </>
  )
}
export default SignUpMember;
