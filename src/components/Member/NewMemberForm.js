import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";


function NewMemberForm(props) {

  const firestore = useFirestore();

  function addMemberToFirestore(event) {
    event.preventDefault();

    return firestore.collection('members').add(
      {
        name: event.target.name.value,
        gym: event.target.gym.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
      });
  }
  return (
    <>
      <h1>Create Member!</h1>
      <form onSubmit={addMemberToFirestore}>
        <div className="form-group">
          <label>
            <b>Name
            </b>
          </label>
          <input className="form-control" type="text" name="name" placeholder="Name" />
          <br />
          <label>
            <b>Gym
            </b>
          </label>
          <input className="form-control" type="text" name="gym" placeholder="Gym" />
          <br />
        </div>
        <button type="submit">Add Member</button>
      </form>
    </>
  );
}

export default NewMemberForm;
