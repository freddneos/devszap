import React, {Component} from 'react';
import{Actions} from 'react-native-router-flux'
import {View , TextInput , Button , StyleSheet, Text,SafeAreaView,TouchableOpacity,ActivityIndicator} from 'react-native'
import {connect} from 'react-redux'

import { modificaEmail , modificaSenha , autenticaUsuario} from '../actions/AutenticacaoActions'
import FormStyle from  '../styles/FormStyle'
import Theme from '../styles/Theme'



class FormLogin extends Component {

  autentica_usuario(){
    const {email , senha} = this.props
    this.props.autenticaUsuario({email,senha})
  }



  exibeBotaoLogin(){
    if (!this.props.loaderLogin){
      return ( <Button onPress={()=>this.autentica_usuario()} title='Acessar'/> )
    }else{
      return ( <ActivityIndicator size="large"/>)
    }
  }
    constructor(props) {
        super(props)
    }
    render() {
    console.log('Login props ->>',this.props)
    return (
      <SafeAreaView style={{flex:1 ,justifyContent:"center",...Theme.view}}>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Text style={FormStyle.superTitle}>DevsZap</Text>
            </View>
            <View style={{flex:2,padding:30}}>
                <TextInput  style={ FormStyle.textInput } value={this.props.email} onChangeText={texto => {this.props.modificaEmail(texto)}} placeholder='Email'/>
                <TextInput secureTextEntry style={ FormStyle.textInput } value={this.props.senha} onChangeText={texto => {this.props.modificaSenha(texto)}} placeholder='Senha'/>
                <TouchableOpacity onPress={()=>Actions.push("formCadastro")} >
                    <Text style={FormStyle.text }>Não tem cadastro? Cadastre-se</Text>
                    <Text style={FormStyle.errorMessage}>{this.props.erroAutenticacao}</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:2}}>
              {this.exibeBotaoLogin()}
            </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroAutenticacao: state.AutenticacaoReducer.erroAutenticacao,
  loaderLogin: state.AutenticacaoReducer.loaderLogin
});

export default connect(mapStateToProps,{ modificaEmail,modificaSenha,autenticaUsuario } )(FormLogin);
