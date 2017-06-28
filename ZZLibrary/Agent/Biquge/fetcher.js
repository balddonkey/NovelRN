
import { Alert } from 'react-native';
const HomeURL = 'https://www.baidu.com';
const SearchURL = 'http://zhannei.baidu.com/cse/search';

let Fetcher = {

    recommand: function (cb) {
        fetch('http://www.biquge.com')
            .then((response) => response.text())
            .then((responseText) => {
                console.log(responseText);
                Alert.alert(responseText);
            })
            .catch((error) => {
                Alert.alert(JSON.stringify(error));
            });
    },

    search: function (key, cb) {

    },

    getChapter: function (id, cb) {

    }

}

module.exports = Fetcher;
