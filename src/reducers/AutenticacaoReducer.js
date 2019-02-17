const INITIAL_STATE = {
    nome: "",
    email: "",
    senha: "",
    error: "",
}

export default (state = INITIAL_STATE, action) => {
    console.log('Olhando a action pelo reducer...', action)
    switch (action.type) {
        case 'modifica_email':
            return {
                ...state,
                email: action.payload
            }
            break;
        case 'modifica_senha':
            return {
                ...state,
                senha: action.payload
            }
            break;
        case 'modifica_nome':
            return {
                ...state,
                nome: action.payload
            }
            break;
        case 'cadastro_usuario_erro':
            return {
                ...state,
                error: action.payload
            }
            break;
            case 'cadastro_usuario_sucesso':
            return {
                ...state,
                nome: '', senha: ''
            }
            break;

        default:
            return state
            break;
    }
}