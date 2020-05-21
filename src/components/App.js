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


  if (!isLoaded(auth)) {
    return (
      <>
        <MemberControl />
      </>
    );
  } else {
    return (
      <React.Fragment>
        <Header member={thisMember} />

        <div className="container">
          <MemberControl member={thisMember} />
          <ClimbControl member={thisMember} />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}


// function AuthIsLoaded() {
//   const auth = useSelector(state => state.firebase.auth)
//   if (!isLoaded(auth)) {
//     return <div> <><MemberControl /></></div>;
//   }
//   else {
//     return <div> <><ClimbControl /></></div>

//   }
// }





export default App;


  //   return (
  //     <>
  //       <Header />
  //       <div className="container">
  //         <ClimbControl />
  //         <MemberControl />
  //       </div>
  //       <Footer />
  //     </>
  //   );
  // }


