import React,{Component} from 'react';
import {AppRegistry,View} from 'react-native';

export default class FixedDimensionBasic extends Component{

render()
{
  return(


    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      <View style={{flex: 2, backgroundColor: 'skyblue'}} />
      <View style={{flex: 3, backgroundColor: 'steelblue'}} />
    </View>

  );
}


}

// <View style={{width:20,height:50,backgroundColor:'skyblue'}}/>

AppRegistry.registerComponent('FixedDimensionBasic',()=>FixedDimensionBasic)
