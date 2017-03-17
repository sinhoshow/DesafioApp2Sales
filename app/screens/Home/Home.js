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
  ListView
} from 'react-native';

import Splash from './Splash'
import Main from './Main'

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      varJson: ''
    }
  }



  componentWillMount() {
    return fetch('http://demo1650020.mockable.io/anatex')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        varJson : responseJson,
        loaded: true
      })

    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {

    if (!this.state.loaded){
      return (
        <View style={{flex:1}}>
        <Splash/>
        </View>
      );
    } else {
      return (
        <View style={{flex:1}}>
        <Main json={this.state.varJson} navigator={this.props.navigator}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)',
  }
});
