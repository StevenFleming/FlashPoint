import React from 'react';
import '.././App.css'
import PropTypes from "prop-types";




function MemberDetails(props) {

  const { member } = props
  return (
    <React.Fragment>
      <h1>{member.name} </h1>
    </React.Fragment>
  )
}

MemberDetails.proptype = {
  member: PropTypes.obj
}

export default MemberDetails;