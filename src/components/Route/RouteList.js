import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import RouteCard from "./RouteCard";
import PropTypes from "prop-types";

function RouteList(props) {

  useFirestoreConnect([
    { collection: 'routes' }
  ])


  const routes = useSelector(state => state.firestore.ordered.routes)

  if (isLoaded(routes)) {
    console.log("full collection of Routes", routes);
    return (
      <React.Fragment>
        <br />
        <br />
        <h1><b>All Route's</b></h1>
        <hr />
        {routes.map((route) => {
          return <RouteCard
            route={route}
            onRouteClicked={props.handleSelectingRoute}
            key={route.id}
          />
        })}
      </React.Fragment>
    )
  } else {
    return <React.Fragment>
      <h4>Loading...</h4>
    </React.Fragment>
  }
}


RouteList.proptype = {
  onRouteSelection: PropTypes.func
}

export default RouteList;
