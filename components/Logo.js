//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, Image } from 'react-native';
// import all basic components

export default class Logo extends Component {
    //Screen2 Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <Image source={require('../images/logo.jpg')}
                    style={{ width: 70, height: 70 }} />
                    <Text style={styles.LogoText}>Welcome to ujenzi zone</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
       // backgroundColor:'#455a64',
        flex: 1,
        //paddingTop: 20,
        alignItems: 'center',
        //marginTop: 50,
        justifyContent: 'center',
    },
    LogoText: {
       fontSize:18,
       color:'rgba(255,255,255,0.7)',
       marginVertical: 15,
       // flex: 1,
        //paddingTop: 20,
        //alignItems: 'center',
        //marginTop: 50,
        //justifyContent: 'center',
    },
});
