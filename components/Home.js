import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
  createMaterialTopTabNavigator,
} from 'react-navigation';

import StickyTabs from '../sticky-tabs/StickyTabs';

import Header from './Header';
import Feed from './Feed';
import Info from './Info';

const TabNavigator = createMaterialTopTabNavigator(
  {
    feed: { screen: Feed },
    info: { screen: Info },
  },
  {
    tabBarPosition: 'top',
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#0084ff',
      inactiveTintColor: '#626262',
      labelStyle: {
        fontWeight: 'bold',
      },
      indicatorStyle: {
        backgroundColor: '#0084ff',
      },
      style: {
        backgroundColor: 'white',
      },
    },
  }
);

export default class Home extends Component {
  
  static router = TabNavigator.router;

  render() {
    return (
      <StickyTabs
        headerHeight={150}
        headerComponent={<Header />}
        contentComponent={<TabNavigator navigation={this.props.navigation} />}
      />
    );
  }
  
}
