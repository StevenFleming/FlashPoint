import React from "react";
import './App.css'
import NewMemberForm from './Member/NewMemberForm';
import { render } from "@testing-library/react";

class FeedControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createMemberFormVisible: false,
      createRouteFormVisible: false,
      createSetterFormVisible: false,
    };
  }

  setVisibleComponent = () => {
    return (
      <React.Fragment>
        <div className="FeedControl">
          <NewMemberForm />
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