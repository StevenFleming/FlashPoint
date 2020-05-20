import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";
import firebase from "firebase/app";
import { isLoaded } from "react-redux-firebase";





function MemberControl() {

  let auth = (firebase.auth().currentUser);
  console.log("from MemberControl ---------", auth)


  function setVisibleComponentWithAuth() {
    return (
      <>
        <SignOutMember />
      </>
    )
  }

  function setVisibleComponentNoAuth() {
    return (
      <>
        <SignUpMember />
        <SignInMember />
        <MemberForm />
        <SignOutMember />
      </>
    )

  }


  let ComponentWithNoAuth = setVisibleComponentNoAuth()
  let ComponentWithAuth = setVisibleComponentWithAuth()

  if (auth !== null) {
    return (
      <>
        {ComponentWithAuth}
      </>
    )

  } else {
    return (
      <>
        {ComponentWithNoAuth}
      </>
    )
  }
}
export default MemberControl


