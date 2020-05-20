import React, { useState } from 'react';
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";
import firebase from "firebase/app";
import { useSelector } from "react-redux";
import { useFirestore, useFirestoreConnect, isLoaded } from "react-redux-firebase";
import MemberDetails from "./MemberDetails";


function MemberControl() {

  const [currentMember, setCurrentMember] = useState(null);

  useFirestoreConnect([{
    collection: 'members'
  }])


  const firestore = useFirestore();
  const members = useSelector(state => state.firestore.ordered.members);
  let auth = (firebase.auth().currentUser);


  if (isLoaded(members) && (auth !== null)) {
    const currentMember = members.filter((member) => member.authID === firebase.auth().currentUser.uid);
  }

  if (currentMember !== null) {
    setCurrentMember(currentMember[0])
    console.log(currentMember[0])
  }




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


