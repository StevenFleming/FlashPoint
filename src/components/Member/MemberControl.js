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
      memberFormView: false
    };
  }

  handleDisplayMemberForm = () => {
    this.setState({ memberFormView: true })
  }

  handleDisplayDefaultMemberControl = () => {
    this.setState({ memberFormView: false })
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