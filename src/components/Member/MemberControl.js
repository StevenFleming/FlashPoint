import React from 'react';
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";
import firebase from "firebase/app";
import MemberDetails from "./MemberDetails";


function MemberControl(props) {
  const { member } = props
  let auth = (firebase.auth().currentUser);
  function setVisibleComponentNoAuth() {
    return (
      // Styling Needed
      <>
        <SignUpMember />
        <SignInMember />
        <MemberForm />
      </>
    )
  }

  let ComponentWithNoAuth = setVisibleComponentNoAuth()

  if (auth !== null && member !== undefined) {
    return (
      <>
        <MemberDetails member={member} />
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


