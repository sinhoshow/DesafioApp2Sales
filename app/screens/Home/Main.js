/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import Navbar from './Components/Navbar';
import Content from '../Content/Content';




export default class Main extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={{flex:1}}>

      <Navbar />

      <View style ={styles.title}>
      <Text style={styles.textTitle}> FEED </Text>
      </View>

      <View style = {{flex: 12, backgroundColor: 'rgb(125,125,125)'}}>
      <Content content={this.props.json} navigator={this.props.navigator}/>
      </View>
      </View>
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
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 30
  },
  title:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(16,148,111)'
  },
  textTitle:{
    color: 'rgb(255,255,255)',
    fontSize: 16
  }

});
