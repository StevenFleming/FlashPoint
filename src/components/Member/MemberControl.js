import React from 'react';
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";
import firebase from "firebase/app";
import MemberDetails from "./MemberDetails";
import PropTypes from "prop-types";


function MemberControl(props) {
  const { member } = props
  let auth = (firebase.auth().currentUser);
  function setVisibleComponentNoAuth() {
    return (
      <div>
        <>
          <div > <SignUpMember /></div>
          <div >  <SignInMember /></div>
        </>
      </div >
    )
  }

  let ComponentWithNoAuth = setVisibleComponentNoAuth()

  if (auth !== null && member !== undefined) {
    return (
      <>
        <MemberDetails member={member} />
        <hr />
      </>
    )

  } else if (auth !== null && member == undefined) {
    return (
      <>
        <MemberForm />
        <hr />
      </>
    )
  } else {
    return (
      <>
        {ComponentWithNoAuth}
        <hr />
      </>
    )
  }
}

MemberControl.proptype = {
  member: PropTypes.obj
}

export default MemberControl


