import React from 'react';
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";
import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded } from "react-redux-firebase";
import MemberDetails from "./MemberDetails";


function MemberControl() {

  useFirestoreConnect([{
    collection: 'members'
  }])


  const members = useSelector(state => state.firestore.ordered.members);
  let auth = (firebase.auth().currentUser);

  function GetFirebaseMember() {
    if (isLoaded(members) && (auth !== null)) {
      const firebaseMember = members.filter((member) => member.authID === firebase.auth().currentUser.uid);
      if (firebaseMember !== null) {
        return firebaseMember[0]
      }
      else {
        return "not yet mounted"
      }
    }
  }
  let thisMember = GetFirebaseMember();

  function setVisibleComponentNoAuth() {
    return (
      <>
        <SignUpMember />
        <SignInMember />
        <MemberForm />
      </>
    )
  }


  let ComponentWithNoAuth = setVisibleComponentNoAuth()

  if (auth !== null && thisMember !== undefined) {
    return (
      <>
        <SignOutMember />
        <MemberDetails member={thisMember} />
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


