import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import firebase from "firebase";
import { connect } from 'react-redux'
import { useSelector } from 'react-redux'
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import ClimbControl from "./Climb/ClimbControl";

function App() {
  const firebase = useFirebase()
  const auth = useSelector(state => state.firebase.auth)
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

const enhance = connect(
  // Map redux state to component props
  ({ firebase: { auth, profile } }) => ({
    auth,
    profile
  })
)
enhance(App)

const Main = () => (
  <Switch>
    <Route exact path='/' component={ClimbControl} />
    <Route exact path='/signin' component={MemberControl} />
  </Switch>
)

export default App;
