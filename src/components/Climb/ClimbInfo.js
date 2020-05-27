import React from "react";
import { Chart } from "react-google-charts";
import PropTypes from "prop-types";

function ClimbInfo(props) {
  const { climb, member } = props;
  const sendRate = (climb.sends / climb.attempts).toPrecision(2)

  const getChart = () => {
    return (
      <div style={{ display: "flex", maxWidth: 1000, marginLeft: "50px" }}>
        <Chart
          width={1000}
          height={480}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              `${climb.title}`,
              "Total Attempts",
              "Total Sends",
            ],

            [`${climb.grade}`, climb.attempts, climb.sends],

          ]}
          options={{
            title: climb.title,
            chartArea: { width: "50%" },
            hAxis: {
              title: "Attempts and Sends",
              minValue: 0,
            },
            vAxis: {
              title: "Total Attempts and Sends",
            },
          }}
          legendToggle
        />
      </div>
    );
  };

  const getChartMember = () => {
    const attempts = member.attempts
    const oldattempts = [...attempts]
    const attemptsOnRoute = oldattempts.filter((attempt) => attempt === climb.id);
    const sends = member.sends
    const oldSends = [...sends]
    const sendsOnRoute = oldSends.filter((sends) => sends === climb.id)
    return (
      <div style={{ display: "flex", maxWidth: 1000, marginLeft: "50px" }}>
        <Chart
          width={1000}
          height={480}
          chartType="ColumnChart"
          loader={<div>Loading Chart</div>}
          data={[
            [
              `${climb.title}`,
              "Your Attempts",
              "Your Sends",
            ],
            [`${climb.grade}`, attemptsOnRoute.length, sendsOnRoute.length],

          ]}
          options={{
            title: climb.title,
            chartArea: { width: "50%" },
            hAxis: {
              title: "Attempts and Sends",
              minValue: 0,
            },
            vAxis: {
              title: "Total Attempts and Sends",
            },
          }}
          legendToggle
        />
      </div>
    );
  };


  if (member) {
    return (
      <React.Fragment>
        <h1>{climb.title} </h1>
        <p> Grade: {climb.grade}</p>
        <p> Incline: {climb.incline}</p>
        <p> Gym: {climb.gym}</p>
        <p> Setter: {climb.setter}</p>
        <p> Attempts: {climb.attempts}</p>
        <p> Sends : {climb.sends}</p>
        <p> Review: {climb.reviews}</p>
        <p> Send Rate :{sendRate}</p>
        {getChart()}
        <hr />
        {getChartMember()}
      </React.Fragment>
    )

  } else {
    return (
      <React.Fragment>
        <h1>{climb.title} </h1>
        <p> Grade: {climb.grade}</p>
        <p> Incline: {climb.incline}</p>
        <p> Gym: {climb.gym}</p>
        <p> Setter: {climb.setter}</p>
        <p> Attempts: {climb.attempts}</p>
        <p> Sends : {climb.sends}</p>
        <p> Review: {climb.reviews}</p>
        <p> Send Rate :{sendRate}</p>
        {getChart()}
      </React.Fragment>
    )

  }
}

ClimbInfo.proptype = {
  member: PropTypes.obj,
  climb: PropTypes.obj
}

export default ClimbInfo;