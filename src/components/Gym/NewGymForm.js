import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";


function NewGymForm(props) {

  const firestore = useFirestore();

  function addGymToFirestore(event) {
    event.preventDefault();

    return firestore.collection('Gyms').add(
      {
        name: event.target.name.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
      });
  }
  return (
    <>
      <h1>Create Gym!</h1>
      <form onSubmit={addGymToFirestore}>
        <div className="form-group">
          <label>
            <b>Name
            </b>
          </label>
          <input className="form-control" type="text" name="name" placeholder="Name" />
          <br />
        </div>
        <button type="submit">Add Gym</button>
      </form>
    </>
  );
}

export default NewGymForm;