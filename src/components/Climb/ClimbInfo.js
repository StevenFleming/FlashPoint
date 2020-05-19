import React from "react";
import { Chart } from "react-google-charts";

function ClimbInfo(props) {
  const { climb } = props;

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
              title: "User Attempts and Sends",
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
    </React.Fragment>
  )

}

export default ClimbInfo;