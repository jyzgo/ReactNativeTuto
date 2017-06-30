/**
 * Created by Administrator on 2017/6/30 0030.
 */
import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View ,StyleSheet} from 'react-native';

const Name_arr = [
    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
];

export  default  class ListViewBasics extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(Name_arr)
        };
    }

    render() {
        return (
            <View  style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                <ListView
                    contentContainerStyle={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text style={styles.itemStyle}>What is {rowData}</Text>}/>
            </View>

        );
    };
}
    const styles = StyleSheet.create({
        listView: {

            flexDirection:'row',
            justifyContent: 'center',
        },
        itemStyle:{
            alignItems:'center',
            color:'red'
        }
    });
