import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 300,
        marginBottom: 15,
        paddingLeft: 30,
        borderRadius: 5
    },
    name: {
        fontSize: 24,
        marginTop: 5,
    },
    description: {
        color: '#c9c9c9'
    },
    price: {
        color: '#ec910a',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 20
    }
});