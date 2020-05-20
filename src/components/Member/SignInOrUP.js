import firebase from "firebase/app";
import React from "react";

function SignInMember() {

  function alreadySignedUp() {

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