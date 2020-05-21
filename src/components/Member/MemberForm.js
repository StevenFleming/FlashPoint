import firebase from 'firebase/app';
import React from "react";
import { useFirestore } from "react-redux-firebase";

function MemberForm() {


  const firestore = useFirestore();


  function addGymToFirestore(event) {
    event.preventDefault();
    return firestore.collection('members').add(
      {
        name: event.target.name.value,
        attempts: [],
        sends: [],
        gymMemberShip: event.target.gym.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
        authID: firebase.auth().currentUser.uid
      });
  }

  return (
    <>
      <form onSubmit={addGymToFirestore}>
        <div className="form-group">
          <label>
            <b>Great whats your name?
            </b>
          </label>
          <input className="form-control" type="text" name="name" placeholder="Name" />
          <br />
          <label>
            <b>What Gym do you climb at!
            </b>
          </label>
          <input className="form-control" type="text" name="gym" placeholder="Gym" />
          <br />
        </div>
        <button class="btn" type="submit">Add Member Details</button>
      </form>
    </>
  );
}

export default MemberForm;