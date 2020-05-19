import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import ClimbControl from "./Climb/ClimbControl";
import MemberControl from "./Member/MemberControl";

function App() {

  return (
    <>
      <Header />
      <div className="container">
        <ClimbControl />
        <MemberControl />
      </div>
      <Footer />
    </>
  );
}



export default App;
