
import firebase from "firebase/app";
import React, { useState } from 'react';



function SignUpMember(props) {


  const auth = firebase.auth();

  function doSignUp(event) {

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {

      console.log("successfully signed up!");
      console.log("coming from Sign Up Member", auth.currentUser)
    }).catch(function (error) {
      console.log(error.message);
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
        <input
          type='text'
          name='displayName'
          placeholder='Name' />
        <button type='submit'>Sign up</button>
      </form>
    </>
  )
}
export default SignUpMember;
