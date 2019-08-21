import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        alignItems: 'center',
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 5
    },
    description: {
        maxWidth: '90%',
        color: '#d9d9d9',
        fontSize: 15
    },
    name: {
        color: '#7bbb5e',
        fontSize: 18,
        fontWeight: 'bold'
    },
    status: {
        color: '#ec910a',
        fontSize: 12
    }
});