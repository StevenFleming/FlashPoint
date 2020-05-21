import React from "react";


function Header(props) {

  const { member } = props

  if (member) {
    return (


      <React.Fragment>
        <h1>Flashpoint</h1>
        <h4> Welcome {member.name}</h4>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h1>Flashpoint</h1>
      </React.Fragment>
    )
  }
}

export default Header;