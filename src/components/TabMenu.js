import React from 'react'
import {View , Text,SafeAreaView,StyleSheet,StatusBar} from 'react-native'
import {TabBar} from 'react-native-tab-view'

export default props => (
    <SafeAreaView style={styles.mainTab}>
        <StatusBar backgroundColor="#000000" />
        <View style={styles.container}>
             <Text style={styles.text}>DevsZap</Text>
        </View>
        <TabBar {...props} style={styles.tab}/>
    </SafeAreaView>
)

const styles = StyleSheet.create({
    text:{
        fontSize:25,
        color:"white",
        fontWeight: 'normal'
    },
    container:{
        padding:10,
        height:50,
        backgroundColor:"#000000",
        paddingLeft: 20
    },
    tab:{
        backgroundColor:"#000000",
        elevation:0
    },
    mainTab:{
        marginBottom:6
    },

});

