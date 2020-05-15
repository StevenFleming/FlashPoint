import React from "react";
import './App.css'
import NewMemberForm from './Member/NewMemberForm';
import NewGymForm from './Gym/NewGymForm';
import NewRouteForm from './Route/NewRouteForm';
// import EditRouteForm from './Route/EditRouteForm';
import { render } from "@testing-library/react";
import RouteList from "./Route/RouteList";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withFirestore, isLoaded } from "react-redux-firebase";


class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createMemberFormVisible: false,
      createRouteFormVisible: false,
      createSetterFormVisible: false,
      selectedRoute: null,
      editing: false
    };
  }

  handleEditingRouteInList = () => {
    this.setState({
      editing: false,
      selectedRoute: null
    });
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
        console.log(firestoreRoute);
        console.log(this.state.selectedRoute);
      })
  }

  setVisibleComponent = () => {
    return (
      <React.Fragment>
        <div className="FeedControl">
          <NewMemberForm />
          <NewGymForm />
          <NewRouteForm />
          <RouteList handleSelectingRoute={this.handleSelectingRoute}
          />
        </div>
      </React.Fragment >
    )
  }



  handleClickToCreateRoute = () => {
    this.setState({ createRouteFormVisible: true });
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
