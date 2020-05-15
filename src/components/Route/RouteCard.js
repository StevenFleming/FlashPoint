import React from "react";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import RouteInfo from "./RouteInfo"


function RouteCard(props) {
  const { route, onRouteClicked } = props;

  return (
    <React.Fragment>
      <div onClick={() => onRouteClicked(route.id)}>
        <h2>{route.title}</h2>
        <hr />
      </div>
    </React.Fragment>
  )
}

export default RouteCard