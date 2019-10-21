//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
// import all basic components
import { Icon } from 'react-native-elements';

export default class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GridViewItems: [
                { key: 'Mafundi Connect', navOptionThumb: 'build' },
                { key: 'Suppliers', navOptionThumb: 'build' },
                { key: 'Quick Services', navOptionThumb: 'build' },
                { key: 'Four', navOptionThumb: 'build' },
                { key: 'Five', navOptionThumb: 'build' },
                { key: 'SiX', navOptionThumb: 'build' },
                { key: 'Seven', navOptionThumb: 'build' },
                { key: 'Eight', navOptionThumb: 'build' },
                /*           { key: 'Five' },
                          { key: 'Six' },
                          { key: 'Seven' },
                          { key: 'Eight' },
                          { key: 'Nine' },
                          { key: 'Ten' },
                          { key: 'Eleven' },
                          { key: 'Twelve' },
                          { key: 'Thirteen' },
                          { key: 'Fourteen' },
                          { key: 'Fifteen' },
                          { key: 'Sixteen' },
                          { key: 'Seventeen' },
                          { key: 'Eighteen' },
                          { key: 'Nineteen' },
                          { key: 'Twenty' } */
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
                    renderItem={({ item }) => <View style={styles.GridViewBlockStyle}>
                        <Icon name={item.navOptionThumb} size={25} color="#808080" />
                        <Text style={styles.GridViewInsideTextItemStyle} onPress={this.GetGridViewItem.bind(this, item.key)} >
                            {item.key} </Text>
                    </View>}
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
        /*   backgroundColor: '#00BCD4', */
        backgroundColor: '#455a64',
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