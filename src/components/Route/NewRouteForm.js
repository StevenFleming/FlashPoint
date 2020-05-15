import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";


function NewRouteForm(props) {

  const firestore = useFirestore();

  function addRouteToFirestore(event) {
    event.preventDefault();

    return firestore.collection('routes').add(
      {
        title: event.target.title.value,
        gym: event.target.gym.value,
        setter: event.target.setter.value,
        grade: event.target.setter.value,
        incline: event.target.incline.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
      });
  }
  return (
    <>
      <h1>Create Route!</h1>
      <form onSubmit={addRouteToFirestore}>
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
        <button className="btn" type="submit">Add Route</button>
      </form>
    </>
  );
}

export default NewRouteForm;