/**
 * Created by Administrator on 2017/6/30 0030.
 */
import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component{
    constructor(props){
        super(props);
        console.log('starttt');
        this.state={
            isLoading :true
        }
    }

    nnomponentDidMount(){
        console.log("did mount");
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response)=>response.json())
            .then((responseJson)=>{
            let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
            this.setState({
                isLoading:false,
                dataSource:ds.cloneWithRows(responseJson.movies),
            },function () {
                console.log('done done');
            });
            })
            .catch((error)=>{
            console.error(error);
            });
    }

    render(){
        if(this.state.isLoading)
        {
            return(
                <View style={{flex:1,paddingTop:20}}>
                    <ActivityIndicator/>
                </View>
            );
        }

        return(
            <View style={{flex:1,paddingTop:20}}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData)=><Text>{rowData.title},{rowData.releaseYear}</Text>}/>

            </View>
        );
    }

}
