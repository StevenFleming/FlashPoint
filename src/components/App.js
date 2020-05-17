import React from 'react';
import './App.css';
import Header from './../components/Header.js'
import Footer from './../components/Footer.js'
import ClimbControl from './Climb/ClimbControl.js'
import MemberControl from './Member/MemberControl.js'

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
