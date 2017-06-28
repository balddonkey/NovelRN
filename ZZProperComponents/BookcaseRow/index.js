
import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text, Image, ListView, Alert } from 'react-native';

const Styles = require('./style.js');

class BookcaseRow extends React.Component {
    static propTypes = {
        source: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            source: props.source != null ? props.source : {}
        }
    }

    handlePress() {
        Alert.alert('press');
        if (typeof this.props.onPress == 'function') {
            this.props.onPress(this.props.source);
        }
    }

    render() {
        let t = this;
        return (
            <View style={Styles.BookcaseRow}>
            <TouchableOpacity style={Styles.Touchable} onPress={t.handlePress.bind(t)}>
            <Image style={Styles.Thumb} source={require('../../ZZAssets/gaofangfang.jpg')} resizeMode='cover'/>
            <View style={Styles.Right}>
            <Text style={Styles.Name}>长河落日圆</Text>
            <Text style={Styles.Newest}>最新章节: 日狗少年屎大彪</Text>
            </View>
            </TouchableOpacity>
            </View>
        )
    }

    componentWillReceiveProps(nextProps) {
        Alert.alert('receive props');
        this.setState({
            source: {
                name: 'hahaha'
            }
        });
    }
}

module.exports = BookcaseRow;
