import React from "react";
import '.././App.css'
import SignOutMember from "./SignOutMember";
import SignInMember from "./SignInMember";
import SignUpMember from "./SignUpMember";
import firebase from 'firebase/app';
import { isLoaded } from "react-redux-firebase";
import NewGymForm from "./NewGymForm";


class GymControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGym: null,
    };
  }

  setVisibleComponent = () => {
    return (
      <NewGymForm />
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

export default GymControl