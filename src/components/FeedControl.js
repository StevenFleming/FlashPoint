import React from "react";
import './App.css'
import NewMemberForm from './Member/NewMemberForm';
import NewGymForm from './Gym/NewGymForm';
import NewRouteForm from './Route/NewRouteForm';
import { render } from "@testing-library/react";
import RouteList from "./Route/RouteList";

class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createMemberFormVisible: false,
      createRouteFormVisible: false,
      createSetterFormVisible: false,
      selectedRoute: null,
    };
  }

  handleSelectingRoute = (id) => {
    this.props.firestore.get({ collection: "routes", doc: id })
      .then((route) => {
        const firestoreroute = {
          title: route.get("title"),
          q1: route.get("q1"),
          q2: route.get("q2"),
          q3: route.get("q3"),
          q4: route.get("q4"),
          userId: route.get("userId"),
          id: route.id,
        }
        this.setState({ selectedSurvey: firestoreSurvey });
      })
  }

  setVisibleComponent = () => {
    return (
      <React.Fragment>
        <div className="FeedControl">
          <NewMemberForm />
          <NewGymForm />
          <NewRouteForm />
          <RouteList />
        </div>
      </React.Fragment >
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


export default FeedControl;