
import { Alert } from 'react-native';
import Reflux from 'reflux';
const Fetcher = require('./fetcher.js');
const Actions = Object.create(require('../../Actions.js'));

// for detail, see -> '../../Provider.js'
class Biquge extends Reflux.Store {

    constructor() {
        super();
        this.state = { key: '111' };
        this.listenToMany(Actions);
    }

    onRecommand(cb) {
        Alert.alert('Biqugezzz');
        Fetcher.recommand(cb);
    }

    onSearch(key, completed) {
        Alert.alert('search');
        if (this.provider != null) {
            this.provider.search(key, completed);
        } else {
            completed(null, false);
        }
    }

    onGetChapter(uri) {

    }

}

exports.Store = Biquge;
exports.Actions = Actions;
