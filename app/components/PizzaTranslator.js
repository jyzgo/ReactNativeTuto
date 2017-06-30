import React,{Component} from 'react';
import {AppRegistry,View,Text,TextInput,Button,Alert} from 'react-native';

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text:'prop',num:10};
  }

  render()
  {
    return(
      <View style={{padding:10}}>
        <TextInput
          style={{height:40}}
          placeholder="whatpizza"
          onChangeText={(mm)=>this.setState({text:mm,num:20})}
        />

        <Text style={{padding:130,fontSize:20}}>
          PizzaNum name is {this.state.text} kf {this.state.num}
        </Text>
        <Button
          style={{color:'red'}}
           onPress={() => { Alert.alert('You tapped the button!')}}
          title="Press me"
        />
      </View>
    );
  }
}
