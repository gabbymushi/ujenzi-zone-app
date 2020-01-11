import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <Image
        source={{
          uri: "https://cdn.pixabay.com/photo/2017/01/23/16/58/coffee-with-a-view-2003132_960_720.jpg"
        }}
        style={{
          width: '100%',
          height: 200,
          flex: 1,
        }}
      />
    )
  }
}
