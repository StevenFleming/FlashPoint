import React from "react";
import { useFirestore } from "react-redux-firebase";
import swal from "sweetalert2";
import PropTypes from "prop-types";

function NewClimbForm(props) {
  const { toDefaultView } = props

  function climbAdded() {
    swal.fire(
      'Climb Added',
    )
  }

  const firestore = useFirestore();
  function addClimbToFirestore(event) {
    event.preventDefault();
    return firestore.collection('climbs').add(
      {
        title: event.target.title.value,
        gym: event.target.gym.value,
        setter: event.target.setter.value,
        grade: event.target.grade.value,
        incline: event.target.incline.value,
        timeCreated: firestore.FieldValue.serverTimestamp(),
        attempts: 0,
        sends: 0,
        reviews: [""]
      }).then(
        climbAdded(),
        toDefaultView()
      ).catch(function (error) {
        swal.fire(
          error.message,
        )
      });
  }

  return (
    <>
      <h1>Create Climb!</h1>
      <form onSubmit={addClimbToFirestore}>
        <div className="form-group">
          <label>
            <b>Title :
            </b>
          </label>
          <input className="form-control" type="text" name="title" placeholder="Name Your Route" />
          <br />
          <label>
            <b>Gym :
            </b>
          </label>
          <input className="form-control" type="text" name="gym" placeholder="What Gym is the Route At?" />
          <br />
          <label>
            <b>Setter :
            </b>
          </label>
          <input className="form-control" type="text" name="setter" placeholder="Who Set this Route?" />
          <br />
          <label>
            <b>Grade or Difficulty of Climb :
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
          <b>Incline or Style of Climb :
            </b>
          <select id="incline" name="incline">
            <option value="slab">Slab</option>
            <option value="vertical">Vertical</option>
            <option value="overhang">Overhang</option>
          </select>
          <br />
        </div>
        <button class="btn" type="submit">Add Climb</button>
      </form>
    </>
  );
}

NewClimbForm.proptype = {
  toDefaultView: PropTypes.func,
}

export default NewClimbForm;