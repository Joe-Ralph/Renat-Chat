import React from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";


export default function Login({ onLogin, username, setUsername }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
      ></TextInput>
      <Button title={'Login'} onPress={onLogin}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#cacaca',
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  input: {
      backgroundColor:'#fff',
      borderRadius:50,
      height:45,
      width:'80%',
      marginBottom:20,
      paddingHorizontal:25,

  },
});
