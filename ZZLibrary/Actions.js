
import Reflux from 'reflux';

var Actions = Reflux.createActions({
    recommand: {
        asyncResult: true
    },
    search: {
        asyncResult: true
    },
    getChapter: {
        asyncResult: true
    }
});

module.exports = Actions;
