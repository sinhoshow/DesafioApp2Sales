/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';


export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress = {this.handleClick}>
      <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );

  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,173,98)',
    borderRadius: 5,
    margin: 10
  },
  text : {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgb(255,255,255)',
    paddingVertical: 10,
    paddingHorizontal: 50

  }

});
