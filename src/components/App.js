import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import ClimbControl from "./Climb/ClimbControl";
import MemberControl from "./Member/MemberControl";
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import SignOutMember from "./Member/SignOutMember";


function App() {
  const auth = useSelector(state => state.firebase.auth)
  console.log(auth)
  if (!isLoaded(auth)) {
    return (
      <>
        <ClimbControl />
      </>
    );
  } else {
    return (
      <React.Fragment>
        <MemberControl />
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


