import React from "react";
import SignOutMember from "./Member/SignOutMember"

function Header(props) {

  const { member } = props

  if (member) {
    return (
      <div class="row">
        <React.Fragment>
          <div class="headerText">
            <p class="column"> {member.gymMemberShip}</p>
            <p class="column">Flashpoint</p>
            <p class="column">Welcome {member.name}</p>
          </div>
          <SignOutMember member={member} />
        </React.Fragment>
      </div >
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