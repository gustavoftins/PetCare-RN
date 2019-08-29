import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        maxWidth: '100%',
        paddingLeft: 15,
        borderBottomColor: '#dedede',
        borderBottomWidth: 0.5,
        borderTopColor: '#dedede',
        borderTopWidth: 0.5,
    },
    icon: {
        height: 40,
        width: 40,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        width: '70%'
    },
    name: {
        color: '#ec910a',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    firstIcon: {
        marginRight: 15
    }
});