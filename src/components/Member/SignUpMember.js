import React from "react";
import firebase from "firebase/app";


function SignUpMember() {
  const auth = firebase.auth();
  function doSignUp(event) {

    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.displayName.value;
    firebase.auth().createUserWithEmailAndPassword(email, password, displayName).then(function () {
      console.log("successfully signed up!");
      console.log("coming from Sign Up Member", auth.currentUser)
    }).catch(function (error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}
export default SignUpMember;
