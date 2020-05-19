import { auth } from "firebase";

function MemberForm(props) {

  const firestore = useFirestore();

  function addGymToFirestore(event) {
    event.preventDefault();
    const auth = firebase.auth();
    return firestore.collection('members').add(
      {
        name: event.target.name.value,
        attempts: [],
        sends: [],
        gymMemberShip: "",
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
      </form>
    </>
  );
}

export default MemberForm;