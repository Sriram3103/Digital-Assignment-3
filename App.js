import React from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
     
      <View style={styles.container}>
       <Image style={styles.ARR} source={require('./ARR.jpeg')} />
        <Text style={styles.welcome}>No.of Awards Won</Text>
        <Text style={styles.count}>{this.state.count}</Text>
        <Button 
        style={styles.increasebutton}
        title="+"
        onPress={this.incrementValue}
        />
        <View style={{padding: 30}} />
        <Button 
        style={styles.decreasebutton}
        title="-"
        onPress={this.decrementValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor:'#Bfff',
    alignItems:'center',
    justifyContent:'center',
  },
  welcome:{
    fontSize:40,
    padding:30,
    fontWeight: 'bold',
  },

  count : {
    fontSize: 40,
    marginBottom:30
  },

  ARR:{
    height:300,
    width:300
  }
});
