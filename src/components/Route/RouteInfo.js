import React from "react";

function RouteInfo(props) {
  const { route } = props;


  if (isLoaded(responses)) {
    const relevantResponses = responses.filter(
      (response) => response.Id === survey.id
    );
    console.log(route);


    return (
      <React.Fragment>
        <h1>Selected Route is {route.title} </h1>
        <p> Display this</p>
      </React.Fragment>
    )
  }

  export default RouteInfo;