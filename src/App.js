/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from "redux-thunk"

import Routes from "./Routes"
import reducers from  "./reducers"


export default class App extends Component {

  componentWillMount(){
     // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAIE70Pv010CA88TYJRC-8QNiyVMIhbK84",
      authDomain: "devszap.firebaseapp.com",
      databaseURL: "https://devszap.firebaseio.com",
      projectId: "devszap",
      storageBucket: "devszap.appspot.com",
      messagingSenderId: "514230745787"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
          <Routes/>
      </Provider>
    
    );
  }
}

