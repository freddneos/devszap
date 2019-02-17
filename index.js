/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App'

const devszap = props  =>(
  <App/>
)
AppRegistry.registerComponent('devszap',() => devszap)