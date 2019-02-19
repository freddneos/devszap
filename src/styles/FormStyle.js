import { StyleSheet } from 'react-native';
import Theme from './Theme';

const FormStyle = StyleSheet.create({
    textInput : { 
        fontSize:20 ,
        height:50 , 
        backgroundColor:"white" ,
        borderRadius:10,
        marginTop: 10,
        paddingLeft: 20,
        borderRadius:30,
       
    },
    errorMessage: {
        fontSize:15,
        color:'#ff0000',
        alignSelf: 'center',
        padding:10
    },
    text: {
        ...Theme.text,
        padding:20
    },
    superTitle:{
        fontSize:30 , fontWeight:"bold", fontFamily: 'Arial',...Theme.text
    }

});

export default FormStyle;
