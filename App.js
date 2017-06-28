

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
const NovelSearch = require('./ZZPages/NovelSearch');
const Home = require('./ZZPages/Home');

const NovelRN = StackNavigator({
    Home: { screen: Home },
    Search: { screen: NovelSearch }
});

module.exports = NovelRN;
