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
import { FIREBASE_CONFIG } from  "../config"


export default class App extends Component {

  componentWillMount(){
     // Initialize Firebase
    var config = FIREBASE_CONFIG
    firebase.initializeApp(config);
    console.disableYellowBox = true
  }
  render() {
    return (
      <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
          <Routes/>
      </Provider>
    
    );
  }
}

