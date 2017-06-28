
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
const styles = require('./style.js');
import SearchBar from'../../ZZComponents/SearchBar';

class NovelSearch extends Reflux.Component {
    static navigationOptions = ({navigation}) => {
        const { state } = navigation;
        return {
            title: '搜索'
        }
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    onSearch(text) {
        
    }

    onSubmitEditing(text) {
        Alert.alert(text);
    }

    render() {
        const t = this;
        return (
            <View style={styles.NovelSearch}>
            <SearchBar 
            onChangeText={t.onSearch.bind(t)}
            onSubmitEditing={t.onSubmitEditing.bind(t)}
            />
            <Text>{t.state.key}</Text>
            </View>
        );
    }
}

module.exports = NovelSearch;
