import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 15,
        paddingLeft: 30,
        alignItems: 'center',
        borderRadius: 5
    },
    img: {
        height: 90,
        width: 90
    },
    main: {
        width: '70%'
    },
    name: {
        fontSize: 20,
        marginTop: 5,
    },
    imgcontainer: {
        justifyContent: 'center',
        alignContent: 'center'
    },
    description: {
        color: '#c9c9c9'
    },
    price: {
        color: '#ec910a',
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 16
    }
});