//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {TouchableOpacity, AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
// import all basic components
import { Icon } from 'react-native-elements';

export default class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GridViewItems: [
                { key: 'Mafundi Connect', navOptionThumb: 'build' ,navigateTo:'MafundiConnect'},
                { key: 'Suppliers', navOptionThumb: 'build' ,navigateTo:'MafundiConnect1'},
                { key: 'Quick Services', navOptionThumb: 'build' ,navigateTo:'MafundiConnect2'},
                { key: 'Four', navOptionThumb: 'build',navigateTo:'MafundiConnect3' },
                { key: 'Five', navOptionThumb: 'build' ,navigateTo:'MafundiConnect4'},
                { key: 'SiX', navOptionThumb: 'build',navigateTo:'MafundiConnect5' },
                { key: 'Seven', navOptionThumb: 'build',navigateTo:'MafundiConnect6' },
                { key: 'Eight', navOptionThumb: 'build' ,navigateTo:'MafundiConnect7'},
            ]
        }
    }
    GetGridViewItem(item) {

        Alert.alert(item);

    }
    //Screen1 Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.GridViewItems}
                    renderItem={({ item }) => <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate(item.navigateTo);
                    }} style={styles.GridViewBlockStyle}>
                        <Icon name={item.navOptionThumb} size={25} color="#808080" />
                        <Text style={styles.GridViewInsideTextItemStyle}  >
                            {item.key} </Text>
                    </TouchableOpacity>}
                    numColumns={2}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 10,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0

    },

    GridViewBlockStyle: {

        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        height: 100,
        margin: 5,
        backgroundColor: '#455a64',
        //backgroundColor: '#00BCD4',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        elevation: 5

    }
    ,

    GridViewInsideTextItemStyle: {

        color: '#fff',
        padding: 10,
        fontSize: 15,
        justifyContent: 'center',

    },

});