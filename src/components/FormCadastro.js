import React, {Component} from 'react';
import {View , TextInput ,Text, Button ,SafeAreaView,ActivityIndicator} from 'react-native'
import { modificaSenha , modificaEmail , modificaNome,cadastraUsuario} from '../actions/AutenticacaoActions'
import {connect} from 'react-redux'
import FormStyle from  '../styles/FormStyle'

import Theme from  '../styles/Theme'



class FormCadastro extends Component {


  cadastrar_usurario(){
    const nome = this.props.nome
    const email = this.props.email
    const senha = this.props.senha
    
    this.props.cadastraUsuario({email,senha,nome})
  }

  exibeBotaoCadastro(){
    if (!this.props.loaderCadastro){
      return ( <Button onPress={() => this.cadastrar_usurario()} title='Cadastrar'/>)
    }else{
      return ( <ActivityIndicator size="large"/> )
    }
  }

  constructor(props){
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={{flex:1 ,justifyContent:"center",...Theme.view}}>
          <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
              <Text style={{fontSize:30 , fontWeight:"bold", fontFamily: 'Arial',...Theme.text}}>DevsZap</Text>
          </View>
          <View style={{flex:2,padding:30}}>
              <TextInput  style={FormStyle.textInput} value={this.props.nome} onChangeText={texto => {this.props.modificaNome(texto)}} placeholder='Nome'/>
              <TextInput  style={FormStyle.textInput} value={this.props.email} onChangeText={texto => {this.props.modificaEmail(texto)}} placeholder='Email'/>
              <TextInput secureTextEntry style={FormStyle.textInput} value={this.props.senha} onChangeText={texto => {this.props.modificaSenha(texto)}} placeholder='Senha'/>     
              <Text style={FormStyle.errorMessage}>{this.props.erroCadastro}</Text>
          </View>
          <View style={{flex:2}}>
            {this.exibeBotaoCadastro()}
          </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  nome:  state.AutenticacaoReducer.nome,
  erroCadastro: state.AutenticacaoReducer.erroCadastro,
  loaderCadastro: state.AutenticacaoReducer.loaderCadastro

});

export default connect(mapStateToProps , { modificaEmail,modificaSenha,modificaNome,cadastraUsuario})(FormCadastro)
