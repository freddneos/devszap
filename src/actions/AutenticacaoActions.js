
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64'

export const modificaEmail = (texto) => {
    return {
        type: 'modifica_email',
        payload: texto
    }
}
export const modificaSenha = (texto) => {
    return {
        type: 'modifica_senha',
        payload: texto
    }
}

export const modificaNome = (texto) => {
    return {
        type: 'modifica_nome',
        payload: texto
    }
}

export const cadastraUsuario = (cadastro) => {
    return dispatch => {
        firebase.auth().createUserWithEmailAndPassword(cadastro.email,cadastro.senha)
         .then(user => {
            let emailBase64 = b64.encode(cadastro.email)

            firebase.database().ref(`/contatos/${emailBase64}`)
            .push({nome:cadastro.nome})
            .then(value => { cadastraUsuarioSucesso(dispatch)})
         })
         .catch(error => cadastraUsuarioErro(error,dispatch));
    }
}

const cadastraUsuarioSucesso = (dispatch) => {
  //  dispatch ({type: 'cadastra_usuario',payload: {...cadastro}})
  dispatch({type: 'cadastro_usuario_sucesso'})
  Actions.BoasVindas();
}

const cadastraUsuarioErro = (erro,dispatch) => {
    dispatch({type: 'cadastro_usuario_erro',payload: erro.message })
}