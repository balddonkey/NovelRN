
import React, { Component } from 'react';
import { View, Text, Alert, Button, ListView } from 'react-native';
import Reflux from 'reflux';
const Biquge = require('../../ZZLibrary/Agent/Biquge');
const Store = Biquge.Store;
const Actions = Biquge.Actions;

const BookcaseRow = require('../../ZZProperComponents/BookcaseRow');
const Styles = require('./style.js');

const SearchIcon = require('../../ZZAssets/search.png');

class Bookcase extends Reflux.Component {

    static navigationOptions = ({ navigation }) => {
        const { state, setParams, navigate } = navigation;
        // const onPressRight =  () => navigate('Search')
        return {
            title: '书橱',
            headerRight: <Button color='red' fontSize='12' title='搜索' 
            onPress={function() {
                Actions.recommand();
            }}/>
        };
    };

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:function(r1, r2) {
            console.log('Change log:', r1, r2)
            return r1 !== r2;
        }});
        this.state = {
            // ...
            dataSource: ds.cloneWithRows([
                "吐鲁番秃驴",
                "Solomon",
                "balddonkey",
                "忘语",
                "土豆",
                "马铃薯"
            ])
        };
        this.store = Store;
    }

    onRenderRow(rowData) {
        return (<BookcaseRow source={{
            name: rowData
        }}/>);
    }

    render() {
        const t = this;
        return (
            <View style={Styles.Bookcase}>
                <Text style={{height: 44}}>{t.state.key}</Text>
                <ListView contentContainerStyle={Styles.ListView}
                    dataSource={t.state.dataSource}
                    renderRow={t.onRenderRow.bind(t)}
                    renderSeparator={(rowData) => (<View key={rowData} style={{backgroundColor: '#AAA', height: 0.5, marginLeft: 8}}/>)}
                />
            </View>
        );
    }

}

module.exports = Bookcase;
