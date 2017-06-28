
import { Alert } from 'react-native';
const HomeURL = 'https://www.baidu.com';
const SearchURL = 'http://zhannei.baidu.com/cse/search';

let Fetcher = {

    recommand: function (cb) {
        fetch('http://gank.io/api/search/query/listview/category/福利/count/10/page/1', {
            method: 'GET',
            headers: {

                'Accept': 'application/xml',
                'Authorization': 'Bearer ' + this.authToken,
                'Content-Type': 'application/x-www-form-urlencoded',
            }
            })
            .then((response) => response.html())
            .then((responseText) => {
                console.log(responseText);
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
