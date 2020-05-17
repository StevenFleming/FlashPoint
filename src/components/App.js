import React, { Component } from 'react';
import './App.css';
import Header from './../components/Header.js'
import Footer from './../components/Footer.js'
import ClimbControl from './Climb/ClimbControl.js'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <ClimbControl />
      </div>
      <Footer />
    </>
  );
}

export default App;
