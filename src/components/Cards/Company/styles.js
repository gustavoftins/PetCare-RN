import { StyleSheet } from 'react-native';


export default StyleSheet.create({
   container: {
       flexDirection: 'row',
       width: '100%',
       height: 100,
       justifyContent: 'center',
       marginTop: 30
   },
   card: {
       width: '90%',
       height: '100%',
       borderColor: '#ebeced',
       borderWidth: 1.5,
       marginTop: 10,
       flexDirection: 'row',
   },
   imgContainer: {
       width: '30%'
   },
   textContainer: {
       width: '70%',
       paddingLeft: 5,
       paddingRight: 5,
       paddingTop: 10,
       paddingBottom: 10
   },
   img: {
       height: '100%',
       width: '100%'
   },
   title: {
       fontSize: 22,
       fontWeight: 'bold',
   },
   description: {
       fontSize: 16
   }

});