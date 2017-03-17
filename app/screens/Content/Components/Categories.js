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
  ListView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.categories),

    }
  }


  renderCategory(idAtivo){
    return (
      <ListView horizontal
      dataSource={this.state.dataSource}
      renderRow={(rowData) =>
        <View style={{paddingHorizontal: 5}}>
        <TouchableOpacity style = {styles.button} onPress={() => this.pressButtom(rowData.ID)}>
        <Text style = {styles.butoonText}> {rowData.DESCRICAO.toUpperCase()} </Text>
        </TouchableOpacity>

        </View>

      }
      />
    )
  }

  pressButtom(idCategory){
    this.props.callback(idCategory);
  }


  render() {

    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.category}>
      <View style={{paddingHorizontal: 5}}>
      <TouchableOpacity style = {styles.button} onPress={() => this.pressButtom('0')}>
      <Text style = {styles.butoonText}> TODOS </Text>
      </TouchableOpacity>
      </View>
      {this.renderCategory()}
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  butoonText:{
    color: 'rgb(255,255,255)',
    fontSize: 16
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(16,148,111)',
    padding: 5,
    borderRadius: 30
  },
  category:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(255,255,255)'
  },
  list:{
    flexDirection: 'row'
  },
  activeButtom:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(8,74,55)',
    padding: 5,
    borderRadius: 30
  }

});
