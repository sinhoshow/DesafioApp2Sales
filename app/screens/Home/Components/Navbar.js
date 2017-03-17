/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import NavigationBar from 'react-native-navbar';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <NavigationBar
          style = {styles.navbar}
          title={
              <Image style={styles.navbarLeft}source={require('../../../lib/anatext.png')}/>
          }
          />

    );

  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'rgb(16,148,111)',
  },
  navbarLeft:{
    marginTop: 5,
    marginLeft: 10,
    width: 120,
    height: 30
  },
  navbarRight:{
    marginTop: 5,
    marginRight: 10,

  }
});
