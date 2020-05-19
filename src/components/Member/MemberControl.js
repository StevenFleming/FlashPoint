import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import SignUpMember from "./SignUpMember";
import firebase from 'firebase/app';
import MemberForm from "./MemberForm";



class MemberControl extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      memberFormView: false
    };
  }

  handleDisplayMemberForm = () => {
    this.setState({ memberFormView: true })
    console.log("from MemberControl memberFormView should be true", this.state.memberFormView)
  }

  handleDisplayDefaultMemberControl = () => {
    this.setState({ memberFormView: false })
    console.log("from MemberControl memberFormView should be false", this.state.memberFormView)
  }


  setVisibleComponent = () => {
    if (firebase.auth().currentUser !== null && this.state.memberFormViewmemberFormView === true) {
      return (
        <>
          <MemberForm />
          <SignOutMember hidMemberForm={this.handleDisplayDefaultMemberControl} />
        </>
      )
    }
    else {
      return (
        <>
          <SignUpMember displayMemberForm={this.handleDisplayMemberForm} />
          <SignInMember displayMemberForm={this.handleDisplayMemberForm} />
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