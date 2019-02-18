import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    AUTENTICA_USUARIO_SUCESSO,
    AUTENTICA_USUARIO_ERRO,
    ACTIVITY
} from '../actions/types'


const INITIAL_STATE = {
    nome: "",
    email: "",
    senha: "",
    error: "",
    erroAutenticacao: "",
    erroCadastro: "",
    loaderLogin: false,
    loaderCadastro:false

}

export default (state = INITIAL_STATE, action) => {
    console.log('Olhando a action pelo reducer...', action)
    switch (action.type) {
        case MODIFICA_EMAIL:
            return {
                ...state,
                email: action.payload
            }
            break;
        case MODIFICA_SENHA:
            return {
                ...state,
                senha: action.payload
            }
            break;
        case MODIFICA_NOME:
            return {
                ...state,
                nome: action.payload
            }
            break;
        case CADASTRO_USUARIO_ERRO:
            return {
                ...state,
                erroCadastro: action.payload,
                loaderCadastro:false
            }
            break;
        case CADASTRO_USUARIO_SUCESSO:
            return {
                ...state,
                nome: '',
                senha: '',
                loaderCadastro:false
            }
            break;

        case AUTENTICA_USUARIO_ERRO:
            return {
                ...state,
                erroAutenticacao: action.payload,
                loaderLogin: false

            }
            break;
        case AUTENTICA_USUARIO_SUCESSO:
            return {
                ...state,
                email: '',
                senha: '',
                loaderLogin: false
            }
            break;
        case ACTIVITY:
            return {
                ...state,
                loaderLogin: true,
                loaderCadastro:true
            }
            break;

        default:
            return state
            break;
    }
}