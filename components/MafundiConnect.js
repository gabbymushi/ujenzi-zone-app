//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, FlatList, Text, View, Alert, Platform } from 'react-native';
// import all basic components
import { Icon } from 'react-native-elements';

export default class MafundiConnect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GridViewItems: [],
            loading: false,
            error: null,
        }
        this.arrayholder = [];
    }
    GetGridViewItem(item) {

        Alert.alert(item);

    }
    componentDidMount() {
        this.getCategories();
    }
    getCategories = () => {
        const url = `http://172.20.10.4:4500/api/v1/categories`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    GridViewItems: res,
                    error: res.error || null,
                    loading: false,
                });
                this.arrayholder = res.results;
            })
            .catch(error => {
                console.log('test', error);
                this.setState({ error, loading: false });
            });
    };
    //Screen1 Component
    render() {
        return (
            <View style={styles.MainContainer}>
                <FlatList
                    data={this.state.GridViewItems}
                    keyExtractor={(item, index) => item._id}
                    renderItem={({ item }) => <View style={styles.GridViewBlockStyle}>
                        <Icon name={item.navOptionThumb} size={25} color="#808080" />
                        <Text style={styles.GridViewInsideTextItemStyle} onPress={() => {
                            //alert(item.navigateTo);
                            //global.currentScreenIndex = key;
                            this.props.navigation.navigate(`MafundiList`, { id: item._id });
                        }} >
                            {item.name} </Text>
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