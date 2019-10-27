//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
//import react in our code.
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  Text,
} from 'react-native';
// import all basic components
 
//For React Navigation 3+
//import {
//  createStackNavigator,
//  createDrawerNavigator,
//  createAppContainer,
//} from 'react-navigation';
 
//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
 
//Import all the screens
import Screen1 from './components/ScreenOne';

import Screen2 from './components/ScreenTwo';
import Screen3 from './components/ScreenThree';
import MafundiConnect from './components/MafundiConnect';
import LoginScreen from './components/LoginScreen';
import Signup from './components/Signup';
import MafundiList from './components/MafundiList';
import FundiProfile from './components/FundiProfile';
 
//Import Custom Sidebar
import CustomSidebarMenu from './CustomSidebarMenu';
import { startAsync } from 'expo/build/AR';
 
global.currentScreenIndex = 0;
//Navigation Drawer Structure for all screen
class NavigationDrawerStructure extends Component {
  //Top Navigation Header with Donute Button
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./images/menu.png')}
            style={{ width: 30, height: 30, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 
//Stack Navigator for the First Option of Navigation Drawer
const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the First Option will be indexed here
  First: {
    screen: Screen1,
    navigationOptions: ({ navigation }) => ({
      title: 'Dashboard',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
  MafundiConnect: {
    screen: MafundiConnect,
    navigationOptions: ({ navigation }) => ({
      title: 'Mafundi Connect',
   //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
  MafundiList: {
    screen: MafundiList,
    navigationOptions: ({ navigation }) => ({
      title: 'Mafundi List',
   //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
  FundiProfile: {
    screen: FundiProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Fundi Profile',
   //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Second Option of Navigation Drawer
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Second Option will be indexed here
  Second: {
    screen: Screen2,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
 
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
//Stack Navigator for the Third Option of Navigation Drawer
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  Third: {
    screen: Screen3,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
});
//Stack Navigator for the Third Option of Navigation Drawer
/* const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Third Option will be indexed here
  MafundiConnect: {
    screen: MafundiConnect,
    navigationOptions: ({ navigation }) => ({
      title: 'Mafundi Connect',
   //   headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#455a64',
      },
      headerTintColor: '#fff',
    }),
  },
}); */
 
//Drawer Navigator Which will provide the structure of our App
const DrawerNavigatorExample = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    NavScreen1: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen one',
      },
    },
    NavScreen2: {
      screen: Screen2_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen Two',
      },
    },
    NavScreen3: {
      screen: Screen3_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen Three',
      },
    },
/*     NavScreen4: {
      screen: Screen4_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Demo Screen Three',
        header: "e"
      },
    }, */
  },
  {
    //For the Custom sidebar menu we have to provide our CustomSidebarMenu
    contentComponent: CustomSidebarMenu,
    //Sidebar width
    drawerWidth: Dimensions.get('window').width - 130,
  }
);
const AppStackNavigator = createStackNavigator({
  LoginScreen: { screen: LoginScreen,
    navigationOptions: {
      header: null
    },
   },
   Signup: { screen: Signup,
    navigationOptions: {
      header: null
    },
   },
  /* SignUpScreen: { screen: SignUpScreen }, */
  DrawerNavigator: {
    screen: DrawerNavigatorExample,
    navigationOptions: {
      header: null
    }
  }
},
  {
    navigationOptions: {
      gesturesEnabled: false,
    }
  });
/* const App = createAppContainer(AppStackNavigator); */
export default createAppContainer(AppStackNavigator);