import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import ClimbControl from "./Climb/ClimbControl";
import MemberControl from "./Member/MemberControl";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'




function App() {

  useFirestoreConnect([{
    collection: 'members'
  }])

  const auth = useSelector(state => state.firebase.auth)
  const members = useSelector(state => state.firestore.ordered.members);

  function GetFirebaseMember() {
    if (isLoaded(members) && (auth !== null)) {
      const firebaseMember = members.filter((member) => member.authID === auth.uid);
      if (firebaseMember !== null) {
        return firebaseMember[0]
      }
      else {
        return "not yet mounted"
      }
    }
  }

  let thisMember = GetFirebaseMember();

  // stying needed
  if (!isLoaded(auth)) {
    return (

      <div class="container">
        <>
          <MemberControl />
        </>
      </div >
    );
  } else {
    return (
      <React.Fragment>
        <div class="header">
          <Header member={thisMember} />
        </div>
        <div class="container">
          <MemberControl member={thisMember} />
          <ClimbControl member={thisMember} />
          <Footer />
        </div>
      </React.Fragment >
    )
  }
}

export default App;




