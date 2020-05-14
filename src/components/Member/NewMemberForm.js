import { useFirestore } from 'react-redux-firebase'


function NewMemberForm(props) {

  const firestore = useFirestore();

  function addMemberToFirestore(event) {
    event.preventDefault();

    return firestore.collection('members').add(
      {
        name: event.target.names.value,
        gym: event.target.gym.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
      });
  }
  return (
    <>
      <h1>Make your own Survey!</h1>
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

