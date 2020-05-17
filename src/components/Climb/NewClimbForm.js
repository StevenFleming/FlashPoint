import React from "react";
import { useFirestore } from "react-redux-firebase";


function NewClimbForm(props) {

  const firestore = useFirestore();

  function addClimbToFirestore(event) {
    event.preventDefault();

    return firestore.collection('climbs').add(
      {
        title: event.target.title.value,
        gym: event.target.gym.value,
        setter: event.target.setter.value,
        grade: event.target.grade.value,
        incline: event.target.incline.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
      });
  }

  return (
    <>
      <h1>Create Climb!</h1>
      <form onSubmit={addClimbToFirestore}>
        <div className="form-group">
          <label>
            <b>Title
            </b>
          </label>
          <input className="form-control" type="text" name="title" placeholder="Title" />
          <br />
          <label>
            <b>Gym
            </b>
          </label>
          <input className="form-control" type="text" name="gym" placeholder="Gym" />
          <br />
          <label>
            <b>setter
            </b>
          </label>
          <input className="form-control" type="text" name="setter" placeholder="Setter" />
          <br />
          <label>
            <b>Grade
            </b>
          </label>
          <input className="form-control" type="text" name="grade" placeholder="Grade" />
          <br />
          <label>
            <b>Incline
            </b>
          </label>
          <input className="form-control" type="text" name="incline" placeholder="Incline" />
          <br />

        </div>
        <button className="btn" type="submit">Add Climb</button>
      </form>
    </>
  );
}

export default NewClimbForm;