import React, {Component} from 'react';
import{Actions} from 'react-native-router-flux'
import {View , TextInput , Button , StyleSheet, Text,SafeAreaView,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import { modificaEmail , modificaSenha} from '../actions/AutenticacaoActions'
import FormStyle from  '../styles/FormStyle'


class Principal extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    console.log('Splash props ->',this.props)
    return (
      <SafeAreaView style={{flex:1 ,justifyContent:"center",alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {Actions.replace("formLogin")}}>
            <Text style={{fontSize:40}}>Tela Principal</Text>
            
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
 
});

export default connect(mapStateToProps,{ modificaEmail,modificaSenha } )(Principal);
