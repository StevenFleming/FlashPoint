import React from "react";
import '.././App.css'
import NewMemberForm from "./MemberControl"
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import SignOutMember from "./SignOutMember";


class MemberControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
}


setVisibleComponent = () => {
  return (
    <>
      <SignUpMember />
      <SignInMember />
      <SignOutMember />
    </>
  );
}

export default MemberControl