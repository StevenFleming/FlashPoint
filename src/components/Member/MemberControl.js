import React from "react";
import '.././App.css'
import NewMemberForm from "./MemberControl"
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";


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
      <SignInMember />
    </>
  );
}

export default MemberControl