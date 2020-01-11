import React, { Component } from "react";
import { Text } from "react-native";

import StickyScroll from '../sticky-tabs/StickyScroll'

export default class Feed extends Component {

  static navigationOptions = {
    title: "Profile",
  }

  render() {
    return (
      <StickyScroll {...this.props}>
        <Text>First Name</Text>
        <Text>Middle Name</Text>
        <Text>Last Name</Text>
        <Text>Phone</Text>
        <Text>Email</Text>
        <Text>Address</Text>
        <Text>Office Location</Text>
      </StickyScroll>
    )
  }

}