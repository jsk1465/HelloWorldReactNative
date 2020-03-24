import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HelloWorld(props) {
  return (
    <View style={styles.helloBackground}>
      <Text style={styles.helloStyle}>Hello {props.name}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    helloStyle:{
        // fontSize:60,
        // color:"pink",
    },
    helloBackground:{
        // backgroundColor:"black",
    }
});
