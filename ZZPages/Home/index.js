
import React, { Component } from 'react';
import { View, Text, Alert, Button, Image, TouchableHighlight } from 'react-native';
import Reflux from 'reflux';

const styles = require('./style.js');

const SearchIcon = require('../../ZZSrcs/search.png');

class Bookcase extends Reflux.Component {

    static navigationOptions = ({ navigation }) => {
        const { state, setParams } = navigation;
        // const onPressRight = 
        return {
            title: '书橱',
            headerRight: <Button title='搜索' />
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            // ...
        };
    }

    render() {
        return (
            <View style={styles.Bookcase}>
            </View>
        );
    }

}

module.exports = Bookcase;
