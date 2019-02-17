import React, {Component} from 'react';
import{Actions} from 'react-native-router-flux'
import {View , TextInput , Button , StyleSheet, Text,SafeAreaView,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import { modificaEmail , modificaSenha} from '../actions/AutenticacaoActions'
import FormStyle from  '../styles/FormStyle'

const initialize = () => {
  setTimeout(() => {
    Actions.replace("formLogin")
  }, 3000);
}

class Splash extends Component {
    constructor(props) {
        super(props)

    }
    componentDidMount(){
      initialize();
    }


    render() {
    console.log('Splash props ->',this.props)
    return (
      <SafeAreaView style={{flex:1 ,justifyContent:"center",alignItems: 'center'}}>
          <TouchableOpacity onPress={() => {Actions.replace("formLogin")}}>
            <Text style={{fontSize:40}}>DevsZap</Text>
            <Text style={{fontSize:14}}>Comunication is a must!</Text> 
          </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  // email: state.AutenticacaoReducer.email,
  // senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps,{ modificaEmail,modificaSenha } )(Splash);
