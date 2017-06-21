
import React, { Component } from 'react';
import {
    Alert,
    Text,
    TextInput,
    View,
    Button,
    Image,
    ListView
} from 'react-native';
import Reflux from 'reflux';
const styles = require('./NovelSearch.styl.js');
const Reader = require('../../ZZLibrary/Reader.js');
const Actions = Reader.Actions;
import SearchBar from'../../ZZComponents/SearchBar';

class NovelSearch extends Reflux.Component {
    static navigationOptions = {
        title: '惊不惊喜？吃不吃鸡？'
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.store = Reader.Reader;
    }

    onSearch(text) {
        Actions.search(text, null, () => {
            
        })
    }

    render() {
        let t = this;
        return (
            <View style={styles.NovelSearch}>
            <SearchBar 
            onChangeText={t.onSearch.bind(t)}
            />
            <Text>{t.state.key}</Text>
            </View>
        );
    }
}

module.exports = NovelSearch;
