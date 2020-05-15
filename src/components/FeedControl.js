import React from "react";
import './App.css'
// import NewMemberForm from './Member/NewMemberForm';
// import NewGymForm from './Gym/NewGymForm';
import NewRouteForm from './Route/NewRouteForm';
import RouteList from "./Route/RouteList";
import { connect } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";



class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // createMemberFormVisible: false,
      createRouteFormVisible: false,
      // createSetterFormVisible: false,
      selectedRoute: null,
      editing: false
    };
  }

  handleClickToCreateRoute = () => {
    this.setState({ createRouteFormVisible: true });
  }

  handleClickToDefaultView = () => {
    this.setState({ createRouteFormVisible: false });
    this.setState({ selectedRoute: false });
    this.setState({ editing: false });
  }

  handleSelectingRoute = (id) => {
    this.props.firestore.get({ collection: "routes", doc: id })
      .then((route) => {
        const firestoreRoute = {
          title: route.get("title"),
          gym: route.get("gym"),
          setter: route.get("setter"),
          grade: route.get("grade"),
          incline: route.get("incline"),
          id: route.id,
        }
        this.setState({ selectedRoute: firestoreRoute });
      })
  }

  setVisibleComponent = () => {
    if (this.state.createRouteFormVisible == false) {
      return (
        <React.Fragment>
          <div className="FeedControl">
            <button onClick={this.handleClickToCreateRoute}>Make your own Route</button>
            <RouteList handleSelectingRoute={this.handleSelectingRoute}
            />
          </div>
        </React.Fragment >
      )
    }
    else {
      return (
        <React.Fragment>
          <button onClick={this.handleClickToDefaultView}>Back to Home View</button>
          <NewRouteForm />
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
