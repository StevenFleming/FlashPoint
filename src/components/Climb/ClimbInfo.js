import React from "react";
import { Chart } from "react-google-charts";

function ClimbInfo(props) {
  const { climb, member } = props;

  const attempts = member.attempts
  const oldattempts = [...attempts]
  const attemptsOnRoute = oldattempts.filter((attempt) => attempt === climb.id);

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

            [`${climb.grade}`, attemptsOnRoute.length + 1, 6],

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
      {getChart()}
      {getChartMember()}
    </React.Fragment>
  )

}

export default ClimbInfo;