import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        borderBottomColor: '#dedede',
        borderBottomWidth: 0.5,
        borderTopColor: '#dedede',
        borderTopWidth: 0.5,
        height: 80,
        paddingLeft: 5
    },
    img: {
        height: 60,
        width: 60
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textContainer: {
        maxWidth: '65%'
    },
    iconContainer: {
        width: '30%',
        justifyContent: 'center'
    },
    text: {
        color: '#c4c4c4'
    }
});