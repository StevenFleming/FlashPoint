import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import ClimbControl from "./Climb/ClimbControl";
import MemberControl from "./Member/MemberControl";
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'


function App() {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <MemberControl />
        <ClimbControl />
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


