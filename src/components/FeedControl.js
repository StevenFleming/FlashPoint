import React from "react";
import './App.css'
import NewMemberForm from './Member/NewMemberForm';

function FeedControl() {
  return (
    <React.Fragment>
      <div className="FeedControl">
        <NewMemberForm />
      </div>
    </React.Fragment>
  )
}

export default FeedControl;