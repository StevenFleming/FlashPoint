import React from "react";
import PropTypes from "prop-types";
import RouteCard from "./RouteCard";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

function RouteList(props) {

  useFirestoreConnect([
    { collection: 'routes' }
  ])
  const routes = useSelector(state => state.firestore.ordered.routes)

  return (
    <React.Fragment>
      <br />
      <br />
      <h1><b>All Route's</b></h1>
      <hr />
      {routes.map((route) => {
        return <RouteCard
          route={route}
          whenRouteClicked={props.onRouteSelection}
          key={route.id}
        />
      })}
    </React.Fragment>
  )
}
export default RouteList;
