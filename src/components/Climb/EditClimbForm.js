import React from "react";
import { useFirestore } from "react-redux-firebase";



function EditClimbForm(props) {
  const { climb, BackToDefaultView } = props;
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
      attempts: climb.attempts,
      sends: climb.sends
    }
    return firestore.update({ collection: 'climbs', doc: climb.id }, propertiesToUpdate)
  }

  return (
    <>
      <h1>Edit {climb.title}!</h1>
      <form onSubmit={editClimbToFirestore}>
        <div className="form-group">
          <label>
            <b>Edit Title : Current title:  {climb.title}
            </b>
          </label>
          <input className="form-control" type="text" name="title" placeholder="Title" />
          <br />
          <label>
            <b>Edit Gym: Current Gym : {climb.gym}
            </b>
          </label>
          <input className="form-control" type="text" name="gym" placeholder="Gym" />
          <br />
          <label>
            <b> Edit Setter: Current Setter : {climb.setter}
            </b>
          </label>
          <input className="form-control" type="text" name="setter" placeholder="Setter" />
          <br />
          <label>
            <b>Edit Grade: Current Grade : {climb.grade}
            </b>
            <select id="grade" name="grade">
              <option value="v1">v1</option>
              <option value="v2">v2</option>
              <option value="v3">v3</option>
              <option value="v4">v4</option>
              <option value="v5">v5</option>
              <option value="v6">v6</option>
              <option value="v7">v7</option>
              <option value="v8">v8</option>
              <option value="v9">v9</option>
              <option value="v10">v10</option>
              <option value="v11">v11</option>
            </select>
          </label>
          <label>
            <b> Edit Incline: Current Incline: {climb.incline}
            </b>
            <select id="incline" name="incline">
              <option value="slab">slab</option>
              <option value="vertical">vertical</option>
              <option value="overhang">overhang</option>
            </select>
          </label>
          <br />

        </div>
        <button className="btn" type="submit"> Edit {climb.title} </button>
      </form>
      <button onClick={() => BackToDefaultView()}>Return to default view</button>
    </>
  );
}

export default EditClimbForm;