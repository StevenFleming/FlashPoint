import React from 'react';
import '.././App.css'




function MemberDetails(props) {

  const { member } = props
  return (
    <React.Fragment>
      <h1>{member.name} </h1>
      <p> Current Gym: {member.gymMemberShip}</p>
    </React.Fragment>
  )
}



export default MemberDetails;