import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";




function MemberControl() {


  function setVisibleComponent() {
    return (
      <>
        <SignUpMember />
        <SignInMember />
        <MemberForm />
        <SignOutMember />
      </>
    )
  }


  let currentView = setVisibleComponent();


  return (
    <>
      {currentView}
    </>
  )


}
export default MemberControl

