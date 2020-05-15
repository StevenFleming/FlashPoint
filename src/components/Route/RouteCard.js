import React from "react";

function RouteCard(props) {
  const { route, handleSelectingRoute } = props;
  return (
    < React.Fragment >
      <div onClick={() => handleSelectingRoute(route.id), console.log("console.log of routeid", route.id)}>
        <h2>{route.title}</h2>
        <h2>{route.grade}</h2>
        <hr />
      </div>
    </React.Fragment >
  )
}

export default RouteCard