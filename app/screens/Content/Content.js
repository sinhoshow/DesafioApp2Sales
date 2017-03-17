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
  TouchableOpacity,
  Linking
} from 'react-native';

import Button from './Components/Button';
import Description from './Components/Description';
import Categories from './Components/Categories';

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
      categoria: 0
    }
  }


  renderData(data){
    return (
      <View style = {styles.container}>
      <View style={{flex:4}}>
      <Text style={styles.title}>{data.TITULO}</Text>
      <Description text = {data.DESCRICAO}/>
      </View>

      {this.renderImage(data.IMG_LINK)}
      {this.renderVideo(data.VIDEO_LINK)}
      {this.renderButton(data.BTN_TEXT, data.BTN_LINK)}


      <View style={{flex:1}}>
      <Text style={styles.like}>{data.RECORD_ITEM[0].CURTIDA.length} Curtidas</Text>
      </View>

      </View>
    )


  }

  componentWillMount(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.content.CONTEUDO)
    })
  }

  renderImage(imgLink){
    if (imgLink!=""){
      return (
        <View style={{flex:4}}>
        <Image
        style = {styles.image}
        source={{uri : imgLink }}
        ></Image>
        </View>
      );
    }
    return ;
  }

  renderVideo(videoLink){
    if(videoLink!=""){
      return(
        <View style={styles.video}>
        <TouchableOpacity style={styles.buttomVideo} onPress={()=>this.openLink(videoLink)}>
        <Text style={styles.buttomTextVideo}> ASSITA AO VÍDEO </Text>
        </TouchableOpacity>
        </View>);
      } return;
    }
    renderButton(btnTxt, btnUrl){
      if (btnTxt!=""){
        return (
          <View style={{flex:1}}>
          <Button text={btnTxt} url={btnUrl} navigator={this.props.navigator}/>
          </View>
        );
      } else {
        return null;
      }
    }

    openLink(url){
      Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log('Don\'t know how to open URI: ' + url);
        }
      })
    }


    renderConteudo(categoryId){
      if (categoryId==0){
        this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.content.CONTEUDO)})
      }
      else{
        this.setState({dataSource: this.state.dataSource.cloneWithRows(this.props.content.CONTEUDO.filter((content) => content.ID_CATEGORIA === categoryId))})
      }

    }




    render() {
      return (
        <View style={{flex:1}}>
        <View style = {{flex:1}}>
        <Categories categories={this.props.content.CATEGORIA} callback={this.renderConteudo.bind(this)}/>
        </View>
        <View style={{flex:11}}>
        <ListView
        dataSource= {this.state.dataSource}
        renderRow = {this.renderData.bind(this)}
        ></ListView>
        </View>
        </View>
      );
    }


  }

  const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: 'rgb(255,255,255)',
      borderBottomColor: 'rgb(150,150,150)',
      borderBottomWidth: 5,
    },
    title : {
      fontSize: 20,
      fontWeight : 'bold',
      color: 'rgb(0,0,0)',
      margin : 10
    },
    image:{

      width: 415,
      height: 250,
      resizeMode: 'contain'
    },
    like : {
      fontSize: 20,
      color: 'rgb(150,150,150)',
      marginLeft : 20,
      marginBottom: 10
    },
    video: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttomVideo: {
      backgroundColor: 'red',
      borderRadius: 5,
    },
    buttomTextVideo:{
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 10,
      color: 'white'
    }
  });
