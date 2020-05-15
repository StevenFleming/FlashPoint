import React from "react";
import RouteCard from "./RouteCard";
import { useSelector } from "react-redux";
import { useFirestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

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
        <hr />
        <p>{routes.title}</p>
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
