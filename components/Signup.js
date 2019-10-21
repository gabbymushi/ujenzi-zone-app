//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, StatusBar } from 'react-native';
// import all basic components
import Logo from './Logo';
import SignupForm from './SignupForm';

export default class Signup extends Component {
    //Screen2 Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <StatusBar
                    backgroundColor="#1c313a"
                    barStyle="light-content"
                />
                {/* <Logo /> */}
                <SignupForm />
                <View style={styles.SignupTextCont}>
                    <Text style={styles.SignupText}> Already have acccount?</Text>
                    <Text style={styles.SignupButton}> Sign in</Text>
                </View>
                {/*    <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('DrawerNavigator')}
                /> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#455a64',
        flex: 1,
        //paddingTop: 20,
        alignItems: 'center',
        //marginTop: 50,
        justifyContent: 'center',
    },
    SignupTextCont: {
        flexGrow: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical:16,
        flexDirection:'row'

    },
    SignupText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize:16
    },
    SignupButton: {
        color: '#ffffff',
        fontSize:16,
        fontWeight:'500',
    },
});