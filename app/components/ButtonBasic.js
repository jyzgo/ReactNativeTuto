import React,{Component} from 'react';
import {AppRegistry,View,Text,TextInput,Button,Alert,StyleSheet,TouchableHighlight,TouchableOpacity,TouchableNativeFeedback,Platform
,TouchableWithoutFeedback} from 'react-native';

export default class ButtonBasic extends Component {
  _onButtonPressed(tag)
  {
      Alert.alert("You press the button! " + tag);
  }

  render()
  {
      return(
          <View style = {styles.container}>


              <TouchableHighlight onPress={()=>this._onButtonPressed('HighlightBtn')} underlayColor='white'>
                  <View style={styles.button}>
                      <Text style = {styles.buttonText}>TouchableHighlight</Text>
                  </View>
              </TouchableHighlight>

              <TouchableOpacity onPress ={()=>this._onButtonPressed('Opacity Press')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Touchopacity
                    </Text>
                </View>
              </TouchableOpacity>

              <TouchableNativeFeedback onPress={()=>this._onButtonPressed('TouchNative')}
              background={Platform.OS === 'android'?TouchableNativeFeedback.SelectableBackground() : ''}
              >

                  <View style = {styles.button}>
                      <Text style={styles.buttonText}>
                          TouchNativeFeedback
                      </Text>
                  </View>

              </TouchableNativeFeedback>


              <TouchableWithoutFeedback onPress={()=>this._onButtonPressed('TouchableWithoutFeedback')}>
                  <View style = {styles.button}>
                      <Text style={styles.buttonText}>
                          TouchableWithoutFeedback
                      </Text>
                  </View>
              </TouchableWithoutFeedback>

              <TouchableOpacity onPress={()=>this._onButtonPressed('Just Press')} onLongPress ={()=>this._onButtonPressed('OnLongPress')}>
              <View style = {styles.button}>
                  <Text style={styles.buttonText}>
                      LongPress

                  </Text>

              </View>
              </TouchableOpacity>


          </View>



      );
  }



}

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
})
