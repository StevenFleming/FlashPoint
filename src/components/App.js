import React, { Component } from 'react';
import './App.css';
import Header from './../components/Header.js'
import Footer from './../components/Footer.js'
import FeedControl from './FeedControl.js'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedControl />
      </div>
      <Footer />
    </>
  );
}

export default App;
