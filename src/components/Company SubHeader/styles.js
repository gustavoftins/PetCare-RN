import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        minWidth: '100%',
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 10
    },
    icon: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 5
    },
    description: {
        maxWidth: '70%',
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
    },
    favorite: {
        height: 20,
        width: 20
    },
    favoriteContainer: {
        flexDirection: 'row'
    },
    textContainer: {
        width: '70%'
    }
});