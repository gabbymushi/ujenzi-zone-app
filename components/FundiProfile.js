//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button, TextInput, SafeAreaView, Image, ScrollView } from 'react-native';
// import all basic components
import Logo from './Logo';

export default class FundiProfile extends Component {
    //Screen2 Component
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false}>
                    <View style={styles.titleBar}>

                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <View style={styles.profileImage}>
                            <Image source={require("../images/drawer.png")}></Image>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //paddingTop: 20,
        alignItems: 'center',
        //marginTop: 50,
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'HelveticaNeue',
        color: '#52575D'
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow:"hidden"
    }
});