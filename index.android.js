import React,{Component} from 'react';
import {AppRegistry,Text,View,Navigator} from 'react-native';

import Component5 from './app/components/Component5/Component5';
import Component6 from './app/components/Component6/Component6';


export default class myapp extends Component {

  renderScene(route,navigator)
  {
    switch (rount.id) {
      case 'component5':
        return (<Component5 navigator={navigator} title="component5"/>)
        case 'component6':
          return (<Component5 navigator={navigator} title="component6"/>)
        
      default:

    }
  }
  render(){
    return(
      <Navigator>
        initialRoute ={{id:'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route,routeStack)=>Navigator.SceneConfigs.FloatFromBottom}
      </Navigator>
    );
  }

}

AppRegistry.registerComponent('myapp',()=>myapp);
