import { StyleSheet } from 'react-native';


export default StyleSheet.create({
   container: {
       flexDirection: 'row',
       width: '100%',
       maxHeight: 120,
       justifyContent: 'center',
       marginTop: 5,
   },
   card: {
       width: '90%',
       height: '100%',
       borderColor: '#ebeced',
       borderWidth: 1.5,
       marginTop: 7,
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
       fontSize: 16,
       color: '#e6e6e6'
   },
   status: {
       fontSize: 11,
       color: '#7bbb5e'
   }

});