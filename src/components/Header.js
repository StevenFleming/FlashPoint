import React from "react";

function Header(props) {

  const { member } = props

  if (member) {
    return (

      <nav className="header">
        <React.Fragment>
          <h1>Flashpoint</h1>
          <li className="nav-item">
            Welcome {member.name}
          </li>
        </React.Fragment>
      </nav>
    )
  } else {
    return (
      <nav className="header">
        <React.Fragment>
          <h1>Flashpoint</h1>

        </React.Fragment>
      </nav >
    )
  }
}

export default Header;