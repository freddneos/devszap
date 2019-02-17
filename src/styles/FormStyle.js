import { StyleSheet } from 'react-native';

const FormStyle = StyleSheet.create({
    textInput : { 
        fontSize:20 ,
        height:50 , 
        backgroundColor:"white" ,
        borderRadius:10,
        marginTop: 10,
        paddingLeft: 20,
        borderRadius:30
    },
    errorMessage: {
        fontSize:15,
        color:'#ff0000',
        alignSelf: 'center',
    }
});

export default FormStyle;
