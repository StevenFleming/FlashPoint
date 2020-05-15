import React from "react";

function RouteCard(props) {
  const { route, whenRouteClicked } = props;
  return (
    <React.Fragment>
      <div onClick={() => whenRouteClicked(route.id)}>
        <h2>{route.name}</h2>
        <h2>{route.grade}</h2>
        <hr />
      </div>
    </React.Fragment>
  )
}

export default RouteCard