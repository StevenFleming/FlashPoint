import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";
import RouteCard from "./RouteCard";

function RouteList(props) {

  useFirestoreConnect([
    { collection: 'routes' }
  ])
  const routes = useSelector(state => state.firestore.ordered.routes)
  console.log(routes);

  if (isLoaded(routes)) {
    return (
      <React.Fragment>
        <br />
        <br />
        <h1><b>All Route's</b></h1>
        <h1>{routes.id}</h1>
        <hr />
        {routes.map((route) => {
          return <RouteCard
            route={route}
            handleSelectingRoute={props.handleSelectingRoute}
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

export default RouteList;
