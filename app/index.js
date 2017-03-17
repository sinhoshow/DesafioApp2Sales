import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import Home from './screens/Home/Home'

export default class App extends Component {
  render() {
    return (
        <Navigator
        initialRoute={{id: 'home', value: 'start'}}
        renderScene={(route,navigator) => {
          switch(route.id){
            case 'home':
            return <Home navigator={navigator}/>
            break;
          }
        }
        }

        >
        </Navigator>
      );
  }
}
