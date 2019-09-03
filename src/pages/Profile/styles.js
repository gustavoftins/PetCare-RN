import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    avatarContainer: {
        width: '100%',
        alignItems: 'center'
    },
    label: {
        color: '#7bbb5e',
        fontWeight: 'bold',
        fontSize: 25,
        margin: 20  
    },
    content: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    contentArea: {
        borderColor: '#c4c4c4',
        borderWidth: 1,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%'
    }
});