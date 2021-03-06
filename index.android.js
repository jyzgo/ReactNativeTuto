import React,{Component} from 'react';
import {AppRegistry,Text,View,Image,StyleSheet} from 'react-native';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';
import FixedDimensionBasic from './app/components/FixedDimensionBasic';
import  TextComponent from './app/components/Movies';


class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
    setInterval(()=>{
      this.setState(preState => {
        return {showText:!preState.showText};
      });
    },1000);
  }

  render()
  {
    let display = this.state.showText ? this.props.t : "";
    return(
      <Text>{display}</Text>
    );
  }
}


class Greeting extends Component {
  render(){
    return(
    <Text>Hell {this.props.hellId}</Text>
    );
  }
}

//let png = '1';
const png = "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg";
export default class myapp extends Component {
    render(){
        return(
            <TextComponent/>
        );
    }
}


const styles = StyleSheet.create({
  big:{
    color:'red',
    fontSize:30
  },
  green:{
    color:'green',
    fontWeight:'bold'
  }
});

AppRegistry.registerComponent('myapp',()=>myapp);
