import React from "react";
import '.././App.css'
import Climb from './Climb'
// import NewMemberForm from './Member/NewMemberForm';
// import NewGymForm from './Gym/NewGymForm';
import ClimbInfo from './ClimbInfo';
import NewClimbForm from './NewClimbForm';
import ClimbList from "./ClimbList";
import EditClimbForm from './EditClimbForm';
import { connect } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";



class ClimbControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createClimbFormVisible: false,
      editClimbFormVisible: false,
      selectedClimb: null,
      climbInfoVisible: false,
    };
  }

  handleClickToSeeClimbInfo = (id) => {
    this.setState({ climbInfoVisible: true })
    this.handleSelectingClimb(id);
  }

  handleClickToCreateClimb = () => {
    this.setState({ createClimbFormVisible: true });
  }

  handleEditClimb = (id) => {
    this.handleSelectingClimb(id);
    this.setState({ editClimbFormVisible: true });
    console.log("from edit climb", this.state.selectedClimb)
    console.log("from edit climb", this.state.editClimbFormVisible)
  };

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
    if ((this.state.selectedClimb != null) && (this.state.climbInfoVisible === true)) {
      return (
        <>
          <p>Made it to ClimbInfo</p>
          <button onClick={this.handleClickToDefaultView}>Click to Default View</button>
          <ClimbInfo climb={this.state.selectedClimb} />
        </>
      )
    } else if ((this.state.selectedClimb != null) && (this.state.editClimbFormVisible === true)) {
      return (
        <>
          <button onClick={this.handleClickToDefaultView}>Click to Default View</button>
          <EditClimbForm climb={this.state.selectedClimb} onEditClimbFormSubmission={this.handleEditClimb} BackToDefaultView={this.handleClickToDefaultView} />
        </>
      );
    } else if (this.state.createClimbFormVisible) {
      return (
        <>
          <button onClick={this.handleClickToDefaultView}>Click to Default View</button>
          <NewClimbForm />
        </>
      )
    }
    else {
      return (
        <>
          <button onClick={this.handleClickToCreateClimb}>Click To Create Climb</button>
          <ClimbList
            handleEditClimb={this.handleEditClimb} handleClimbingInfo={this.handleClickToSeeClimbInfo} />
        </>
      )
    }
  }





  //       < React.Fragment >
  //   <div className="ClimbControl">
  //     <button onClick={this.handleClickToCreateClimb}>Make your own Climb</button>
  //     <ClimbList handleSelectingClimb={this.handleSelectingClimb}
  //       handleClickToEditClimb={this.handleClickToEditClimb}
  //     />
  //   </div>
  // </React.Fragment >
  //       )
  //   }
  //     else if (this.state.editing === true) {
  //   return (
  //     <React.Fragment>
  //       <button onClick={this.handleClickToDefaultView}>Back to Home View</button>
  //       <EditClimbForm climb={this.state.selectedClimb} />
  //       <ClimbInfo climb={this.state.selectedClimb} />
  //     </React.Fragment >
  //   )
  // }
  // else {
  //   return (
  //     <React.Fragment>
  //       <button onClick={this.handleClickToDefaultView}>Back to Home View</button>
  //       <NewClimbForm />
  //     </React.Fragment >
  //   )
  // }
  //   }



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

ClimbControl = connect(mapStateToProps)(ClimbControl);
export default withFirestore(ClimbControl);