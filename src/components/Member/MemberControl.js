import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import SignUpMember from "./SignUpMember";


class MemberControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  setVisibleComponent = () => {
    return (
      <>
        <SignUpMember />
        <SignInMember />
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