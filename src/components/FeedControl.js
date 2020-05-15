import React from "react";
import './App.css'
// import NewMemberForm from './Member/NewMemberForm';
// import NewGymForm from './Gym/NewGymForm';
import ClimbInfo from './Climb/ClimbInfo';
import NewClimbForm from './Climb/NewClimbForm';
import ClimbList from "./Climb/ClimbList";
import EditClimbForm from './Climb/EditClimbForm';
import { connect } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";



class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createClimbFormVisible: false,
      selectedClimb: null,
      editing: false
    };
  }

  handleClickToCreateClimb = () => {
    this.setState({ createClimbFormVisible: true });
  }

  handleClickToEditClimb = () => {
    this.setState({ editing: true });
  }

  handleClickToDefaultView = () => {
    this.setState({ createClimbFormVisible: false });
    this.setState({ selectedClimb: null });
    this.setState({ editing: false });
  }

  handleSelectingClimb = (id) => {
    this.props.firestore.get({ collection: "climbs", doc: id })
      .then((climb) => {
        const firestoreClimb = {
          title: climb.get("title"),
          gym: climb.get("gym"),
          setter: climb.get("setter"),
          grade: climb.get("grade"),
          incline: climb.get("incline"),
          id: climb.id,
        }
        this.setState({ selectedClimb: firestoreClimb });
      })
  }


  setVisibleComponent = () => {
    if (this.state.createClimbFormVisible == false) {
      return (
        <React.Fragment>
          <div className="FeedControl">
            <button onClick={this.handleClickToCreateClimb}>Make your own Climb</button>
            <ClimbList handleSelectingClimb={this.handleSelectingClimb}
              handleClickToEditClimb={this.handleClickToEditClimb}
            />
          </div>
        </React.Fragment >
      )
    }
    else if (!this.state.selectedClimb == null && this.state.editing === true) {
      console.log("----------", this.state.selectedClimb);
      console.log(this.state.createClimbFormVisible);
      return (
        <React.Fragment>
          <button onClick={this.handleClickToDefaultView}>Back to Home View</button>
          <ClimbInfo climb={this.state.selectedClimb} />
        </React.Fragment >
      )
    }
    else {
      return (
        <React.Fragment>
          <button onClick={this.handleClickToDefaultView}>Back to Home View</button>
          <NewClimbForm />
        </React.Fragment >
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

const mapStateToProps = (state) => {
  return {}
}

FeedControl = connect(mapStateToProps)(FeedControl);
export default withFirestore(FeedControl);
