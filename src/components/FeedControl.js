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