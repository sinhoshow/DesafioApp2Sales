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
  TouchableOpacity,
  Linking
} from 'react-native';

import ReadMore from '@expo/react-native-read-more-text';
import HTMLView  from 'react-native-htmlview';
import ViewMoreText from 'react-native-view-more-text';

export default class Description extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var htmlContent = this.props.text;
    return (

      <View style={styles.container}>
      <ViewMoreText
      numberOfLines={5}
      renderViewMore={this.renderViewMore}
      renderViewLess={this.renderViewLess}>
      <HTMLView
      value={htmlContent}
      onLinkPress={(url) =>
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log('Don\'t know how to open URI: ' + url);
          }
        })
      }
      />
      </ViewMoreText>
      </View>
    );
  }

  renderViewMore(onPress){

    return(
      <Text style={styles.renderTruncButton} onPress={onPress}>Continuar Lendo</Text>
    )
  };

  renderViewLess(onPress){
    return(
      <Text style={styles.renderTruncButton} onPress={onPress}>Esconder</Text>
    )
  };


}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },

  renderTruncButton:{
    color: 'blue',
    textAlign: 'right'
  }

});
