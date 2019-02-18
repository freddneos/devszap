import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Contatos extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1 , justifyContent:'center',alignSelf: 'center',}}>
        <Text> Contatos </Text>
      </View>
    );
  }
}
