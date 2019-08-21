import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        height: 120,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 15
    },
    img: {
        height: 90,
        width: 90
    },
    main: {
        width: '70%'
    }
});