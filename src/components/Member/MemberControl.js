import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import SignUpMember from "./SignUpMember";
import firebase from 'firebase/app';
import { isLoaded } from "react-redux-firebase";


class MemberControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    };
  }


  setVisibleComponent = () => {
    if (firebase.auth().currentUser) {
      return (
        <>
          <SignOutMember />
        </>
      )
    }
    else {
      return (
        <>
          <SignUpMember />
          <SignInMember />
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