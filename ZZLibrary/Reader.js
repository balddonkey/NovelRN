
import Reflux from 'reflux';
import { Alert } from 'react-native';

var Actions = Reflux.createActions({
    search: {
        asyncResult: true
    }
});

class Reader extends Reflux.Store {
    constructor() {
        super();
        this.state = { key: '111' };
        this.listenToMany(Actions);
    }

    onSearch(key, completed = null, failed = null) {
        if (key == '111') {
            this.setState({
                key: 'search 111'
            });
            if (completed) {
                completed();
            }
        } else {
            this.setState({
                key: 'search no 111'
            });
            if (failed) {
                failed();
            }
        }
    }
}

exports.Reader = Reader;
exports.Actions = Actions;
