import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";


function EditClimbForm(props) {
  const { climb } = props;

  const firestore = useFirestore();

  function editClimbToFirestore(event) {
    event.preventDefault();
    const propertiesToUpdate =
    {
      title: event.target.title.value,
      gym: event.target.gym.value,
      setter: event.target.setter.value,
      grade: event.target.grade.value,
      incline: event.target.incline.value,
      timeCreated: firestore.FieldValue.serverTimestamp(),
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate)
  }

  return (
    <>
      <h1>Edit {climb.title}!</h1>
      <form onSubmit={editClimbToFirestore}>
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
            <b>incline
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

export default EditClimbForm;