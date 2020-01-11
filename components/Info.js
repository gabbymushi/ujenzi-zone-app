import React, { Component } from "react";
import { Text } from "react-native";

import StickyScroll from '../sticky-tabs/StickyScroll'

export default class Feed extends Component {

  static navigationOptions = {
    title: "My works",
  }

  render() {
    return (
      <StickyScroll {...this.props}>
        <Text>My works</Text>
        <Text>My works</Text>
        <Text>My works</Text>
        <Text>My works</Text>
        <Text>My works</Text>
        <Text>My works</Text>
        <Text>My works</Text>
      </StickyScroll>
    )
  }

}