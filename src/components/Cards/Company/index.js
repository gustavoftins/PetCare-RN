import React from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import styles from './styles';
// import { Container } from './styles';

export default class Company extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <View style={styles.imgContainer}>
            <Image source={this.props.imgpath} style={styles.img}/>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.description}>{this.props.description}</Text>
          </View>
        </View>
      </View>
    );
    }
}
