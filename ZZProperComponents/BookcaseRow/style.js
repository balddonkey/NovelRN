
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    BookcaseRow: {
        flex: 1,
        height: 80,
        padding: 10,
        backgroundColor: '#DDD'
    },
    Touchable: {
        flex: 1,
        flexDirection: 'row'
    },
    Thumb: {
        flex: 1,
        aspectRatio: 3/4,
    }, 
    Right: {
        marginHorizontal: 8,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    Name: {
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 25
    },
    Newest: {
        lineHeight: 22,
        fontSize: 15,
    }
});

module.exports = Styles;
