
import React, { Component, PropTypes } from 'react';
import { View, Image, TextInput, Alert } from 'react-native';

const screen = require('Dimensions').get('window');

var searchIcon = require('../../ZZSrcs/search.png');

class SearchBar extends Component {

    static propTypes = {
        icon: PropTypes.number,         // 搜索图标, 使用require(地址)生成的引用
        iconMargin: PropTypes.number,  // icon padding
        placeholder: PropTypes.string,  
        placeholderTextColor: PropTypes.string, //Hex RGB
        padding: PropTypes.number,      // 搜索框与组件内间距
        interRadiu: PropTypes.number,   // 搜索框内部输入区域圆角半径
        // TextInput props, see TextInput, default is always
        clearButtonMode: PropTypes.string,  
        // Event callback
        onChangeText: PropTypes.func,
        onEndEditing: PropTypes.func,
        onFocus: PropTypes.func,
        onSubmitEditing: PropTypes.func
    }
    
    static defaultProps = {
        padding: 8,
        interRadiu: 5,
        icon: searchIcon,
        iconMargin: 5,
        defaultHeight: 44,
        minPadding: 3,
        clearButtonMode: 'always'
    }

    constructor(props) {
        // if (props === undefined) {
        super(props);
        this.state = {
            display: 'flex',
            text: ''
        };
    }

    handleChangeText(text) {
        this.setState({
            text: text
        });
        if (this.props.onChangeText != null) {
            this.props.onChangeText(text);
        }
    }

    handleEndEditing(text) {
        if (this.props.onEndEditing != null) {
            this.props.onEndEditing(text);
        }
    }

    handleFocus(text) {
        if (this.props.onFocus != null) {
            this.props.onFocus(text);
        }
    }

    handleSubmitEditing() {
        if (this.props.onSubmitEditing != null) {
            this.props.onSubmitEditing(this.state.text);
        }
    }

    render() {
        let t = this;
        return (
            <View style={{
                flex: 0,
                flexDirection: 'row',
                height: t.props.defaultHeight,
                width: screen.width,
                backgroundColor: '#C8C8CE',
                padding: Math.max(this.props.padding, this.props.minPadding)
            }}>
            <View style={{
                flex: 0,
                flexDirection: 'row',
                height: '100%',
                width: '100%',
                backgroundColor: '#FFF',
                borderRadius: t.props.interRadiu,
                overflow: 'hidden',
                paddingLeft: t.props.iconMargin,
                paddingVertical: t.props.iconMargin
            }}>
            <Image
            resizeMode='contain'
            source={searchIcon}
            aspectRatio={1}
            style={{
                width: t.props.defaultHeight - (t.props.iconMargin + t.props.padding) * 2,
            }}
            />
            <TextInput
            style={{
                height: '100%',
                left: 8,
                width: screen.width - t.props.defaultHeight - Math.max(this.props.padding, this.props.minPadding)
            }}
            placeholder='hehehe'
            onChangeText={t.handleChangeText.bind(t)}
            onEndEditing={t.handleEndEditing.bind(t)}
            onFocus={t.handleFocus.bind(t)}
            onSubmitEditing={t.handleSubmitEditing.bind(t)}
            clearButtonMode={t.props.clearButtonMode}
            />
            </View>
            </View>
        );
    }
}

export default SearchBar;
