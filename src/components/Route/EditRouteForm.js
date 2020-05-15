// import { useFirestore } from 'react-redux-firebase';

// function EditRouteForm(props) {
//   const firestore = useFirestore();



//   function handleEditRouteFormSubmission(event) {
//     event.preventDefault();
//     props.onEditTicket();
//     const propertiesToUpdate = {
//       title: event.target.title.value,
//       gym: event.target.gym.value,
//       setter: event.target.setter.value,
//       grade: event.target.grade.value,
//       incline: event.target.incline.value,
//       timeCreated: firestore.FieldValue.serverTimestamp(),
//     }
//     return firestore.update({ collection: 'tickets', doc: ticket.id }, propertiesToUpdate)
//   }
// }

// firestore.update({ collection: 'tickets', doc: ticket.id }, propertiesToUpdate)



// return (
//   <>
//     <h1>Edit Route!</h1>
//     <form onSubmit={handleEditRouteFormSubmission}>
//       <div className="form-group">
//         <label>
//           <b>Title
//             </b>
//         </label>
//         <input className="form-control" type="text" name="title" placeholder="Title" />
//         <br />
//         <label>
//           <b>Gym
//             </b>
//         </label>
//         <input className="form-control" type="text" name="gym" placeholder="Gym" />
//         <br />
//         <label>
//           <b>setter
//             </b>
//         </label>
//         <input className="form-control" type="text" name="setter" placeholder="Setter" />
//         <br />
//         <label>
//           <b>Grade
//             </b>
//         </label>
//         <input className="form-control" type="text" name="grade" placeholder="Grade" />
//         <br />
//         <label>
//           <b>incline
//             </b>
//         </label>
//         <input className="form-control" type="text" name="incline" placeholder="Incline" />
//         <br />

//       </div>
//       <button className="btn" type="submit">Edit Route</button>
//     </form>
//   </>
// );
// }

// export default EditRouteForm;