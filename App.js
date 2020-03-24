import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

import HelloWorld from "./componets/HelloWorld";

export default function App() {
  const [firstName,setFirstName] = useState("");
  const [middleName,setMiddleName] = useState("");
  const [lastName,setLastName] = useState("");

  const handleChangeFirstName = (newName)=>{
    console.log(newName);
    setFirstName(newName);
  }
  return (
    <View style={styles.container}>
      <View style = {styles.textInputView}>
        <TextInput
          value = {firstName}
          placeholder= {"first name"}
          onChangeText = {handleChangeFirstName}
        />
      </View>
      <View style = {styles.textInputView}>
        <TextInput
          value = {middleName}
          placeholder= {"middle name"}
          onChangeText = {setMiddleName}
        />
      </View>
      <View style = {styles.textInputView}>
        <TextInput
          value = {lastName}
          placeholder= {"last name"}
          onChangeText = {setLastName}
        />
      </View>
      <HelloWorld name={firstName + " " + middleName + " " + lastName}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputView:{
    borderColor:"green",
    borderWidth:2,
    width:100
  }
});
