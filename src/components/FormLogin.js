import React, {Component} from 'react';
import{Actions} from 'react-native-router-flux'
import {View , TextInput , Button , StyleSheet, Text,SafeAreaView,TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'

import { modificaEmail , modificaSenha} from '../actions/AutenticacaoActions'
import FormStyle from  '../styles/FormStyle'



class FormLogin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
    console.log('Login props ->>',this.props)
    return (
      <SafeAreaView style={{flex:1 ,justifyContent:"center"}}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={{fontSize:30 , fontWeight:"bold", fontFamily: 'Arial',}}>DevsZap</Text>
            </View>
            <View style={{flex:2,padding:30}}>
                <TextInput  style={ FormStyle.textInput } value={this.props.email} onChangeText={texto => {this.props.modificaEmail(texto)}} placeholder='Email'/>
                <TextInput secureTextEntry style={ FormStyle.textInput } value={this.props.senha} onChangeText={texto => {this.props.modificaSenha(texto)}} placeholder='Senha'/>
                <TouchableOpacity onPress={()=>Actions.push("formCadastro")} >
                    <Text style={{padding:10 }}>Não tem cadastro? Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:2}}>
                <Button onPress={()=>false} title='Acessar'/>
            </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha
});

export default connect(mapStateToProps,{ modificaEmail,modificaSenha } )(FormLogin);
