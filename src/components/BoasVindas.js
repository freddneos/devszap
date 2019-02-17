import React , {Component} from 'react'
import { SafeAreaView,View,Text,Image , Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class BoasVindas extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:2 , justifyContent:"center",alignItems: 'center',}}>
                    <Text style={{fontSize:25,padding:20}}>Seja Bem Vindo</Text>
                    <Text style={{fontSize:15}}>Seu Cadastro foi realizado com sucesso!</Text>
                </View>
                <View style={{flex:2 , alignItems: 'center'}}>
                    <Button onPress={()=>Actions.formLogin()} title="Acessar"></Button>
                </View>
            </SafeAreaView>
        )
    }

}