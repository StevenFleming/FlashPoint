import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import firebase from "firebase/app";


import React from "react";
import firebase from 'firebase/app';
import { isLoaded } from "react-redux-firebase";
import swal from 'sweetalert2';
import { NavLink } from "react-router-dom";

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
        <button className="btn" type="submit">Add Member</button>
      </form>
    </>
  );
}

export default NewMemberForm;
