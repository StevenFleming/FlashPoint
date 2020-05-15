import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import rootReducer from './reducers/index';
import { Provider } from 'react-redux';

const intitalState = {}
const store = createStore(rootReducer, intitalState);

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
