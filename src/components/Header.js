import React from "react";
import SignOutMember from "./Member/SignOutMember"

function Header(props) {

  const { member } = props

  if (member) {
    return (
      <div class="row">
        <React.Fragment>
          <p class="column"> {member.gymMemberShip}</p>
          <p class="column">Flashpoint</p>
          <p class="column">Welcome {member.name}</p>
          <SignOutMember member={member} />
        </React.Fragment>
      </div>
    )
  } else {
    return (
      <nav className="header">
        <React.Fragment>
          <p class="headerText">Flashpoint</p>
        </React.Fragment>
      </nav >
    )
  }
}

export default Header;