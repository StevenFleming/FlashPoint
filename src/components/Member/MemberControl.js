import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import MemberForm from "./MemberForm";
import SignUpMember from "./SignUpMember";




class MemberControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentMember: null,
    };
  }



  setVisibleComponent = () => {
    return (
      <>
        <SignUpMember />
        <SignInMember />
        <MemberForm />
        <SignOutMember />
      </>
    )
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

