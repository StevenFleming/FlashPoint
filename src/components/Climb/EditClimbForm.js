// import { useFirestore } from 'react-redux-firebase';

// function EditClimbForm(props) {
//   const firestore = useFirestore();



//   function handleEditClimbFormSubmission(event) {
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
//     <h1>Edit Climb!</h1>
//     <form onSubmit={handleEditClimbFormSubmission}>
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
//       <button className="btn" type="submit">Edit Climb</button>
//     </form>
//   </>
// );
// }

// export default EditClimbForm;