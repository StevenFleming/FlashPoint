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

  handleSelectingCurrentMember = (id) => {
    this.props.firestore.get({ collection: "members", doc: id })
      .then((member) => {
        const firestoreMember = {
          name: member.get("title"),
          attempts: member.get("attempts"),
          gymMemberShip: member.get("gymMemberShip"),
          timeCreated: member.get("timeCreated"),
          authID: member.get("authID")
        }
        this.setState({ currentMember: firestoreMember });
      })
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

