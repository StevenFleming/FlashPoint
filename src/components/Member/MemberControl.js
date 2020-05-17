import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import SignUpMember from "./SignUpMember";
import firebase from 'firebase/app';


class MemberControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setVisibleComponent = () => {
    const auth = firebase.auth();
    console.log(auth.currentUser);
    if (auth.currentUser !== null) {
      return (
        <>
          <SignUpMember />
          <SignInMember />
          <SignOutMember />
        </>
      )
    }
    else {
      return (
        <>
          <SignOutMember />
        </>
      )
    }
  }

  render() {
    let currentView = this.setVisibleComponent();
    return (
      <>
        {currentView}
      </>
    )
  }
}

export default MemberControl