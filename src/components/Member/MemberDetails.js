import React from 'react';
import '.././App.css'




function MemberDetails(props) {

  const { member } = props
  return (
    <React.Fragment>
      <h1>{member.name} </h1>
      <p> Current Gym: {member.gymMemberShip}</p>
    </React.Fragment>
  )
}



// const getChart = () => {
//   return (
//     <div style={{ display: "flex", maxWidth: 1000, marginLeft: "50px" }}>
//       <Chart
//         width={1000}
//         height={480}
//         chartType="ColumnChart"
//         loader={<div>Loading Chart</div>}
//         data={[
//           [
//             `${climb.title}`,
//             "Total Attempts",
//             "Total Sends",
//           ],

//           [`${climb.grade}`, climb.attempts, climb.sends],

//         ]}
//         options={{
//           title: climb.title,
//           chartArea: { width: "50%" },
//           hAxis: {
//             title: "Attempts and Sends",
//             minValue: 0,
//           },
//           vAxis: {
//             title: "User Attempts and Sends",
//           },
//         }}
//         legendToggle
//       />
//     </div>
//   );
// };



export default MemberDetails;