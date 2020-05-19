import firebase from 'firebase/app';
import { useSelector } from "react-redux";
import React from "react";
import { useFirestore, useFirestoreConnect, isLoaded } from "react-redux-firebase";

function MemberForm() {

  useFirestoreConnect([{
    collection: 'members'
  }])
  const firestore = useFirestore();
  const members = useSelector(state => state.firestore.ordered.members);
  console.log(members);



  function findCurrentMember() {
    if (isLoaded(members) && firebase.auth().currentUser) {
      console.log("coming from findCurrentMember", firebase.auth().currentUser.uid)
      const currentMember = members.filter((member) => member.authID === firebase.auth().currentUser.uid);
      console.log("coming from findCurrentMember", currentMember)
    }
  }


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
      <h1>Add which Gym you are apart of!</h1>
      <form onSubmit={addGymToFirestore}>
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
        <button type="submit">Add Member Details</button>
        <button onClick={findCurrentMember()}> console Logs </button>
      </form>
    </>
  );
}

export default MemberForm;