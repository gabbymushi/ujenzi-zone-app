//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
// import all basic components
import Logo from './Logo';

export default class SignupForm extends Component {
    /*  constructor(props) {
         super(props);
       } */
    //Screen2 Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='First Name'
                    placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Last Name'
                    placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Email'
                    placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Phone no'
                    placeholderTextColor='#ffffff'
                />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    placeholderTextColor='#ffffff'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('DrawerNavigator')}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 150,
        justifyContent: 'center',
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#ffffff',
        marginVertical: 10
    },
    button: {
        width: 300,
        height: 50,
        backgroundColor: '#1c313a',
        borderRadius: 25,
        paddingVertical: 13,
        marginVertical: 10
    },
    buttonText: {
        fontWeight: '500',
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'center'
    }
});